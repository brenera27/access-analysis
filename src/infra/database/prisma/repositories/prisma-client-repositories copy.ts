import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { ClientInformation } from 'src/application/entities/user-info';
import { ClientInformationRepository } from 'src/application/repositories/clientInformation-repositorie';
import { PrismaClientInformationMapper } from '../mappers/prisma-client-mappe';

@Injectable()
export class PrismaClientInformationRepository
  implements ClientInformationRepository
{
  constructor(private prismaService: PrismaService) {}

  async listAll(): Promise<any> {
    const aux = await this.prismaService.clientInformation.findMany();

    return aux;
  }

  async create(clientInformation: ClientInformation): Promise<void> {
    await this.prismaService.clientInformation.create({
      data: PrismaClientInformationMapper.toPrisma(clientInformation),
    });
  }
}
