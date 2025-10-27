"use client";

import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export default function FooterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = emailSchema.safeParse(email);

    if (!validation.success) {
      setError(validation.error.errors[0].message);
    } else {
      setError("");
      alert("Email is valid! (submission placeholder)");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-full px-4 py-2 w-72"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-[#1668E8] text-white rounded-full px-6 py-2 hover:bg-[#145BC4] transition"
      >
        Send
      </button>
    </form>
  );
}
