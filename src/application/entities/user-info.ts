import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'crypto';
import { Geolocation } from './geolocation';
export interface ClientInformationProps {
  ip: string;
  device: string;
  language: string;
  geolocation: Geolocation;
  createdAt: Date;
}

export class ClientInformation {
  private props: ClientInformationProps;
  private _id: string;

  constructor(props: Replace<ClientInformationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set geolocation(geolocation: Geolocation) {
    this.props.geolocation = geolocation;
  }

  public get geolocation(): Geolocation {
    return this.props.geolocation;
  }

  public set ip(ip: string) {
    this.props.ip = ip;
  }

  public get ip(): string {
    return this.props.ip;
  }

  public set device(device: string) {
    this.props.device = device;
  }

  public get device(): string {
    return this.props.device;
  }

  public set language(language: string) {
    this.props.language = language;
  }

  public get language(): string {
    return this.props.language;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
