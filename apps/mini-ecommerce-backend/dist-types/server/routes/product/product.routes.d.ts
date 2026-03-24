export declare const productRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("../../context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    getAllProducts: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            page?: unknown;
            limit?: unknown;
            category?: string[];
            brand?: string[];
            tag?: string[];
            min?: unknown;
            max?: unknown;
            rating?: unknown;
            search?: string;
            sort?: string;
            ids?: number[];
        };
        output: {
            products: {
                id: number;
                title: string;
                price: number;
                discountPercentage: number;
                thumbnail: string;
                stock: number;
                rating: number;
                brandName: string;
                discountedPrice?: number;
                tags?: {
                    id: number;
                    name: string;
                }[];
                category?: {
                    id: number;
                    name: string;
                };
                brand?: {
                    id: number;
                    name: string;
                };
            }[];
            meta: {
                current_page: number;
                last_page: number;
                total: number;
            };
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    getSingleProduct: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: unknown;
        };
        output: {
            product: {
                id: number;
                title: string;
                description: string;
                price: number;
                stock: number;
                categoryId: number;
                createdAt: Date;
                updatedAt: Date;
                discountPercentage?: number;
                rating?: number;
                sku?: string;
                weight?: number;
                dimensions?: unknown;
                warrantyInformation?: string;
                shippingInformation?: string;
                availabilityStatus?: string;
                returnPolicy?: string;
                minimumOrderQuantity?: number;
                meta?: unknown;
                images?: string[];
                thumbnail?: string;
                brandId?: number;
                category?: {
                    id: number;
                    name: string;
                };
                brand?: {
                    id: number;
                    name: string;
                };
                tags?: {
                    id: number;
                    name: string;
                }[];
                reviews?: {
                    id: number;
                    rating: number;
                    comment: string;
                    createdAt: Date;
                    reviewerName: string;
                    reviewerEmail: string;
                }[];
            };
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
    getSimilarProducts: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            productId: number;
        };
        output: {
            products: {
                id: number;
                title: string;
                price: number;
                discountPercentage: number;
                thumbnail: string;
                stock: number;
                rating: number;
                brandName: string;
                discountedPrice?: number;
                tags?: {
                    id: number;
                    name: string;
                }[];
                category?: {
                    id: number;
                    name: string;
                };
                brand?: {
                    id: number;
                    name: string;
                };
            }[];
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
