import { PrismaPg } from "@prisma/adapter-pg";
import jwt from "jsonwebtoken";
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
export async function getUserFromToken(token, prisma) {
    if (!token)
        return null;
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return prisma.user.findUnique({
            where: { id: decoded.userId },
        });
    }
    catch {
        return null;
    }
}
