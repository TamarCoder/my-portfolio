"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import Button from "@/app/components/ui/button";
import { Input, Textarea } from "@/app/components/ui/input";
import { contactInfo } from "@/app/lib/content/contact";

const emptyForm = { name: "", email: "", subject: "", message: "" };

// No backend: the form opens the visitor's mail app with the message filled in.
export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);

  const updateField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendByEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    window.open(`mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`, "_blank");
  };

  return (
    <form onSubmit={sendByEmail} className="glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[2rem] p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />

      <h3 className="relative mb-2 text-2xl font-semibold">Send a message</h3>
      <div className="relative grid gap-4 sm:grid-cols-2">
        <Input type="text" name="name" placeholder="Your name" required value={form.name} onChange={updateField} />
        <Input type="email" name="email" placeholder="Your email" required value={form.email} onChange={updateField} />
      </div>
      <Input type="text" name="subject" placeholder="Subject" required value={form.subject} onChange={updateField} className="relative w-full" />
      <Textarea name="message" placeholder="Tell me about your project" required rows={6} value={form.message} onChange={updateField} className="relative w-full flex-1" />
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">I usually reply within a day.</span>
        <Button type="submit">
          Send message
          <Send size={16} className="ml-2 inline" />
        </Button>
      </div>
    </form>
  );
}
