import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="bg-navy-950 min-h-screen text-white">{children}</div>;
}
