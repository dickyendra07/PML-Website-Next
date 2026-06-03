import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, PublishStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInsightDto } from './dto/create-insight.dto';
import { UpdateInsightDto } from './dto/update-insight.dto';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function toDate(value?: string | null) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

@Injectable()
export class InsightsService {
  constructor(private readonly prisma: PrismaService) {}

  private buildUpdateData(
    dto: UpdateInsightDto,
  ): Prisma.InsightPostUpdateInput {
    const data: Prisma.InsightPostUpdateInput = {};

    if (dto.title !== undefined) data.title = dto.title;
    if (dto.slug !== undefined) data.slug = slugify(dto.slug);
    if (dto.excerpt !== undefined) data.excerpt = dto.excerpt;
    if (dto.content !== undefined) data.content = dto.content;
    if (dto.category !== undefined) data.category = dto.category;
    if (dto.coverImage !== undefined) data.coverImage = dto.coverImage;
    if (dto.tags !== undefined) data.tags = dto.tags;
    if (dto.status !== undefined) data.status = dto.status;
    if (dto.isFeatured !== undefined) data.isFeatured = dto.isFeatured;
    if (dto.publishedAt !== undefined)
      data.publishedAt = toDate(dto.publishedAt);

    return data;
  }

  async findPublic(category?: string) {
    return this.prisma.insightPost.findMany({
      where: {
        status: PublishStatus.PUBLISHED,
        ...(category
          ? {
              category,
            }
          : {}),
      },
      orderBy: [
        { isFeatured: 'desc' },
        { publishedAt: 'desc' },
        { updatedAt: 'desc' },
      ],
    });
  }

  async findAllAdmin() {
    return this.prisma.insightPost.findMany({
      orderBy: [{ updatedAt: 'desc' }],
    });
  }

  async create(dto: CreateInsightDto) {
    const slug = slugify(dto.slug || dto.title);
    const status = dto.status || PublishStatus.DRAFT;

    return this.prisma.insightPost.create({
      data: {
        title: dto.title,
        slug,
        excerpt: dto.excerpt,
        content: dto.content,
        category: dto.category,
        coverImage: dto.coverImage,
        tags: dto.tags || [],
        status,
        isFeatured: dto.isFeatured || false,
        publishedAt:
          dto.publishedAt !== undefined
            ? toDate(dto.publishedAt)
            : status === PublishStatus.PUBLISHED
              ? new Date()
              : null,
      },
    });
  }

  async update(id: string, dto: UpdateInsightDto) {
    const existing = await this.prisma.insightPost.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Insight post not found.');
    }

    return this.prisma.insightPost.update({
      where: { id },
      data: this.buildUpdateData(dto),
    });
  }

  async archive(id: string) {
    const existing = await this.prisma.insightPost.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Insight post not found.');
    }

    return this.prisma.insightPost.update({
      where: { id },
      data: {
        status: PublishStatus.ARCHIVED,
      },
    });
  }
}
