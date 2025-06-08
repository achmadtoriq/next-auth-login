import { PrismaClient as PostgresClient } from '@prisma/client';
import { PrismaClient as MysqlClient } from '../../prisma/generated/mysql';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ?? new PostgresClient();

export const jagoanMysql =
  globalForPrisma.jagoanMysql ?? new MysqlClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  globalForPrisma.jagoanMysql = jagoanMysql;
}