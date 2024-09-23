import { Injectable } from '@nestjs/common';
import { RoundsRepository } from './rounds.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoundsService {
  constructor(private repository: RoundsRepository) { }

  async createRound(params: { content: Prisma.RoundCreateInput }) {
    const { content } = params;

    const round = await this.repository.createRound({
      data: content,
    })

    return {
      ...round,
      amount: round.amount.toString(),
    };
  }

  async getRounds() {
    const rounds = await this.repository.getRounds({});
    return rounds.map((round) => {
      return {
        ...round,
        amount: round.amount.toString(),
      }
    });
  }
}
