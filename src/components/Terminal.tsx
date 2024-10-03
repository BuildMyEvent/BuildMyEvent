import React, { ReactNode } from "react";

interface TerminalComponentProps {
  children: ReactNode;
}

export default function TerminalComponent({ children }: TerminalComponentProps) {
  return (
    <div className="flex flex-col  border-[1px] border-gray-400 w-fixed rounded-xl">

      <div className="flex items-center top-0 left-0 px-4 justify-between h-8 bg-code-background w-fixed bg-default-100 dark:bg-default-50 border-b-[1px] border-gray-400">
        <div className="flex items-center gap-2 basis-1/3">
          <div className="w-3 h-3 rounded-full bg-light-red"></div>
          <div className="w-3 h-3 rounded-full bg-light-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-light-green"></div>
        </div>
        <div className="flex basis-1/3 h-full justify-center items-center"></div>
        <div className="flex basis-1/3"></div>
      </div>
      <div className="flex flex-col gap-2 p-4 justify-between items-center">
        {children}
      </div>
    </div>
  );
}
