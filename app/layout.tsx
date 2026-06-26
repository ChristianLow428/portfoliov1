import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Layout/Cursor";
import Links from "@/components/Layout/Links";
import Navbar from "@/components/Navbar/Navbar";
import { NavProvider } from "@/context/NavContext";
import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/GlobalStyles.scss";
import styles from "@/styles/Layout/MainLayout.module.scss";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian | Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <main className={styles.layout}>
          <NavProvider>
            <Navbar />
            <Links />
            {children}
            <Cursor />
            <Footer />
          </NavProvider>
        </main>
      </body>
    </html>
  );
}
