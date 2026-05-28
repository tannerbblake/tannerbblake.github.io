import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/fluentspeak/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FluentSpeak" },
      { name: "description", content: "The terms governing your use of the FluentSpeak app." },
    ],
  }),
  component: Terms,
});

function PolicyTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

function Terms() {
  const th = "px-4 py-3 text-left font-semibold text-foreground align-top";
  const td = "px-4 py-3 text-muted-foreground align-top border-t border-border";

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-5xl font-semibold tracking-tight text-gradient">Terms of Service</h1>

      <p className="mt-4 text-sm text-muted-foreground">
        <strong className="text-foreground">Effective date:</strong> May 15, 2026
        <br />
        <strong className="text-foreground">Last updated:</strong> May 15, 2026
      </p>

      <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
        <p>
          These Terms of Service (“<strong className="text-foreground">Terms</strong>”) are a legal
          agreement between you and <strong className="text-foreground">Tanner Blake</strong> (“
          <strong className="text-foreground">FluentSpeak</strong>,” “
          <strong className="text-foreground">we</strong>,” “<strong className="text-foreground">us</strong>
          ,” or “<strong className="text-foreground">our</strong>”) governing your use of the{" "}
          <strong className="text-foreground">FluentSpeak</strong> mobile application and related
          services (the “<strong className="text-foreground">App</strong>” or “
          <strong className="text-foreground">Service</strong>”).
        </p>

        <p>
          <strong className="text-foreground">Please read these Terms carefully.</strong> By
          downloading, installing, accessing, or using the App, you agree to these Terms and to our{" "}
          <Link to="/fluentspeak/privacy" className="text-foreground underline">
            Privacy Policy.
          </Link>{" "}
          If you do not agree, do not use the App.
        </p>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">1. Who may use the Service</h2>
          <p className="mt-3">You may use the App only if:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              You are at least <strong className="text-foreground">13 years old</strong> (or the
              minimum age required in your country, and older if a higher age is required for consent
              where you live);
            </li>
            <li>You have the legal capacity to enter a binding contract; and</li>
            <li>You are not barred from using the Service under applicable law.</li>
          </ol>
          <p className="mt-3">
            If you are under 18 (or the age of majority where you live), you may use the App only with
            permission and supervision of a parent or legal guardian who accepts these Terms on your
            behalf.
          </p>
          <p className="mt-3">
            The App is for <strong className="text-foreground">personal, non-commercial</strong>{" "}
            language learning unless we agree otherwise in writing.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">2. Changes to these Terms</h2>
          <p className="mt-3">
            We may modify these Terms at any time. We will post the updated Terms with a new “Last
            updated” date and, when required, provide additional notice (for example, in the App).{" "}
            <strong className="text-foreground">
              Your continued use after changes become effective constitutes acceptance
            </strong>{" "}
            of the revised Terms.
          </p>
          <p className="mt-3">
            If you do not agree to updated Terms, you must stop using the App and cancel any
            subscription as described in Section 6.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">3. The Service</h2>
          <p className="mt-3">FluentSpeak provides AI-assisted language practice, including:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Real-time spoken conversations with an AI partner</li>
            <li>Automated feedback, scoring, and analysis after sessions</li>
            <li>Progress features (such as streaks and history) when enabled</li>
            <li>
              Optional <strong className="text-foreground">Pro</strong> subscription features as
              described in the App
            </li>
          </ul>
          <p className="mt-3">
            The Service may be offered in <strong className="text-foreground">free</strong> and{" "}
            <strong className="text-foreground">paid (Pro)</strong> tiers. Features, limits,
            languages, scenarios, models, and availability may change at any time. We do not
            guarantee uninterrupted access, specific outcomes, fluency results, or exam scores.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">The Service is educational and entertainment software only.</strong>{" "}
            It is <strong className="text-foreground">not</strong> a school, employer, certification
            body, translator for legal/medical use, or emergency service.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">4. License to use the App</h2>
          <p className="mt-3">
            Subject to these Terms, we grant you a{" "}
            <strong className="text-foreground">limited, non-exclusive, non-transferable, revocable</strong>{" "}
            license to install and use the App on devices you own or control, solely for personal use
            in accordance with these Terms and applicable app-store rules.
          </p>
          <p className="mt-3">
            You may <strong className="text-foreground">not</strong>:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Copy, modify, or create derivative works of the App except as allowed by law</li>
            <li>
              Reverse engineer, decompile, or attempt to extract source code (except where prohibited
              by law)
            </li>
            <li>Rent, lease, sell, sublicense, or commercially exploit the App</li>
            <li>Remove proprietary notices</li>
            <li>Use bots, scrapers, or automated means to access the Service</li>
            <li>Circumvent usage limits, paywalls, ads, or security measures</li>
            <li>Use the Service to develop competing products using our content or systems</li>
          </ul>
          <p className="mt-3">All rights not expressly granted are reserved by us and our licensors.</p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">5. Accounts and device identity</h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">5.1 Anonymous accounts</h3>
          <p className="mt-3">
            The App may create an <strong className="text-foreground">anonymous account</strong> so
            your preferences and progress can be stored. You are{" "}
            <strong className="text-foreground">not required</strong> to provide an email or password
            for basic use.
          </p>
          <p className="mt-3">You are responsible for:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Activity that occurs under your account on your device</li>
            <li>Keeping your device secure</li>
            <li>
              Any loss of access if you delete the App, clear data, or lose your device (we may not be
              able to recover anonymous accounts without additional identifiers)
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-foreground">5.2 Accuracy</h3>
          <p className="mt-3">
            If you contact support or later provide contact information, you agree it will be accurate.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">5.3 No account sharing for abuse</h3>
          <p className="mt-3">
            You may not share, sell, or transfer access in a way that violates usage limits or these
            Terms.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            6. Subscriptions, billing, and refunds (Pro)
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.1 Pro subscription</h3>
          <p className="mt-3">
            <strong className="text-foreground">FluentSpeak Pro</strong> is an{" "}
            <strong className="text-foreground">auto-renewable subscription</strong> billed through:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Apple App Store</strong> (iOS), or
            </li>
            <li>
              <strong className="text-foreground">Google Play</strong> (Android)
            </li>
          </ul>
          <p className="mt-3">
            Pricing, billing period, and features are shown in the App and on the store checkout screen
            (for example, a monthly plan).{" "}
            <strong className="text-foreground">Payment is processed by Apple or Google, not by us directly.</strong>{" "}
            We do not receive your full payment card number.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.2 Auto-renewal</h3>
          <p className="mt-3">
            Unless you cancel at least <strong className="text-foreground">24 hours</strong> before the
            end of the current billing period (or as stated by Apple/Google):
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Your subscription <strong className="text-foreground">automatically renews</strong>
            </li>
            <li>You will be charged the then-current price (plus applicable taxes)</li>
            <li>Pro benefits continue until you cancel or the subscription expires</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.3 Free tier limits</h3>
          <p className="mt-3">
            Without Pro, the App may limit features (for example,{" "}
            <strong className="text-foreground">daily conversation limits</strong>,{" "}
            <strong className="text-foreground">advertising</strong> before or during certain flows,
            and reduced analysis or tracking features). Limits are described in the App and may change.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.4 Managing and cancelling</h3>
          <p className="mt-3">
            You can <strong className="text-foreground">cancel</strong> renewal through:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">iOS:</strong> Settings → Apple ID → Subscriptions, or
              the “manage subscription” option in the App (which opens Apple’s subscription management)
            </li>
            <li>
              <strong className="text-foreground">Android:</strong> Google Play → Payments &amp;
              subscriptions → Subscriptions, or the in-App manage option
            </li>
          </ul>
          <p className="mt-3">
            Cancellation stops <strong className="text-foreground">future</strong> charges; you
            typically retain Pro access until the{" "}
            <strong className="text-foreground">end of the current paid period</strong>.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.5 Refunds</h3>
          <p className="mt-3">
            <strong className="text-foreground">
              All refund requests are handled by Apple or Google under their policies
            </strong>
            , except where applicable law requires otherwise. We cannot issue refunds for store
            purchases ourselves.
          </p>
          <p className="mt-3">
            If you believe you were charged in error, contact Apple or Google support. EU/UK consumers
            may have additional statutory withdrawal rights for digital content—see Section 18.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.6 Price changes</h3>
          <p className="mt-3">
            We may change subscription prices where permitted by the store. You will be notified
            according to Apple/Google rules before a new price applies to renewals.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">6.7 Pro status in the App</h3>
          <p className="mt-3">
            After a successful purchase, we enable Pro features (for example, by updating your profile).
            If Pro status does not activate, contact fluentspeak.contact@gmail.com with your store receipt.
            We may rely on the store’s records to verify entitlement.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">7. Advertising (free tier)</h2>
          <p className="mt-3">
            If you use the free tier, the App may display{" "}
            <strong className="text-foreground">third-party advertisements</strong> (for example, via
            Google AdMob). Ads may be personalized where allowed and where you have consented (for
            example, App Tracking Transparency on iOS).
          </p>
          <p className="mt-3">
            Your interaction with ads is also governed by the ad network’s terms and our Privacy Policy.
            We are not responsible for third-party products or services advertised.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">8. Acceptable use</h2>
          <p className="mt-3">
            You agree <strong className="text-foreground">not</strong> to:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Violate any law or regulation</li>
            <li>Harass, threaten, defame, or harm others</li>
            <li>
              Upload or generate content that is illegal, obscene, exploitative of minors, hateful, or
              infringes others’ rights
            </li>
            <li>Impersonate any person or entity</li>
            <li>
              Attempt to gain unauthorized access to our systems, other users’ data, or third-party
              services
            </li>
            <li>Probe, scan, or test vulnerabilities without authorization</li>
            <li>Use the Service to send spam or malware</li>
            <li>
              Use the Service for high-risk activities (medical diagnosis, legal decisions,
              safety-critical operations)
            </li>
            <li>Extract, mine, or resell data from the Service at scale</li>
            <li>
              Use the Service in a manner that could damage, disable, or overburden our infrastructure
            </li>
          </ol>
          <p className="mt-3">
            We may investigate violations and cooperate with law enforcement. We may suspend or
            terminate access without prior notice where we reasonably believe you violated these Terms
            or pose risk to the Service or others.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">9. Your content and conversations</h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">9.1 Your content</h3>
          <p className="mt-3">
            “<strong className="text-foreground">User Content</strong>” means information you provide
            or generate in the App, including <strong className="text-foreground">voice input</strong>,{" "}
            <strong className="text-foreground">transcripts</strong>, and practice messages.
          </p>
          <p className="mt-3">
            You retain ownership of your User Content as between you and us, subject to rights you grant
            below.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">9.2 License you grant us</h3>
          <p className="mt-3">
            To operate the Service, you grant us a{" "}
            <strong className="text-foreground">worldwide, non-exclusive, royalty-free license</strong>{" "}
            to host, store, reproduce, process, transmit, and display User Content{" "}
            <strong className="text-foreground">only as needed</strong> to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide conversations, analysis, scoring, and progress features</li>
            <li>Maintain and improve the Service (including quality, safety, and reliability)</li>
            <li>Comply with law</li>
          </ul>
          <p className="mt-3">
            This license ends when User Content is deleted from our systems, except for backup copies
            deleted on a reasonable schedule and data we must retain by law.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">9.3 Responsibility</h3>
          <p className="mt-3">
            You are solely responsible for User Content and for having all rights necessary to provide
            it. Do not submit content you do not have permission to use.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">9.4 Deletion</h3>
          <p className="mt-3">
            You may delete stored conversation history through in-App settings where available. Deletion
            may not remove all copies immediately from backups. To request broader deletion, see our{" "}
            <Link to="/fluentspeak/privacy" className="text-foreground underline">
              Privacy Policy
            </Link>{" "}
            or contact fluentspeak.contact@gmail.com.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            10. Artificial intelligence and disclaimers
          </h2>
          <p className="mt-3">
            The Service uses <strong className="text-foreground">artificial intelligence</strong>{" "}
            (including third-party models) for conversations and feedback.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">You understand and agree that:</strong>
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              <strong className="text-foreground">AI can be wrong.</strong> Translations, grammar
              corrections, scores, and suggestions may contain errors.
            </li>
            <li>
              <strong className="text-foreground">Not professional advice.</strong> The Service does not
              replace qualified teachers, tutors, certified translators, or official language exams.
            </li>
            <li>
              <strong className="text-foreground">No guarantee of results.</strong> We do not guarantee
              fluency, grades, job offers, or any particular learning outcome.
            </li>
            <li>
              <strong className="text-foreground">You use AI output at your own risk</strong> for
              real-world decisions (travel, business, legal, medical, academic submissions).
            </li>
            <li>
              <strong className="text-foreground">Sensitive topics.</strong> Do not rely on the App in
              emergencies. Call local emergency services when needed.
            </li>
            <li>
              <strong className="text-foreground">Moderation.</strong> We may use automated or manual
              tools to detect abuse; we do not routinely monitor all conversations for accuracy.
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">11. Intellectual property</h2>
          <p className="mt-3">
            The App, including software, design, logos, text, scenarios, and branding (excluding your
            User Content), is owned by{" "}
            <strong className="text-foreground">Tanner Blake</strong> or our licensors and
            protected by intellectual property laws.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">“FluentSpeak”</strong> and related marks are our
            trademarks. You may not use them without prior written permission.
          </p>
          <p className="mt-3">
            Feedback you send us may be used without restriction or compensation to improve the Service.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">12. Third-party services</h2>
          <p className="mt-3">
            The Service integrates third-party services (for example,{" "}
            <strong className="text-foreground">Supabase</strong>,{" "}
            <strong className="text-foreground">Google</strong> (Gemini, AdMob),{" "}
            <strong className="text-foreground">Groq</strong>,{" "}
            <strong className="text-foreground">Apple</strong>,{" "}
            <strong className="text-foreground">Google Play</strong>). Your use of those services may
            be subject to their terms and privacy policies. We are not responsible for third-party
            services we do not control.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">13. Privacy</h2>
          <p className="mt-3">
            Our collection and use of personal information is described in our{" "}
            <Link to="/fluentspeak/privacy" className="text-foreground underline">
              Privacy Policy,
            </Link>{" "}
            which is incorporated into these Terms by reference.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">14. Service changes and availability</h2>
          <p className="mt-3">We may:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Add, modify, or remove features</li>
            <li>Change free-tier limits, models, or languages</li>
            <li>Perform maintenance causing downtime</li>
            <li>Discontinue the Service or any part of it</li>
          </ul>
          <p className="mt-3">
            Where required by law, we will provide notice of material adverse changes. We are not liable
            for modifications or discontinuation except as stated in these Terms or required by law.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">15. Termination</h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">15.1 By you</h3>
          <p className="mt-3">
            You may stop using the App at any time. Uninstalling the App does not automatically cancel a
            Pro subscription—you must cancel through Apple or Google (Section 6).
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">15.2 By us</h3>
          <p className="mt-3">
            We may suspend or terminate your access immediately if we reasonably believe you violated
            these Terms, created risk, or where required by law or app-store policies.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">15.3 Effect</h3>
          <p className="mt-3">
            Upon termination, your license ends. Sections that by nature should survive (including
            Sections 9–12, 16–22) will survive.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">16. Disclaimers</h2>
          <p className="mt-3">
            <strong className="text-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS
              AVAILABLE.”
            </strong>
          </p>
          <p className="mt-3">
            <strong className="text-foreground">WE DISCLAIM ALL WARRANTIES</strong>, EXPRESS OR IMPLIED,
            INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND
            ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">WE DO NOT WARRANT THAT:</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>The Service will be uninterrupted, secure, or error-free</li>
            <li>AI outputs will be accurate, complete, or appropriate</li>
            <li>Defects will be corrected</li>
            <li>The Service will meet your requirements</li>
          </ul>
          <p className="mt-3">
            Some jurisdictions do not allow certain disclaimers; in those cases, disclaimers apply only
            to the extent permitted.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">17. Limitation of liability</h2>
          <p className="mt-3">
            <strong className="text-foreground">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              <strong className="text-foreground">WE ARE NOT LIABLE</strong> for any indirect, incidental,
              special, consequential, or punitive damages, or for loss of profits, data, goodwill, or
              business opportunity, arising from or related to the Service or these Terms.
            </li>
            <li>
              <strong className="text-foreground">OUR TOTAL LIABILITY</strong> for all claims arising
              out of or relating to the Service or these Terms is limited to the{" "}
              <strong className="text-foreground">
                greater of (a) the amount you paid us for the Service in the twelve (12) months before
                the claim
              </strong>
              , or <strong className="text-foreground">(b) fifty U.S. dollars (USD $50)</strong> if you
              used only the free tier.
            </li>
            <li>
              These limits apply whether liability is based on contract, tort, negligence, strict
              liability, or otherwise, even if we were advised of the possibility of such damages.
            </li>
          </ol>
          <p className="mt-3">
            <strong className="text-foreground">Exceptions:</strong> Some jurisdictions (including parts
            of the EU/UK) do not allow limitation of liability for death, personal injury, fraud, or
            certain consumer rights. Nothing in these Terms limits liability that cannot be limited by
            law.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            18. Consumer rights (EEA, UK, and other regions)
          </h2>
          <p className="mt-3">
            If you are a <strong className="text-foreground">consumer</strong> in the European Economic
            Area, United Kingdom, or another jurisdiction with mandatory consumer protections:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              You may have <strong className="text-foreground">statutory rights</strong> that cannot be
              waived by these Terms
            </li>
            <li>
              <strong className="text-foreground">Withdrawal rights</strong> for digital content may
              apply; where you request immediate performance of digital content, you may lose the right
              of withdrawal once delivery begins—stores and local law govern details
            </li>
            <li>
              Nothing in Sections 16–17 excludes our liability for{" "}
              <strong className="text-foreground">intentional misconduct</strong> or{" "}
              <strong className="text-foreground">gross negligence</strong>, or for damages that cannot
              be excluded under applicable law
            </li>
          </ul>
          <p className="mt-3">
            For EU/UK complaints, contact us first at fluentspeak.contact@gmail.com. You may also use the EU
            Online Dispute Resolution platform:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-foreground underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">19. Indemnification</h2>
          <p className="mt-3">
            To the extent permitted by law, you agree to{" "}
            <strong className="text-foreground">defend, indemnify, and hold harmless</strong> Tanner Blake
            and our officers, directors, employees, and agents from claims, damages,
            losses, and expenses (including reasonable attorneys’ fees) arising from:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Your use of the Service</li>
            <li>Your User Content</li>
            <li>Your violation of these Terms or any law</li>
            <li>Your violation of any third-party rights</li>
          </ul>
          <p className="mt-3">
            This section does not apply where prohibited by law (for example, for EU consumers in some
            cases).
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            20. Dispute resolution and governing law
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">20.1 Informal resolution</h3>
          <p className="mt-3">
            Before filing a claim, you agree to contact us at fluentspeak.contact@gmail.com and allow{" "}
            <strong className="text-foreground">30 days</strong> to try to resolve the dispute
            informally.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">20.2 Governing law</h3>
          <p className="mt-3">
            These Terms are governed by the laws of{" "}
            <strong className="text-foreground">State of Massachusetts, USA</strong>,
            without regard to conflict-of-law rules, except that mandatory consumer laws of your country
            of residence may apply where required.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-foreground">
            20.3 Arbitration
          </h3>
          <p className="mt-3">
            Any dispute shall be resolved by <strong className="text-foreground">binding individual arbitration</strong>{" "}
            under AAA rules in <strong className="text-foreground">Feeding Hills, Massachusetts</strong>, except
            either party may bring qualifying claims in small-claims court or seek injunctive relief for
            IP abuse. <strong className="text-foreground">Class actions and class arbitrations are waived</strong>{" "}
            to the extent permitted by law.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">21. Apple and Google app-store terms</h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">21.1 Apple App Store (iOS)</h3>
          <p className="mt-3">
            If you downloaded the App from the <strong className="text-foreground">Apple App Store</strong>
            , you acknowledge:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              These Terms are between <strong className="text-foreground">you and us only</strong>, not
              Apple.
            </li>
            <li>
              Apple has <strong className="text-foreground">no obligation</strong> to furnish maintenance
              or support for the App.
            </li>
            <li>
              In the event of failure to conform to any applicable warranty, you may notify Apple for a
              refund of the purchase price (if any) for the App;{" "}
              <strong className="text-foreground">
                to the maximum extent permitted by law, Apple has no other warranty obligation
              </strong>
              .
            </li>
            <li>
              Apple is <strong className="text-foreground">not responsible</strong> for addressing claims
              relating to the App or your use of it, including product liability, legal compliance, or
              intellectual property infringement.
            </li>
            <li>
              Apple and its subsidiaries are <strong className="text-foreground">third-party beneficiaries</strong>{" "}
              of these Terms and may enforce them against you.
            </li>
            <li>
              You must comply with applicable <strong className="text-foreground">App Store Terms of Service</strong>.
            </li>
          </ol>

          <h3 className="mt-6 text-xl font-semibold text-foreground">21.2 Google Play (Android)</h3>
          <p className="mt-3">
            If you downloaded the App from <strong className="text-foreground">Google Play</strong>, you
            acknowledge that Google is a third-party beneficiary only to the extent required by Google
            Play policies, and Google’s terms may apply to your use of Google Play billing.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">22. Export and sanctions</h2>
          <p className="mt-3">
            You may not use or export the Service except as authorized by U.S. and local export laws.
            You represent that you are not located in, under control of, or a national/resident of any
            country or person subject to U.S. government embargoes or sanctions lists.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">23. Miscellaneous</h2>
          <PolicyTable>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className={th}>Topic</th>
                <th className={th}>Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Entire agreement</strong>
                </td>
                <td className={td}>
                  These Terms + Privacy Policy = entire agreement regarding the Service (supersedes
                  prior understandings).
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Severability</strong>
                </td>
                <td className={td}>If any provision is invalid, the rest remains in effect.</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">No waiver</strong>
                </td>
                <td className={td}>Failure to enforce a provision is not a waiver.</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Assignment</strong>
                </td>
                <td className={td}>We may assign these Terms; you may not assign without our consent.</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Force majeure</strong>
                </td>
                <td className={td}>
                  We are not liable for delays or failures due to events beyond reasonable control (e.g.,
                  outages, acts of God, war, labor disputes).
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Headings</strong>
                </td>
                <td className={td}>For convenience only.</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Language</strong>
                </td>
                <td className={td}>
                  English controls unless required otherwise by law; translations are for convenience.
                </td>
              </tr>
            </tbody>
          </PolicyTable>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">24. Contact</h2>
          <p className="mt-3">
            <strong className="text-foreground">Tanner Blake</strong>
            <br />
            Email: fluentspeak.contact@gmail.com
            <br />
            Address: 89 Parkview Drive, Feeding Hills, MA 01030
            <br />
            Website: https://tannerbblake.github.io/fluentspeak
          </p>
        </section>
      </div>
    </article>
  );
}
