import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/fluentspeak/about")({
  head: () => ({
    meta: [
      { title: "About — FluentSpeak" },
      { name: "description", content: "Learn about FluentSpeak — the iOS app for becoming fluent through AI-powered conversations." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-5xl font-semibold tracking-tight text-gradient">About FluentSpeak</h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          FluentSpeak is a mobile app that helps you practice and learn a langauge by actually speaking it. Our app uses AI to enable real-time conversations that simulate real-world experiences.
        </p>
        <p>
          Most traditional language learning apps optimize for user retention instead of teaching real langauge skills, resulting in apps that drive the feeling of accomplishment while minimizing the friction necesary to learn a language.
        </p>
        <p>
<<<<<<< HEAD
          By providing real conversational exposure, FluentSpeak allows you to develop true conversational fluency in a simple and straightforward way that other apps don't. Download FluentSpeak now for free on the App Store or Google Play Store.
=======
          By providing real conversational exposure, FluentSpeak allows you to develop true conversational fluency in a simple and straightforward way that other apps don't. Download FluentSpeak now for free on the App Store.
>>>>>>> 258bdbd (Fix App Store link and remove Google Play button)
        </p>
        <p>
          Made by Tanner Blake :)
          <br />
          <a
            href={`mailto:tannerbblake@gmail.com`}
            className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} /> tannerbblake@gmail.com
          </a>
        </p>
      </div>
    </article>
  );
}
