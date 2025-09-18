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
      <AppContainer>
        <HeaderContainer>
          <h1 className="text-center">New App</h1>
        </HeaderContainer>
        <MainContainer>
          <SideMenuContainer />
          <PageContainer>{children}</PageContainer>
        </MainContainer>
      </AppContainer>
    </html>
  );
}

const tailwindAppClasses = "min-h-dvh flex flex-col";

function AppContainer({
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

function HeaderContainer({
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

function MainContainer({
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

function SideMenuContainer({
  className = "", //for additional classes
}: {
  className?: string;
}) {
  return (
    <nav className={`${tailwindSideMenuClasses} ${className}`}>
      <ul>
        <MenuItem text="Home" />
        <MenuItem text="Tasks" />
      </ul>
    </nav>
  );
}

const tailwindMenuItemClasses =
  "text-center p-3 border-b cursor-pointer hover:underline decoration-indigo-500";

function MenuItem({
  className = "", //for additional classes
  text,
}: {
  className?: string;
  text: string;
}) {
  return <li className={`${tailwindMenuItemClasses} ${className}`}>{text}</li>;
}

const tailwindPageClasses = "grow m-10";

function PageContainer({
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
