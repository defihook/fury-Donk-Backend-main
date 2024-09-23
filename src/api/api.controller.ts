import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlipType, ResultType, StatusType, TokenType } from '@prisma/client';
import { RoundsService } from 'src/modules/rounds/rounds.service';
import { RoundType } from 'src/modules/rounds/type';

@Controller('api')
export class ApiController {
  constructor(private readonly roundsService: RoundsService) { }

  @Post(`round`)
  async createRound(@Body() data: { content: RoundType }) {
    const { content } = data;
    return this.roundsService.createRound({
      content: {
        wallet: content.wallet,
        amount: BigInt(content.amount),
        flip_type: content.flip_type as FlipType,
        result: content.result as ResultType,
        timestamp: new Date(content.timestamp),
        signature: content.signature,
        status: content.status as StatusType,
        token: content.token as TokenType,
      }
    });
  }

  @Get('rounds')
  getRounds() {
    return this.roundsService.getRounds();
  }
}
