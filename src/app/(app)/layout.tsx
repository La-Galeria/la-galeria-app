import { ReactNode } from "react";
import NavBar from "@/components/molecules/navBar"; 

export default function AppLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <NavBar className="absolute bottom-0 flex justify-between" />
      <main>
        {children}
      </main>
    </>
  );
}