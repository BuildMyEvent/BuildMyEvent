import React, { ReactNode } from "react";

interface TerminalComponentProps {
  children: ReactNode;
}

export default function TerminalComponent({ children }: TerminalComponentProps) {
  return (
    <article className="border-[1px] border-gray-300 bg-gray-50 rounded-xl p-6">
        {
            children
        }
    </article>
  );
}
