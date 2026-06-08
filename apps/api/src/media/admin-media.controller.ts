import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
import { UpdateMediaAssetDto } from './dto/update-media-asset.dto';
import { MediaService } from './media.service';

function safeFilename(file: Express.Multer.File) {
  const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = extname(originalName);
  return `${Date.now()}-${nameWithoutExt}${extension}`;
}

@Controller('admin/media')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN', 'ADMIN')
export class AdminMediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  findAll(@Query('type') type?: string, @Query('folder') folder?: string) {
    return this.mediaService.findAll(type, folder);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads/media',
        filename: (_request, file, callback) => {
          callback(null, safeFilename(file));
        },
      }),
      limits: {
        fileSize: 20 * 1024 * 1024,
      },
      fileFilter: (_request, file, callback) => {
        const allowed = [
          'image/jpeg',
          'image/png',
          'image/webp',
          'application/pdf',
          'video/mp4',
        ];

        if (!allowed.includes(file.mimetype)) {
          callback(
            new Error('Only JPG, PNG, WEBP, PDF, or MP4 files are allowed.'),
            false,
          );
          return;
        }

        callback(null, true);
      },
    }),
  )
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('folder') folder?: string,
  ) {
    return this.mediaService.createFromUpload(file, folder || 'general');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMediaAssetDto) {
    return this.mediaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(id);
  }
}
