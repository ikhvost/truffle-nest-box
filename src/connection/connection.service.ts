import { Injectable } from '@nestjs/common';
import { ethers, Contract, InterfaceAbi } from 'ethers';

@Injectable()
export class ConnectionService {
  private provider = new ethers.JsonRpcProvider();

  launchToContract(contractAddress: string, contractAbi: InterfaceAbi): Contract {
    return new Contract(contractAddress, contractAbi, this.provider);
  }
}
