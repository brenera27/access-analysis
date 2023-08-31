import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ClientInformationRepository } from '../repositories/clientInformation-repositorie';
import { Geolocation } from '../entities/geolocation';
import { ClientInformation } from '../entities/user-info';
import { ListClientDto } from 'src/infra/http/dtos/list-client';

@Injectable()
export class ListClientInformation {
  constructor(
    private clientInformationRepository: ClientInformationRepository,
  ) {}

  async execute(): Promise<ListClientDto[]> {
    return this.clientInformationRepository.listAll();
  }
}
