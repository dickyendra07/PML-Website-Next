import { Injectable, NotFoundException } from '@nestjs/common';
import { MediaType, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateMediaAssetDto } from './dto/update-media-asset.dto';

function detectMediaType(mimeType?: string): MediaType {
  if (!mimeType) return MediaType.OTHER;

  if (mimeType.startsWith('image/')) return MediaType.IMAGE;
  if (mimeType === 'application/pdf') return MediaType.DOCUMENT;
  if (mimeType.startsWith('video/')) return MediaType.VIDEO;

  return MediaType.OTHER;
}

@Injectable()
export class MediaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(type?: string, folder?: string) {
    return this.prisma.mediaAsset.findMany({
      where: {
        ...(type ? { type: type as MediaType } : {}),
        ...(folder ? { folder } : {}),
      },
      orderBy: [{ createdAt: 'desc' }],
    });
  }

  async createFromUpload(file: Express.Multer.File, folder = 'general') {
    const url = `/uploads/media/${file.filename}`;

    return this.prisma.mediaAsset.create({
      data: {
        filename: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        url,
        type: detectMediaType(file.mimetype),
        folder,
      },
    });
  }

  async update(id: string, dto: UpdateMediaAssetDto) {
    const existing = await this.prisma.mediaAsset.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Media asset not found.');
    }

    const data: Prisma.MediaAssetUpdateInput = {};

    if (dto.altText !== undefined) data.altText = dto.altText;
    if (dto.caption !== undefined) data.caption = dto.caption;
    if (dto.folder !== undefined) data.folder = dto.folder;
    if (dto.type !== undefined) data.type = dto.type;

    return this.prisma.mediaAsset.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const existing = await this.prisma.mediaAsset.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Media asset not found.');
    }

    await this.prisma.mediaAsset.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Media asset deleted from library record.',
    };
  }
}
