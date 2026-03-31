import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./layout.module.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Blog | SE Student",
  description: "A personal blog and portfolio of a Software Engineering Freshman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header className={styles.header}>
          <div className="container">
            <nav className={styles.nav}>
              <Link href="/" className={styles.logo}>
                SE.Log
              </Link>
              <ul className={styles.navLinks}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/blog" className={styles.navLink}>Blog</Link></li>
                <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>

        <footer className={styles.footer}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Software Engineering Student. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
