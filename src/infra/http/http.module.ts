import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/prisma.module';
import { CreateClientInformation } from 'src/application/use-cases/create-clientInformation';
import { ListClientInformation } from 'src/application/use-cases/list-clientInformation';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [CreateClientInformation, ListClientInformation],
})
export class HttpModule {}
