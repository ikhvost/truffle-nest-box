import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConnectionModule } from '../connection/connection.module';
import { MetacoinController } from './metacoin.controller';
import { MetacoinService } from './metacoin.service';

@Module({
  imports: [
    ConnectionModule,
    ConfigModule
  ],
  controllers: [MetacoinController],
  providers: [MetacoinService]
})
export class MetacoinModule {}
