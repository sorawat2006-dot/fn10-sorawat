import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Venue Explorer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 pt-[50px]">
        <ReduxProvider>
          <TopMenu />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}