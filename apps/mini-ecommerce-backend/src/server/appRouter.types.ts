import type { AppRouter as _AppRouter } from "./appRouter.export.js";
import type { inferRouterOutputs, inferRouterInputs } from "@trpc/server";
export type AppRouter = _AppRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
