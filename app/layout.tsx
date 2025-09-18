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
        <HeaderContainer>
          <h1 style={{ fontSize: "3rem", textAlign: "center" }}>New App</h1>
        </HeaderContainer>
        <SideMenuContainer />
        <main>{children}</main>
      </body>
    </html>
  );
}

const tailwindHeaderClasses = "h-30 border-b place-content-around";

function HeaderContainer({
  className = "", //for additional classes
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <header className={`${tailwindHeaderClasses} ${className}`}>
      {children}
    </header>
  );
}

function SideMenuContainer() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Tasks</li>
      </ul>
    </nav>
  );
}
