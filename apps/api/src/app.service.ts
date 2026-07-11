import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';

type ServiceCheck = {
  status: 'ok' | 'error';
  responseTimeMs: number;
};

type HealthCheckResult = {
  status: 'ok' | 'error';
  service: string;
  environment: string;
  timestamp: string;
  uptimeSeconds: number;
  checks: {
    api: ServiceCheck;
    database: ServiceCheck;
    redis: ServiceCheck;
  };
};

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  getApiInfo() {
    return {
      name: 'Pharma Metric Labs API',
      service: 'pml-cms-api',
      status: 'running',
      version: '0.1.0',
      standard: 'NestJS backend for Kalbe corporate project',
      endpoints: {
        health: '/api/health',
        proposals: '/api/proposals',
      },
    };
  }

  async getHealth(): Promise<HealthCheckResult> {
    const databaseStartedAt = performance.now();
    let databaseStatus: ServiceCheck['status'] = 'error';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      databaseStatus = 'ok';
    } catch {
      databaseStatus = 'error';
    }

    const databaseResponseTime =
      Math.round((performance.now() - databaseStartedAt) * 100) / 100;

    const redisStartedAt = performance.now();
    let redisStatus: ServiceCheck['status'] = 'error';

    try {
      const response = await this.redis.ping();
      redisStatus = response === 'PONG' ? 'ok' : 'error';
    } catch {
      redisStatus = 'error';
    }

    const redisResponseTime =
      Math.round((performance.now() - redisStartedAt) * 100) / 100;

    const isHealthy = databaseStatus === 'ok' && redisStatus === 'ok';

    return {
      status: isHealthy ? 'ok' : 'error',
      service: 'pml-cms-api',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      checks: {
        api: {
          status: 'ok',
          responseTimeMs: 0,
        },
        database: {
          status: databaseStatus,
          responseTimeMs: databaseResponseTime,
        },
        redis: {
          status: redisStatus,
          responseTimeMs: redisResponseTime,
        },
      },
    };
  }
}
