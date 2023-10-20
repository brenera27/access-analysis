import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ClientInformationRepository } from '../repositories/clientInformation-repositorie';
import { Geolocation } from '../entities/geolocation';
import { ClientInformation } from '../entities/user-info';

interface CreateClientInformationRequest {
  clientIP: string;
  language: string;
  device: string;
}

@Injectable()
export class CreateClientInformation {
  constructor(
    private clientInformationRepository: ClientInformationRepository,
  ) {}

  async execute(request: CreateClientInformationRequest): Promise<void> {
    try {
      const response = await axios.get(process.env.GEOPLUGIN_URL, {
        params: {
          id: '191.30.55.68',
        },
      });

      if (response.status !== 200 || !response.data) {
        throw new Error('Falha na solicitação ao GeoPlugin');
      }

      const geoData = response.data;

      const {
        geoplugin_city: city,
        geoplugin_region: region,
        geoplugin_regionCode: regionCode,
        geoplugin_regionName: regionName,
        geoplugin_countryCode: countryCode,
        geoplugin_countryName: countryName,
        geoplugin_continentCode: continentCode,
        geoplugin_continentName: continentName,
        geoplugin_timezone: timezone,
      } = geoData;

      const geolocation = new Geolocation({
        city,
        region,
        regionCode,
        regionName,
        countryCode,
        countryName,
        continentCode,
        continentName,
        timezone,
      });

      const userInfo = new ClientInformation({
        ip: request.clientIP,
        language: request.language,
        device: request.device,
        geolocation,
      });
      const userCreated = await this.clientInformationRepository.create(
        userInfo,
      );
    } catch (error) {
      throw new Error('Erro ao criar novo registro');
    }
  }
}
