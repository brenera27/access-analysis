import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ClientInformationRepository } from 'src/application/repositories/clientInformation-repositorie';
import { PrismaClientInformationRepository } from './prisma/repositories/prisma-client-repositories copy';

@Module({
  providers: [
    PrismaService,
    {
      provide: ClientInformationRepository,
      useClass: PrismaClientInformationRepository,
    },
  ],
  exports: [ClientInformationRepository],
})
export class DatabaseModule {}
