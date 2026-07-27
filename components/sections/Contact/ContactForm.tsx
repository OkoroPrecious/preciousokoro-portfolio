"use client";

import { useState } from "react";

import { socialLinks } from "@/data/social";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      <input
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your Name"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-amber-400"
      />

      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your Email"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-amber-400"
      />

      <textarea
        rows={6}
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Tell me about your project..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-amber-400"
      />

      <button
        type="submit"
        className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
      >
        Send Message
      </button>

    </form>
  );
}
