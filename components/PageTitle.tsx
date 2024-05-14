import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Readonly<Props>) {
  return (
    <h1 className=" text-center mt-11 mb-11 text-3xl font-bold  md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}