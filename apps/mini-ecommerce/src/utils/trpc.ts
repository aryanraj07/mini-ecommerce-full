// import { createTRPCReact } from "@trpc/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";
// import type { AppRouter } from "api-types";
// import type { AppRouter } from "@backend/server";
import type { AppRouter } from "../../../mini-ecommerce-backend/src/server/index.ts";
export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();
// import type { AppRouter } from "../../../../Ecommerce/app/mini-ecommerce-backend/src/server/index";
