import "@fontsource/inter/index.css";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { LayoutTransition } from "@/components/layout-transition";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AEaaS | Autonomous Employees as a Service",
  description:
    "AEaaS is building autonomous AI employees that replace traditional workflows across interview automation, marketing intelligence, and business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-hero-radial" />
            <Navbar />
            <LayoutTransition>
              <main className="flex-1">{children}</main>
            </LayoutTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
