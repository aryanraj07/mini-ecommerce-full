export declare const filterRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("../../context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    getFilterData: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            categories: {
                count: number;
                value?: string;
            }[];
            brands: {
                count: number;
                value?: string;
            }[];
            tags: {
                count: number;
                value?: string;
            }[];
            priceRange: {
                min: number;
                max: number;
            };
            ratingRange: {
                max: number;
            };
            attributes: {
                [x: string]: string[];
            };
            sortOptions: ("price_asc" | "price_desc" | "rating_desc" | "newest")[];
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
    }>;
}>>;
