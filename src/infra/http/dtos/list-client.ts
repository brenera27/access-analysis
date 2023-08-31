import { IsNotEmpty, IsUUID, Length, IsDateString } from 'class-validator';

export class ListClientDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Length(1, 255)
  device: string;

  @Length(1, 255)
  language: string;

  @Length(1, 255)
  city: string;

  @Length(1, 255)
  region: string;

  @Length(2, 2)
  regionCode: string;

  @Length(1, 255)
  regionName: string;

  @Length(2, 2)
  countryCode: string;

  @Length(1, 255)
  countryName: string;

  @Length(2, 2)
  continentCode: string;

  @Length(1, 255)
  continentName: string;

  @Length(1, 255)
  timezone: string;

  @IsDateString()
  createdAt: Date;
}
