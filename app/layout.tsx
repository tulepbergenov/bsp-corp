import { Providers } from "@/_app/providers";
import "@/_app/styles/index.scss";
import { appTitle, cn } from "@/_shared/lib";
import { Footer } from "@/_widgets";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { montserrat, robotoCondensed } from "./fonts";

export const metadata: Metadata = {
  title: appTitle(),
  description:
    "СтройСтальПроект - предлагает вам широкий спектр услуг в сфере строительства, в том числе в условиях крайнего севера",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_META_CANONICAL,
  },
};

export const viewport: Viewport = {
  themeColor: "#006DB1",
  colorScheme: "light",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html
      lang="ru"
      className={cn("!h-full", montserrat.variable, robotoCondensed.variable)}
    >
      <body className="rendering-speed font-app-fm-montserrat !h-full bg-white text-[16px] font-normal leading-[24px] text-[#484848] antialiased">
        <Providers>
          <main id="main" className="flex-auto">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
