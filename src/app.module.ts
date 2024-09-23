import { Module } from '@nestjs/common';
import { RoundsModule } from './modules/rounds/rounds.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [RoundsModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
