import type { appRouter } from "./index.js";
import type { inferRouterOutputs, inferRouterInputs } from "@trpc/server";
export type AppRouter = typeof appRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
