import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/prisma.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
