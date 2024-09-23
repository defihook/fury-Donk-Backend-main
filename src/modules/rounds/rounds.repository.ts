import { Injectable } from '@nestjs/common';
import { Prisma, Round } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RoundsRepository {
  constructor(private prisma: PrismaService) { }

  async createRound(params: { data: Prisma.RoundCreateInput }): Promise<Round> {
    const { data } = params;
    return this.prisma.round.create({ data });
  }

  async getRounds(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RoundWhereUniqueInput;
    where?: Prisma.RoundWhereInput;
    orderBy?: Prisma.RoundOrderByWithRelationInput;
  }): Promise<Round[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.round.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateRound(params: {
    where: Prisma.RoundWhereUniqueInput;
    data: Prisma.RoundUpdateInput;
  }): Promise<Round> {
    const { where, data } = params;
    return this.prisma.round.update({ where, data });
  }

  async deleteRound(params: {
    where: Prisma.RoundWhereUniqueInput;
  }): Promise<Round> {
    const { where } = params;
    return this.prisma.round.delete({ where });
  }
}
