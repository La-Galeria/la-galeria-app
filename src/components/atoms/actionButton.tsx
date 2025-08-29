import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

export default function ActionButton({ className, children, ...props }: ActionButtonProps) {
  return (
    <button className={"rounded-full px-10 py-2 m-2 " + className} {...props}>
      {children}
    </button>
  );
}