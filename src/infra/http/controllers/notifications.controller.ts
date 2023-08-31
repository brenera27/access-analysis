import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateClientInformation } from 'src/application/use-cases/create-clientInformation';
import { Request } from 'express';
import * as useragent from 'express-useragent';
import { ListClientInformation } from 'src/application/use-cases/list-clientInformation';

@Controller('app')
export class NotificationsController {
  constructor(
    private createClientInformation: CreateClientInformation,
    private listClientInformation: ListClientInformation,
  ) {}

  @Get('client')
  async createClientByGet(@Body() body: any, @Req() request: Request) {
    const clientIP = request.ip;
    const acceptLanguageHeader = request.headers['accept-language'];
    const languages = acceptLanguageHeader?.split(',') || '';
    const language = languages[0] ? languages[0].trim() : 'DefaultLanguage';
    const userAgent = useragent.parse(request.headers['user-agent']);
    const device = userAgent.isMobile ? 'Mobile' : 'Desktop';

    await this.createClientInformation.execute({
      clientIP,
      language,
      device,
    });
  }

  @Get('list-client')
  async getAllClientInformation() {
    return await this.listClientInformation.execute();
  }
}
