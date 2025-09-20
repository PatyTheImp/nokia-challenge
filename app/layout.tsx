import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SideMenu } from "./components/SideMenu";
import { Page } from "./components/Page";

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

function App({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tailwindClasses = "min-h-dvh flex flex-col";
  return <body className={`${tailwindClasses} ${className}`}>{children}</body>;
}
