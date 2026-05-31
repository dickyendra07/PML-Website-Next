import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';

type HealthCheckResult = {
  status: 'ok' | 'error';
  service: string;
  timestamp: string;
  checks: {
    api: 'ok';
    database: 'ok' | 'error';
    redis: 'ok' | 'error';
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
    const checks: HealthCheckResult['checks'] = {
      api: 'ok',
      database: 'error',
      redis: 'error',
    };

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      checks.database = 'ok';
    } catch {
      checks.database = 'error';
    }

    try {
      await this.redis.ping();
      checks.redis = 'ok';
    } catch {
      checks.redis = 'error';
    }

    const isHealthy = checks.database === 'ok' && checks.redis === 'ok';

    return {
      status: isHealthy ? 'ok' : 'error',
      service: 'pml-cms-api',
      timestamp: new Date().toISOString(),
      checks,
    };
  }
}
