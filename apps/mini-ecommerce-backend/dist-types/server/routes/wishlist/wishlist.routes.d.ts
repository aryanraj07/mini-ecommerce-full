export declare const wishListRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("../../context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    addToWishlist: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            productId: number;
        };
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    removeFromWishList: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            productId: number;
        };
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    getWishlist: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: number[];
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    mergeWishlist: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
