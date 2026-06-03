import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Express } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateInsightDto } from './dto/create-insight.dto';
import { UpdateInsightDto } from './dto/update-insight.dto';
import { InsightsService } from './insights.service';

function safeFilename(file: Express.Multer.File) {
  const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = extname(originalName);
  return `${Date.now()}-${nameWithoutExt}${extension}`;
}

@Controller('admin/insights')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN', 'ADMIN')
export class AdminInsightsController {
  constructor(private readonly insightsService: InsightsService) {}

  @Get()
  findAll() {
    return this.insightsService.findAllAdmin();
  }

  @Post()
  create(@Body() dto: CreateInsightDto) {
    return this.insightsService.create(dto);
  }

  @Post('upload-cover')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads/insights/covers',
        filename: (_request, file, callback) => {
          callback(null, safeFilename(file));
        },
      }),
      limits: {
        fileSize: 8 * 1024 * 1024,
      },
      fileFilter: (_request, file, callback) => {
        if (
          !['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)
        ) {
          callback(
            new Error('Only JPG, PNG, or WEBP images are allowed.'),
            false,
          );
          return;
        }

        callback(null, true);
      },
    }),
  )
  uploadCover(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/insights/covers/${file.filename}`,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInsightDto) {
    return this.insightsService.update(id, dto);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.insightsService.archive(id);
  }
}
