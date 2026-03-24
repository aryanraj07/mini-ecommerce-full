export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        user: import("./context.js").Context["user"];
    };
    meta: import("trpc-to-openapi").OpenApiMeta;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    products: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
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
    filters: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
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
    users: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
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
    wishlistItems: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
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
    cartItem: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
        };
        meta: import("trpc-to-openapi").OpenApiMeta;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: false;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        addToCart: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                productId: number;
                quantity?: number;
            };
            output: {
                message: string;
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
        getCart: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                cartItem: {
                    id: number;
                    quantity: number;
                    productId: number;
                    title: string;
                    price: number;
                    discountPercentage: number;
                    thumbnail: string;
                    stock: number;
                    rating: number;
                    brandName: string;
                    discountedPrice?: number;
                }[];
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
        getCartSummary: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                cartItemIds: number[];
            };
            output: {
                total: number;
                discount: number;
                payable: number;
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
        removeFromCart: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                cartItemId: number;
            };
            output: {
                message: string;
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
        updateQuantity: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                cartItemId: number;
                quantity?: number;
            };
            output: {
                message: string;
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
        mergeCart: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: {
                message: string;
            };
            meta: import("trpc-to-openapi").OpenApiMeta;
        }>;
    }>>;
    order: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            user: import("./context.js").Context["user"];
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
}>>;
export type AppRouter = typeof appRouter;
