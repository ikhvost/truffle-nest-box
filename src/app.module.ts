import { Module } from '@nestjs/common';
import { MetacoinModule } from './metacoin/metacoin.module';
import { ConnectionModule } from './connection/connection.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MetacoinModule,
    ConnectionModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true
    })
  ]
})
export class AppModule {}
