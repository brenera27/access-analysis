import { ClientInformation } from 'src/application/entities/user-info';

export class PrismaClientInformationMapper {
  static toPrisma(clientInformation: ClientInformation) {
    return {
      id: clientInformation.id,
      language: clientInformation.language,
      device: clientInformation.device,
      createdAt: clientInformation.createdAt,
      city: clientInformation.geolocation.city,
      region: clientInformation.geolocation.region,
      regionCode: clientInformation.geolocation.regionCode,
      regionName: clientInformation.geolocation.regionName,
      countryCode: clientInformation.geolocation.countryCode,
      countryName: clientInformation.geolocation.countryName,
      continentCode: clientInformation.geolocation.continentCode,
      continentName: clientInformation.geolocation.continentName,
      timezone: clientInformation.geolocation.timezone,
    };
  }
}
