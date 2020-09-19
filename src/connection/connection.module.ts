import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Module({
  providers: [ConnectionService],
  exports: [ConnectionService]
})
export class ConnectionModule {}
