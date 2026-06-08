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
import { CreateHomepageFeatureDto } from './dto/create-homepage-feature.dto';
import { UpdateHomepageFeatureDto } from './dto/update-homepage-feature.dto';
import { HomepageFeaturesService } from './homepage-features.service';

function safeFilename(file: Express.Multer.File) {
  const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = extname(originalName);
  return `${Date.now()}-${nameWithoutExt}${extension}`;
}

@Controller('admin/homepage-features')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN', 'ADMIN')
export class AdminHomepageFeaturesController {
  constructor(
    private readonly homepageFeaturesService: HomepageFeaturesService,
  ) {}

  @Get()
  findAll() {
    return this.homepageFeaturesService.findAllAdmin();
  }

  @Post()
  create(@Body() dto: CreateHomepageFeatureDto) {
    return this.homepageFeaturesService.create(dto);
  }

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads/homepage-features',
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
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/homepage-features/${file.filename}`,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHomepageFeatureDto) {
    return this.homepageFeaturesService.update(id, dto);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.homepageFeaturesService.archive(id);
  }
}
