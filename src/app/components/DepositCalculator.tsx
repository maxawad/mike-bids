'use client';

import { useMemo, useState } from "react";

type PaymentMethod = "card" | "crypto";

export default function DepositCalculator() {
  const [deposit, setDeposit] = useState<number>(0);
  const [desiredBid, setDesiredBid] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>("");

  const biddingLimit = useMemo<number>(() => deposit * 10, [deposit]);
  const extraNeeded = useMemo<number>(() => {
    return desiredBid > biddingLimit ? desiredBid / 10 - deposit : 0;
  }, [desiredBid, biddingLimit, deposit]);

  const handleDeposit = () => {
    const base = `✅ Deposit received via ${paymentMethod === "card" ? "Credit Card" : "Crypto"}! Your new bidding limit is $${biddingLimit.toLocaleString()}.`;
    const extra =
      extraNeeded > 0
        ? `\nAdd $${extraNeeded.toLocaleString()} more to unlock $${desiredBid.toLocaleString()}.`
        : "";
    setPopupMessage(base + extra);
    setShowPopup(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-background text-foreground shadow-2xl rounded-2xl space-y-4 border border-black/[.08] dark:border-white/[.145]">
      <h1 className="text-xl font-bold">Deposit & Bidding Calculator</h1>

      <label className="block text-sm font-medium">Payment Method</label>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
        className="w-full border border-black/[.08] dark:border-white/[.145] p-2 rounded-lg bg-background"
      >
        <option value="card">💳 Credit Card (Recommended)</option>
        <option value="crypto">🪙 Crypto (Backup)</option>
      </select>

      <label className="block text-sm font-medium">Deposit Amount ($)</label>
      <input
        type="number"
        inputMode="decimal"
        value={deposit}
        onChange={(e) => setDeposit(Number(e.target.value))}
        className="w-full border border-black/[.08] dark:border-white/[.145] p-2 rounded-lg bg-background"
        placeholder="Enter deposit amount"
      />

      <p className="text-foreground/80">
        Your bidding limit: <b>${biddingLimit.toLocaleString()}</b>
      </p>

      <label className="block text-sm font-medium">Desired Bid ($)</label>
      <input
        type="number"
        inputMode="decimal"
        value={desiredBid}
        onChange={(e) => setDesiredBid(Number(e.target.value))}
        className="w-full border border-black/[.08] dark:border-white/[.145] p-2 rounded-lg bg-background"
        placeholder="Enter desired bid"
      />

      <button
        onClick={handleDeposit}
        className="w-full bg-foreground text-background py-2 rounded-xl hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
      >
        Confirm Deposit
      </button>

      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-foreground text-background p-4 rounded-xl shadow-lg max-w-xs whitespace-pre-line">
          {popupMessage}
          <button
            className="ml-3 text-sm underline"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}



