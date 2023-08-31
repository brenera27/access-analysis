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

  async listAll(): Promise<ClientInformation[] | null> {
    // return this.prismaService.clientInformation.findFirst();
    throw new Error('Errors');
  }

  async create(clientInformation: ClientInformation): Promise<void> {
    console.log('asdasdasd');
    const teste = await this.prismaService.clientInformation.create({
      data: PrismaClientInformationMapper.toPrisma(clientInformation),
    });
    console.log(teste);
  }
}
