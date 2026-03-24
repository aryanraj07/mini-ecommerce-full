import jwt from "jsonwebtoken";
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
