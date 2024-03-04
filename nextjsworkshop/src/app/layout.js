import { Inter } from "next/font/google";
import { Tourney } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const tourney = Tourney({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tourney.className}>
        <header>This is my header</header>
        <nav>
          This is my nav bar
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/posts/1">Post 1</Link>
          <Link href="/posts/new">Create a new post</Link>
          <Link href="/radix"> Find out more about Radix</Link>
          <Link href="/reacticons">Icons</Link>
        </nav>
        {children}
        <footer>This is my footer</footer>
      </body>
    </html>
  );
}
