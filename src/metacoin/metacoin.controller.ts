import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MetacoinService } from './metacoin.service';
import { IsAddressPipe } from '../common/validation/is-address.pipe';
import { SignedTransferDto } from './dto/signed-transfer.dto';

@Controller('metacoin')
export class MetacoinController {
  constructor(private readonly metacoinService: MetacoinService) { }

  @Get('balance/:address')
  getBalance(@Param('address', IsAddressPipe) address: string,
             @Query('eth') eth?: boolean): Promise<string> {
    return this.metacoinService.getBalance(address, eth);
  }

  @Post('send-coin')
  sendCoin(@Body() signedTransfer: SignedTransferDto): Promise<void> {
    return this.metacoinService.sendSignedTransaction(signedTransfer.tx);
  }
}
