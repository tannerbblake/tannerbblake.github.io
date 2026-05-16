import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FluentSpeak" },
      { name: "description", content: "Get in touch with the FluentSpeak team." },
    ],
  }),
  component: Contact,
});

const CONTACT_EMAIL = "fluentspeak.contact@gmail.com";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const subject = encodeURIComponent(`FluentSpeak contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-5xl font-semibold tracking-tight text-gradient">Get in touch</h1>
      <p className="mt-4 text-muted-foreground">
        Questions, feedback, or partnership ideas? We'd love to hear from you.
      </p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Mail size={16} /> {CONTACT_EMAIL}
      </a>

      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            maxLength={2000}
            className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Tell us what's on your mind…"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-foreground py-3 font-medium text-background transition-transform hover:scale-[1.01]"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
