import { Module } from '@nestjs/common';
import { RoundsRepository } from './rounds.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { RoundsService } from './rounds.service';

@Module({
  imports: [PrismaModule],
  providers: [RoundsRepository, RoundsService],
  exports: [RoundsService],
})
export class RoundsModule { }
