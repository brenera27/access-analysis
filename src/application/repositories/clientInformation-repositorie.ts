import { ClientInformation } from '../entities/user-info';

export abstract class ClientInformationRepository {
  abstract create(clientInformation: ClientInformation): Promise<void>;
  abstract listAll(): Promise<ClientInformation[] | null>;
}
