import { Module } from '@nestjs/common';
import { RoundsModule } from 'src/modules/rounds/rounds.module';
import { ApiController } from './api.controller';

@Module({
  imports: [RoundsModule],
  controllers: [ApiController],
})
export class ApiModule { }
