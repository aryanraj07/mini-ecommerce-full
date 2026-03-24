import "dotenv/config";
import * as trpcExpress from "@trpc/server/adapters/express";
export declare const createContext: ({ req, res, }: trpcExpress.CreateExpressContextOptions) => Promise<{
    prisma: any;
    user: any;
    req: import("express").Request<core.ParamsDictionary, any, any, core.Query, Record<string, any>>;
    res: import("express").Response<any, Record<string, any>>;
    guestId: any;
}>;
export type Context = Awaited<ReturnType<typeof createContext>>;
