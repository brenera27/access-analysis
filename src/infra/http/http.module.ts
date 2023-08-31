import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/prisma.module';
import { CreateClientInformation } from 'src/application/use-cases/create-clientInformation';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [CreateClientInformation],
})
export class HttpModule {}
