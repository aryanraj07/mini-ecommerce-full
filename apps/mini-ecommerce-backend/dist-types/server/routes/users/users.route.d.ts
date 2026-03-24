export declare const userRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("../../context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    sendOtp: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            phoneNumber: string;
        };
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    verifyOtp: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            phoneNumber: string;
            otp: string;
        };
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    me: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            user: {
                id: number;
                phoneNumber: string;
                isVerified: boolean;
                role: "USER" | "ADMIN";
                createdAt: Date;
                name?: string;
                email?: string;
            };
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    refresh: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: void;
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    logout: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: {
            message: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
