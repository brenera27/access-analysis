import { ListClientDto } from 'src/infra/http/dtos/list-client';
import { ClientInformation } from '../entities/user-info';

export abstract class ClientInformationRepository {
  abstract create(clientInformation: ClientInformation): Promise<void>;
  abstract listAll(): Promise<ListClientDto[] | null>;
}
