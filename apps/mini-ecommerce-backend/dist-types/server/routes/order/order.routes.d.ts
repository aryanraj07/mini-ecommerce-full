export declare const orderRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("../../context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    checkout: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            cartItemsIds: number[];
        };
        output: {
            orderId: number;
            razorpayOrderId: string;
            amount: number;
            currency: string;
            key: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    getMyOrders: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            id: number;
            userId: number;
            totalAmount: number;
            paymentStatus: "PENDING" | "SUCCESS" | "FAILED";
            orderStatus: "CREATED" | "CONFIRMED" | "SHIPPED" | "DELIVERED" | "CANCELLED";
            createdAt: Date;
            items: {
                id: number;
                orderId: number;
                productId: number;
                quantity: number;
                cartItemId: number;
                price: number;
                product: {
                    id: number;
                    title: string;
                    thumbnail?: string;
                };
            }[];
            paymentId?: string;
        }[];
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    getOrdderById: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orderId: number;
        };
        output: {
            id: number;
            userId: number;
            totalAmount: number;
            paymentStatus: "PENDING" | "SUCCESS" | "FAILED";
            orderStatus: "CREATED" | "CONFIRMED" | "SHIPPED" | "DELIVERED" | "CANCELLED";
            createdAt: Date;
            items: {
                id: number;
                orderId: number;
                productId: number;
                quantity: number;
                cartItemId: number;
                price: number;
                product: {
                    id: number;
                    title: string;
                    thumbnail?: string;
                };
            }[];
            paymentId?: string;
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    myOrders: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: any;
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
