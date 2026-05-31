import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'Pharma Metric Labs API',
      service: 'pml-cms-api',
      status: 'running',
      version: '0.1.0',
      standard: 'NestJS backend for Kalbe corporate project',
    };
  }

  getHealth() {
    return {
      status: 'ok',
      service: 'pml-cms-api',
      timestamp: new Date().toISOString(),
    };
  }
}
