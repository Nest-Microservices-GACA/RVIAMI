import { Controller } from '@nestjs/common';
import { RviamiService } from './rviami.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateRviaMiDto } from './dto/create-migration.dto';

@Controller()
export class RviamiController {
  constructor(private readonly rviamiService: RviamiService) {}

  @MessagePattern('rvia.migracion.proyecto')
  registerUser(@Payload() createRviaMiDto: CreateRviaMiDto) {
    return this.rviamiService.createMigration(createRviaMiDto);
  }

}
