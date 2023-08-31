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
    const geoPluginURL = `http://www.geoplugin.net/json.gp?ip=191.30.55.68`;
    try {
      // Faz a solicitação HTTP para o serviço GeoPlugin
      const response = await axios.get(geoPluginURL);
      // Verifica se a resposta possui os dados desejados
      if (response.status === 200 && response.data) {
        const geoData = response.data;

        // Extrai os dados desejados do JSON de resposta
        const {
          geoplugin_city,
          geoplugin_region,
          geoplugin_regionCode,
          geoplugin_regionName,
          geoplugin_countryCode,
          geoplugin_countryName,
          geoplugin_continentCode,
          geoplugin_continentName,
          geoplugin_timezone,
        } = geoData;

        const geolocation = new Geolocation({
          city: geoplugin_city,
          region: geoplugin_region,
          regionCode: geoplugin_regionCode,
          regionName: geoplugin_regionName,
          countryCode: geoplugin_countryCode,
          countryName: geoplugin_countryName,
          continentCode: geoplugin_continentCode,
          continentName: geoplugin_continentName,
          timezone: geoplugin_timezone,
        });
        const userInfo = new ClientInformation({
          ip: request.clientIP,
          language: request.language,
          device: request.device,
          geolocation,
        });
        this.clientInformationRepository.create(userInfo);
        console.log(userInfo);
        // Retorna os dados como resposta
      } else {
        // Se a solicitação não for bem-sucedida, lança uma exceção com uma mensagem de erro
        throw new Error('Falha na solicitação ao GeoPlugin');
      }
    } catch (error) {
      console.error('Erro ao acessar o serviço GeoPlugin:', error);
      throw new Error('Erro ao acessar o serviço GeoPlugin');
    }
  }
}
