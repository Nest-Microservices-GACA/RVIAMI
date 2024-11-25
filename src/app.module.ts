import { Module } from '@nestjs/common';
import { RviamiModule } from './rviami/rviami.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';

@Module({
  imports: [
    RviamiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
