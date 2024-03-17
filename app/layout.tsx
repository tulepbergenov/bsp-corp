import type { Metadata, Viewport } from "next";
import "@/_app/styles/index.scss";
import { ReactNode } from "react";
import { appTitle } from "@/_shared/lib";

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
    <html lang="ru">
      <body>
        <main id="main">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
