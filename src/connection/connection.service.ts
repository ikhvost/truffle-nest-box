import { Injectable } from '@nestjs/common';
import { ethers, Contract, ContractInterface } from 'ethers';

@Injectable()
export class ConnectionService {
  private provider = new ethers.providers.JsonRpcProvider();

  launchToContract(contractAddress: string, contractAbi: ContractInterface): Contract {
    return new Contract(contractAddress, contractAbi, this.provider);
  }
}
