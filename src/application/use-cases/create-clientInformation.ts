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
    const geoPluginURL = 'http://www.geoplugin.net/json.gp?ip=191.30.55.68';

    try {
      const response = await axios.get(geoPluginURL);

      if (response.status !== 200 || !response.data) {
        console.error('Falha na solicitação ao GeoPlugin');
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
      console.log(userCreated);
    } catch (error) {
      console.error('Erro ao criar novo registro:', error);
      throw new Error('Erro ao criar novo registro');
    }
  }
}
