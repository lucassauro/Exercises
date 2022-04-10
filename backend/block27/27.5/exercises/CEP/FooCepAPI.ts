// ./FooCepAPI.ts
import { CepAPI } from './CepService';

export class MockCepApi implements CepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The mock address for "cep:${cep}, n°:${number}" is "mock address"`;
  }

  async getCepByAddress(address: string, number:number): Promise<string> {
    return `The mock address for "cep:${address}, n°:${number}" is "mock address"`;
  }
}

class FooCepAPI implements CepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number:number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;