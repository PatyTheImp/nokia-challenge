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
          <h1 className="text-5xl text-center">New App</h1>
        </HeaderContainer>
        <MainContainer>
          <SideMenuContainer />
          <main>{children}</main>
        </MainContainer>
      </AppContainer>
    </html>
  );
}

function AppContainer({ children }: { children: React.ReactNode }) {
  return <body className="min-h-dvh flex flex-col">{children}</body>;
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

const tailwindMainClasses = "grow columns-2 flex";

function MainContainer({
  className = "", //for additional classes
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${tailwindMainClasses} ${className}`}>{children}</div>
  );
}

function SideMenuContainer() {
  return (
    <nav className="border-r w-40">
      <ul>
        <MenuItem text="Home" />
        <MenuItem text="Tasks" />
      </ul>
    </nav>
  );
}

const tailwindMenuItemClasses = "text-center p-3 border-b";

function MenuItem({
  className = "", //for additional classes
  text,
}: {
  className: string;
  text: string;
}) {
  return <li className={`${tailwindMenuItemClasses} ${className}`}>{text}</li>;
}
