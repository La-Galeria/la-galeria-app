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
      <main className="min-h-full h-max w-full bg-slate-50/75 p-4 pb-10">
        {children}
      </main>
    </>
  );
}