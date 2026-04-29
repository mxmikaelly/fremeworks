import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import "dotenv/config";
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    // Prisma types are generated at runtime; eslint cannot fully resolve this call.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({ adapter });
  }
}
