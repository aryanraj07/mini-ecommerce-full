import jwt from "jsonwebtoken";

export async function getUserFromToken(
  token: string | undefined,
  prisma: { user: { findUnique: Function } },
) {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as {
      userId: number;
    };

    return prisma.user.findUnique({
      where: { id: decoded.userId },
    });
  } catch {
    return null;
  }
}
