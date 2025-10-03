"use client";

import { useState } from "react";
import DepositCalculator from "./components/DepositCalculator";

export default function Home() {
  const [showCalculator, setShowCalculator] = useState<boolean>(false);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Hello Mike</h1>
      <button
        onClick={() => setShowCalculator((v) => !v)}
        className="rounded-xl bg-foreground text-background px-4 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
      >
        {showCalculator ? "Hide" : "Show"} Calculator
      </button>
      {showCalculator && (
        <div className="w-full max-w-md">
          <DepositCalculator />
        </div>
      )}
    </div>
  );
}
