import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {

  PORT: number;

  RVIA_ENVIRONMENT: number;
  RVIA_PATH: string;

  // USUARIOS_MICROSERVICE_HOST: string;
  // USUARIOS_MICROSERVICE_PORT: number;

  // NATS_SERVERS: string[];
}

const envsSchema = joi.object({

  PORT: joi.number().required(),

  RVIA_ENVIRONMENT: joi.number().required(),
  RVIA_PATH: joi.string().required(),

  // USUARIOS_MICROSERVICE_HOST: joi.string().required(),
  // USUARIOS_MICROSERVICE_PORT: joi.number().required(),

  // NATS_SERVERS: joi.array().items( joi.string() ).required(),

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
  port: envVars.PORT,

  RVIAEnv: envVars.RVIA_ENVIRONMENT,
  RVIAPath: envVars.RVIA_PATH,
  
  // usuariosMicroserviceHost: envVars.USUARIOS_MICROSERVICE_HOST,
  // usuariosMicroservicePort: envVars.USUARIOS_MICROSERVICE_PORT,

  // natsServers: envVars.NATS_SERVERS,

};