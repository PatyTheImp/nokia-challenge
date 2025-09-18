import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task List App",
  description: "An application for visualizing tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}

function Header() {
  return <header>New App</header>;
}

function Menu() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Tasks</li>
      </ul>
    </nav>
  );
}
