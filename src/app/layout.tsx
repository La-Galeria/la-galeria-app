import { ReactNode } from "react";
import "@/app/globals.css";

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body className="absolute h-full w-full">
        {children}
      </body>
    </html>
  );
}