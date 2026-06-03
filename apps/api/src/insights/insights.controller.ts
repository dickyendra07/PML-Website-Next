import { Controller, Get, Query } from '@nestjs/common';
import { InsightsService } from './insights.service';

@Controller('insights')
export class InsightsController {
  constructor(private readonly insightsService: InsightsService) {}

  @Get()
  findPublic(@Query('category') category?: string) {
    return this.insightsService.findPublic(category);
  }
}
