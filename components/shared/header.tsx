import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex h-16 items-center justify-between py-8">
        {/* Left side */}
        <div>
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-bold">Pizzeria</h1>
            <p className="text-sm text-gray-400 leading-3">
              It couldn`t be tastier.
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};
