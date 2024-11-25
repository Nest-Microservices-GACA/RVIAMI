import { Module } from '@nestjs/common';
import { RviamiService } from './rviami.service';
import { RviamiController } from './rviami.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  controllers: [RviamiController],
  providers: [RviamiService],
  imports: [],
  exports:[
    // TypeOrmModule
  ]
})
export class RviamiModule {}
