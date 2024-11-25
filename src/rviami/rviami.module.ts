import { Module } from '@nestjs/common';
import { RviamiService } from './rviami.service';
import { RviamiController } from './rviami.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from '@nestjs/microservices';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [RviamiController],
  providers: [RviamiService],
  imports: [
    CommonModule
  ],
  exports:[
    TypeOrmModule
  ]
})
export class RviamiModule {}
