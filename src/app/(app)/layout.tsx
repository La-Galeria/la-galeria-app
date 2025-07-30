import { ReactNode } from "react";
import NavBar from "@/components/molecules/navBar"; 

export default function AppLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
    </>
  );
}