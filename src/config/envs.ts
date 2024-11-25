import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: number;
  PORT: number;

  // USUARIOS_MICROSERVICE_HOST: string;
  // USUARIOS_MICROSERVICE_PORT: number;

  // NATS_SERVERS: string[];

  SECRET_KEY: string;
}

const envsSchema = joi.object({
  DB_HOST: joi.string().required(),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_NAME: joi.string().required(),
  DB_PORT: joi.number().required(),
  PORT: joi.number().required(),

  // USUARIOS_MICROSERVICE_HOST: joi.string().required(),
  // USUARIOS_MICROSERVICE_PORT: joi.number().required(),

  // NATS_SERVERS: joi.array().items( joi.string() ).required(),

  SECRET_KEY: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
});


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;


export const envs = {
  dbHost: envVars.DB_HOST,
  dbUsername: envVars.DB_USERNAME,
  dbPassword: envVars.DB_PASSWORD,
  dbName: envVars.DB_NAME,
  dbPort: envVars.DB_PORT,
  port: envVars.PORT,
  
  // usuariosMicroserviceHost: envVars.USUARIOS_MICROSERVICE_HOST,
  // usuariosMicroservicePort: envVars.USUARIOS_MICROSERVICE_PORT,

  // natsServers: envVars.NATS_SERVERS,

  // jwtSecret: envVars.JWT_SECRET,
  secretKey: envVars.SECRET_KEY,
};