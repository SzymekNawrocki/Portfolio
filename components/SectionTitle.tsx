import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SectionTitle({ children }: Readonly<Props>) {
  return (
    <h3 className=" font-bold  text-foreground  text-center text-2xl lg:text-3xl mt-11 py-8">
      {children}
    </h3>
  );
}