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
import { diskStorage } from 'multer';
import type { Express } from 'express';
import { extname } from 'path';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CataloguesService } from './catalogues.service';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';

function safeFilename(file: Express.Multer.File) {
  const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = extname(originalName);
  return `${Date.now()}-${nameWithoutExt}${extension}`;
}

@Controller('admin/catalogues')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN', 'ADMIN')
export class AdminCataloguesController {
  constructor(private readonly cataloguesService: CataloguesService) {}

  @Get()
  findAll() {
    return this.cataloguesService.findAllAdmin();
  }

  @Get('requests')
  findRequests() {
    return this.cataloguesService.findRequestsAdmin();
  }

  @Post()
  create(@Body() dto: CreateCatalogueDto) {
    return this.cataloguesService.create(dto);
  }

  @Post('upload-file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads/catalogues/files',
        filename: (_request, file, callback) => {
          callback(null, safeFilename(file));
        },
      }),
      limits: {
        fileSize: 20 * 1024 * 1024,
      },
      fileFilter: (_request, file, callback) => {
        if (file.mimetype !== 'application/pdf') {
          callback(new Error('Only PDF files are allowed.'), false);
          return;
        }

        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/catalogues/files/${file.filename}`,
    };
  }

  @Post('upload-cover')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/uploads/catalogues/covers',
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
      url: `/uploads/catalogues/covers/${file.filename}`,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCatalogueDto) {
    return this.cataloguesService.update(id, dto);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.cataloguesService.archive(id);
  }
}
