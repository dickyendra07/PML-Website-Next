import {
  BadRequestException,
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
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreatePopupDto } from './dto/create-popup.dto';
import { UpdatePopupDto } from './dto/update-popup.dto';
import { PopupsService } from './popups.service';

type UploadedImage = {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
};

const uploadDir = join(process.cwd(), 'public/uploads/popups');

function ensureUploadDir() {
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }
}

@Controller('admin/popups')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN', 'ADMIN')
export class AdminPopupsController {
  constructor(private readonly popupsService: PopupsService) {}

  @Get()
  findAll() {
    return this.popupsService.findAll();
  }

  @Post()
  create(@Body() dto: CreatePopupDto) {
    return this.popupsService.create(dto);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (_request, _file, callback) => {
          ensureUploadDir();
          callback(null, uploadDir);
        },
        filename: (_request, file, callback) => {
          const safeName = file.originalname
            .replace(extname(file.originalname), '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

          const uniqueName = `${Date.now()}-${safeName}${extname(file.originalname).toLowerCase()}`;

          callback(null, uniqueName);
        },
      }),
      limits: {
        fileSize: 8 * 1024 * 1024,
      },
      fileFilter: (_request, file, callback) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

        if (!allowedTypes.includes(file.mimetype)) {
          callback(
            new BadRequestException(
              'Only JPG, PNG, and WEBP images are allowed.',
            ),
            false,
          );
          return;
        }

        callback(null, true);
      },
    }),
  )
  uploadImage(@UploadedFile() file?: UploadedImage) {
    if (!file) {
      throw new BadRequestException('Image file is required.');
    }

    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/popups/${file.filename}`,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePopupDto) {
    return this.popupsService.update(id, dto);
  }

  @Patch(':id/archive')
  archive(@Param('id') id: string) {
    return this.popupsService.archive(id);
  }
}
