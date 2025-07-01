import type { Metadata } from "next";
import { Suspense } from "react";
import ThemeProvider from "~/components/common/theme-provider";
import * as font from "~/lib/conf/font";
import AuthModal from "./_components/auth/AuthModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Chronicles: Read, write and share your stories.",
  description:
    "On `The Chronicles`, anyone can share their thoughts, valuable knowledge, and life wisdom with everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.body.variable} ${font.title.variable} ${font.heading.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense>
            <AuthModal />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
