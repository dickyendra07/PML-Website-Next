import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProposalDto } from './dto/create-proposal.dto';

@Injectable()
export class ProposalsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProposalDto) {
    return this.prisma.proposalSubmission.create({
      data: {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone || null,
        country: data.country || null,
        serviceType: data.serviceType,
        projectNeeds: data.projectNeeds,
        sourcePage: data.sourcePage || null,
      },
    });
  }

  async findAll() {
    return this.prisma.proposalSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });
  }
}
