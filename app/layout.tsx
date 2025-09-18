import type { Metadata } from "next";
import "./globals.css";
import MenuItem from "./components/MenuItem";

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
      <App>
        <Header>
          <h1 className="text-center">New App</h1>
        </Header>
        <Main>
          <SideMenu />
          <Page>{children}</Page>
        </Main>
      </App>
    </html>
  );
}

const tailwindAppClasses = "min-h-dvh flex flex-col";

function App({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <body className={`${tailwindAppClasses} ${className}`}>{children}</body>
  );
}

const tailwindHeaderClasses = "h-30 border-b place-content-around";

function Header({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={`${tailwindHeaderClasses} ${className}`}>
      {children}
    </header>
  );
}

const tailwindMainClasses = "grow columns-2 flex";

function Main({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${tailwindMainClasses} ${className}`}>{children}</div>
  );
}

const tailwindSideMenuClasses = "border-r w-40";

function SideMenu({
  className = "", //for additional classes
}: {
  className?: string;
}) {
  return (
    <nav className={`${tailwindSideMenuClasses} ${className}`}>
      <ul>
        <MenuItem text="Home" href="/" />
        <MenuItem text="Tasks" href="/tasks" />
      </ul>
    </nav>
  );
}

const tailwindPageClasses = "grow m-10";

function Page({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main className={`${tailwindPageClasses} ${className}`}>{children}</main>
  );
}
