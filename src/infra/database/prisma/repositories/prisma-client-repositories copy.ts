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
    const res = await this.prismaService.clientInformation.findMany();
    console.log(res);
    return res;
  }

  async create(clientInformation: ClientInformation): Promise<void> {
    this.prismaService.clientInformation.create({
      data: PrismaClientInformationMapper.toPrisma(clientInformation),
    });
  }
}
