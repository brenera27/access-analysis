export interface GeolocationProps {
  city: string;
  region: string;
  regionCode: string;
  regionName: string;
  countryCode: string;
  countryName: string;
  continentCode: string;
  continentName: string;
  timezone: string;
}

export class Geolocation {
  private props: GeolocationProps;

  constructor(props: GeolocationProps) {
    this.props = props;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get city(): string {
    return this.props.city;
  }

  public set region(region: string) {
    this.props.region = region;
  }

  public get region(): string {
    return this.props.region;
  }

  public set regionCode(regionCode: string) {
    this.props.regionCode = regionCode;
  }

  public get regionCode(): string {
    return this.props.regionCode;
  }

  public set regionName(regionName: string) {
    this.props.regionName = regionName;
  }

  public get regionName(): string {
    return this.props.regionName;
  }

  public set countryCode(countryCode: string) {
    this.props.countryCode = countryCode;
  }

  public get countryCode(): string {
    return this.props.countryCode;
  }

  public set countryName(countryName: string) {
    this.props.countryName = countryName;
  }

  public get countryName(): string {
    return this.props.countryName;
  }

  public set continentCode(continentCode: string) {
    this.props.continentCode = continentCode;
  }

  public get continentCode(): string {
    return this.props.continentCode;
  }

  public set continentName(continentName: string) {
    this.props.continentName = continentName;
  }

  public get continentName(): string {
    return this.props.continentName;
  }

  public set timezone(timezone: string) {
    this.props.timezone = timezone;
  }

  public get timezone(): string {
    return this.props.timezone;
  }
}
