import type { Metadata } from "next";

import "./globals.css";
import Header from "./layout/Header";
import { Suspense } from "react";
import AuthLoader from "./components/AuthLoader";
import FiltersHydrator from "./components/FiltersHydrator";
import Providers from "./providers";
import AUthProvider from "./components/common/AUthProvider";
export const metadata: Metadata = {
  title: "Mini Ecommerce App",
  description: "Welcome to Ecommerece App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AUthProvider>
            <Suspense fallback={null}>
              <FiltersHydrator />
            </Suspense>

            <Suspense fallback={null}>
              <Header />
            </Suspense>

            <main className="pt-16">{children}</main>
          </AUthProvider>
        </Providers>
      </body>
    </html>
  );
}
