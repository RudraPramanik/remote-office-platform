import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * The onModuleInit is optional — if you leave it out, Prisma will connect lazily on its first call to the database.
 */

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }
}
