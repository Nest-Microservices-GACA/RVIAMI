import { Module } from '@nestjs/common';
import { RviamiModule } from './rviami/rviami.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: envs.dbHost,
      port: envs.dbPort,
      database: envs.dbName,
      username: envs.dbUsername,
      password: envs.dbPassword,
      autoLoadEntities: true,
      synchronize:false
    }),
    RviamiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
