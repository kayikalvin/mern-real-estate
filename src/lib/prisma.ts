import { PrismaClient } from "@prisma/client";

///creating a global prisma instance for crud operations
const globalForPrisma = global as unknown as {prisma:PrismaClient};
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production")globalForPrisma.prisma = prisma;

export default prisma;