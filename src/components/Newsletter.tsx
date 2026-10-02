"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div>
      <p className="font-display text-sm font-bold text-slate-900 fit:hidden">Stay Connected</p>
      <p className="text-xs text-slate-600 fit:hidden">Subscribe to our newsletter and get the latest updates &amp; opportunities.</p>
      {done ? (
        <p className="mt-2 text-sm font-medium text-emerald-700 fit:mt-0 fit:text-xs">Thanks! You&apos;re subscribed.</p>
      ) : (
        <form
          className="mt-2 flex overflow-hidden rounded-md border border-slate-300 fit:mt-0 fit:w-52 fit:2xl:w-60"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire to newsletter API
            setDone(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-0 flex-1 px-3 py-2 text-sm outline-none fit:py-1.5 fit:text-xs"
          />
          <button type="submit" className="bg-blue-700 px-4 text-xs font-bold uppercase text-white hover:bg-blue-800">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
