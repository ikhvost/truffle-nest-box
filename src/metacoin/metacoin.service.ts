import { Injectable } from '@nestjs/common';
import { Contract } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { ConnectionService } from '../connection/connection.service';
import * as MetaCoin from '../../build/contracts/MetaCoin.json';

@Injectable()
export class MetacoinService {
  private metacoinContract: Contract;

  constructor(private readonly connectionService: ConnectionService,
              private readonly configService: ConfigService) {
    this.metacoinContract = this.getMetacoinContract();
  }

  async getBalance(account: string, eth?: boolean): Promise<string> {
    try {
      const balance = eth ?
        await this.metacoinContract.getBalanceInEth(account) :
        await this.metacoinContract.getBalance(account);
      return balance.toString();
    } catch (error) {
      throw new Error('Unable to check account balance');
    }
  }

  sendSignedTransaction(tx: string): Promise<void> {
    return this.metacoinContract.sendTransaction(tx)
      .catch(() => {
        throw new Error('Unable to send signed transaction');
      });
  }

  private getMetacoinContract(): Contract {
    try {
      const metacoinAddress = this.configService.get('METACOIN_ADDRESS');
      const metacoinAbi = MetaCoin.abi;
      return this.connectionService.launchToContract(metacoinAddress, metacoinAbi);
    } catch (error) {
      throw new Error('Unable to connect to MetaCoin contract');
    }
  }
}
