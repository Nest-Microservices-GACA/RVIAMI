import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CommonService } from 'src/common/common.service';
import { CreateRviaMiDto } from './dto/create-migration.dto';
import { envs } from 'src/config';

const addon = require(envs.RVIAPath);

@Injectable()
export class RviamiService {

    private readonly logger = new Logger('RVIAMIService');

    constructor(
      private readonly encryptionService: CommonService
    ) {
    }

    async createMigration(createRviaMiDto: CreateRviaMiDto) {

        try {
    
            const { idu_aplicacion } = createRviaMiDto;
            // const obj = new addon.CRvia(envs.RVIAEnv);
            // const lID = aplicacion.idu_proyecto;
            // const lEmployee = aplicacion.user.numero_empleado;
            // const ruta_proyecto = this.encryptionService.decrypt(aplicacion.sourcecode.nom_directorio);
            // const tipo_proyecto = aplicacion.num_accion;
            // const iConIA = 1;
            // const Bd = 1 = Producion 2 = Desarrollo
      
            // const bConDoc   = Array.isArray(aplicacion.opc_arquitectura) && aplicacion.opc_arquitectura.length > 1 ? aplicacion.opc_arquitectura[1] : false;
            // const bConCod   = Array.isArray(aplicacion.opc_arquitectura) && aplicacion.opc_arquitectura.length > 2 ? aplicacion.opc_arquitectura[2] : false;
            // const bConTest  = Array.isArray(aplicacion.opc_arquitectura) && aplicacion.opc_arquitectura.length > 3 ? aplicacion.opc_arquitectura[3] : false;
            // const bCalifica = Array.isArray(aplicacion.opc_arquitectura) && aplicacion.opc_arquitectura.length > 4 ? aplicacion.opc_arquitectura[4] : false;
    
            // const initProcessResult = await obj.initProcess( lID, lEmployee, ruta_proyecto, tipo_proyecto, iConIA, bConDoc, bConCod, bConTest, bCalifica, () => {});
        
            // const resultType = typeof initProcessResult;
    
            // if (resultType === 'number') {
            //   this.logger.debug('Mensaje del RVIA (int):', initProcessResult);
            // } else if (resultType === 'string') {
            //   this.logger.debug('Mensaje del RVIA (string):', initProcessResult);
            // } else {
            //   this.logger.debug('Mensaje del RVIA (otro tipo):', initProcessResult);
            // }
        
            // if( initProcessResult == 1){
            //   messageRVIA = "Proceso IA Iniciado Correctamente";
            // }else{
            //   isValidProcess = false;
            //   messageRVIA = ErrorRVIA[initProcessResult];
            // }
        
            // return { isValidProcess, messageRVIA };
            return "Hola desde rviami"
    
        } catch (error) {
          throw new RpcException({
            status: 400,
            message: error.message,
          });
        }
      }

}
