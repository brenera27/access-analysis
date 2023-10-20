import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ClientInformation } from 'src/application/entities/user-info';
import { ClientInformationRepository } from 'src/application/repositories/clientInformation-repositorie';
import { PrismaClientInformationMapper } from '../mappers/prisma-client-mappe';
import { ListClientDto } from 'src/infra/http/dtos/list-client';

@Injectable()
export class PrismaClientInformationRepository
  implements ClientInformationRepository
{
  constructor(private prismaService: PrismaService) {}

  async listAll(): Promise<ListClientDto[] | null> {
    return await this.prismaService.clientInformation.findMany();
  }

  async create(clientInformation: ClientInformation): Promise<void> {
    await this.prismaService.clientInformation.create({
      data: PrismaClientInformationMapper.toPrisma(clientInformation),
    });
  }
}
