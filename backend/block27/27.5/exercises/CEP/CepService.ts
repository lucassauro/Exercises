// ./CepService.ts
import FooCepAPI from './FooCepAPI';

export interface CepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(adress: string, number: number): Promise<string>;
}

class CepService {
  private readonly cepApi: CepAPI;

  constructor(cepAPI: CepAPI = new FooCepAPI()) {
    this.cepApi = cepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;