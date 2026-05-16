import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FluentSpeak" },
      { name: "description", content: "How FluentSpeak collects, uses, and protects your data." },
    ],
  }),
  component: Privacy,
});

function PolicyTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

function Privacy() {
  const th = "px-4 py-3 text-left font-semibold text-foreground align-top";
  const td = "px-4 py-3 text-muted-foreground align-top border-t border-border";

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-5xl font-semibold tracking-tight text-gradient">Privacy Policy</h1>

      <p className="mt-4 text-sm text-muted-foreground">
        <strong className="text-foreground">Effective date:</strong> May 15, 2026
        <br />
        <strong className="text-foreground">Last updated:</strong> May 15, 2026
      </p>

      <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Tanner Blake</strong> (“
          <strong className="text-foreground">we</strong>,” “<strong className="text-foreground">us</strong>
          ,” or “<strong className="text-foreground">our</strong>”) operates the{" "}
          <strong className="text-foreground">FluentSpeak</strong> mobile application and related
          services (collectively, the “<strong className="text-foreground">App</strong>” or “
          <strong className="text-foreground">Service</strong>”). This Privacy Policy explains how we
          collect, use, disclose, and protect information when you use FluentSpeak.
        </p>

        <p>
          By using the App, you agree to this Privacy Policy. If you do not agree, do not use the
          App.
        </p>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">1. Who we are</h2>
          <PolicyTable>
            <tbody>
              <tr>
                <td className={th}>App name</td>
                <td className={td}>FluentSpeak</td>
              </tr>
              <tr>
                <td className={th}>Developer / controller</td>
                <td className={td}>Tanner Blake</td>
              </tr>
              <tr>
                <td className={th}>Address</td>
                <td className={td}>89 Parkview Drive, Feeding Hills, MA, Hampden Country, 01030</td>
              </tr>
              <tr>
                <td className={th}>Contact</td>
                <td className={td}>fluentspeak.contact@gmail.com</td>
              </tr>
              <tr>
                <td className={th}>Website</td>
                <td className={td}>https://tannerbblake.github.io/fluentspeak</td>
              </tr>
            </tbody>
          </PolicyTable>
          <p className="mt-4">
            If you are in the European Economic Area (EEA), United Kingdom, or Switzerland and we
            are required to appoint a representative, contact us at the email above for details.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">2. Scope</h2>
          <p className="mt-3">This policy applies to information collected through:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>The FluentSpeak iOS and Android apps</li>
            <li>Any website or support pages we operate that link to this policy</li>
          </ul>
          <p className="mt-3">
            It does not apply to third-party websites, app stores, or services we do not control (for
            example, Apple App Store, Google Play, payment processors, or ad networks’ own
            policies).
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">3. Children</h2>
          <p className="mt-3">
            FluentSpeak is <strong className="text-foreground">not directed to children under 13</strong>{" "}
            (or the minimum age required in your country). We do not knowingly collect personal
            information from children under 13. If you believe a child has provided us information,
            contact us at fluentspeak.contact@gmail.com and we will take steps to delete it.
          </p>
          <p className="mt-3">
            If you are between 13 and the age of digital consent in your country (often 16 in parts of
            the EEA), you may use the App only with permission from a parent or guardian where
            required by law.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">4. Information we collect</h2>
          <p className="mt-3">
            We collect information in the ways described below. Much of the App works{" "}
            <strong className="text-foreground">without creating an email/password account</strong>;
            we assign an <strong className="text-foreground">anonymous user identifier</strong> so
            your settings and progress can sync to our servers.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-foreground">
            4.1 Information you provide or generate in the App
          </h3>
          <PolicyTable>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className={th}>Category</th>
                <th className={th}>Examples</th>
                <th className={th}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Language preferences</strong>
                </td>
                <td className={td}>Native language, learning language, proficiency level</td>
                <td className={td}>Personalize lessons and conversations</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Conversation content</strong>
                </td>
                <td className={td}>
                  Transcripts of your spoken practice (user and AI messages), scenario titles,
                  scores, feedback (suggestions, strengths, grammar/correction notes)
                </td>
                <td className={td}>
                  Provide the Service, show results, and track progress when enabled
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Progress &amp; activity</strong>
                </td>
                <td className={td}>Streak count, last activity date, score history</td>
                <td className={td}>Motivation features and charts</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Settings</strong>
                </td>
                <td className={td}>Whether progress tracking is on or off, Pro subscription status</td>
                <td className={td}>Operate features you choose</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Support communications</strong>
                </td>
                <td className={td}>Email or message content if you contact us</td>
                <td className={td}>Respond to you</td>
              </tr>
            </tbody>
          </PolicyTable>
          <p className="mt-4">
            When <strong className="text-foreground">progress tracking</strong> is enabled (default
            for new profiles), conversation data is stored in our database. When it is disabled, we
            aim not to save conversation history to our servers, though some data may still be
            processed temporarily to run a session (see Section 5).
          </p>

          <h3 className="mt-8 text-xl font-semibold text-foreground">
            4.2 Audio, microphone, and speech
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Microphone:</strong> The App requests microphone
              access for real-time language practice. Audio is used to power conversations with our
              AI features.
            </li>
            <li>
              <strong className="text-foreground">Speech recognition (iOS):</strong> On iOS, device
              speech recognition may be used to transcribe your speech locally; Apple’s use of that
              data is governed by Apple’s policies.
            </li>
            <li>
              <strong className="text-foreground">AI voice processing:</strong> Audio and related
              session data are sent to <strong className="text-foreground">Google (Gemini)</strong>{" "}
              (and our servers that issue short-lived access tokens) to provide real-time
              conversation. We do not use your voice to create a voiceprint or biometric identifier
              for identification purposes.
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-foreground">
            4.3 Information collected automatically
          </h3>
          <PolicyTable>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className={th}>Category</th>
                <th className={th}>Examples</th>
                <th className={th}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Account / device identifiers</strong>
                </td>
                <td className={td}>
                  Anonymous user ID (Supabase), session tokens stored on device (including secure
                  storage on native apps)
                </td>
                <td className={td}>Authentication, sync, security</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Usage &amp; session metadata</strong>
                </td>
                <td className={td}>
                  Conversation session IDs, estimated token/cost usage, ad placement metadata,
                  country segment (derived from device locale, e.g. region code), platform
                  (iOS/Android)
                </td>
                <td className={td}>
                  Operate usage limits, free-tier budgeting, fraud/abuse prevention
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Local device storage</strong>
                </td>
                <td className={td}>
                  Preferences, recent transcripts, cached analysis, notification permission flags
                </td>
                <td className={td}>App functionality when offline or before sync</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Purchase status</strong>
                </td>
                <td className={td}>
                  Whether you have an active Pro subscription (not full payment card data)
                </td>
                <td className={td}>Unlock paid features</td>
              </tr>
            </tbody>
          </PolicyTable>
          <p className="mt-4">
            We <strong className="text-foreground">do not</strong> require your name, email, or phone
            number to use core App features today. If we add optional sign-in later, we will update
            this policy.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-foreground">4.4 Advertising (free users)</h3>
          <p className="mt-3">
            If you use the free version, we work with <strong className="text-foreground">Google AdMob</strong>{" "}
            to show ads. AdMob and its partners may collect or receive:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Device identifiers (e.g., advertising ID on Android; on iOS, the Identifier for
              Advertisers only if you grant <strong className="text-foreground">App Tracking Transparency</strong>{" "}
              permission)
            </li>
            <li>IP address, device type, OS version, language, general location (inferred)</li>
            <li>Ad interaction data (impressions, clicks)</li>
            <li>Ad revenue signals used internally to estimate conversation budgets</li>
          </ul>
          <p className="mt-3">
            Our App’s <code className="text-foreground">Info.plist</code> states that tracking
            permission is used to show more relevant ads and measure ad performance. You can limit
            tracking in iOS <strong className="text-foreground">Settings → Privacy &amp; Security → Tracking</strong>{" "}
            and reset your advertising ID in device settings. Where required, we present consent
            flows (e.g., GDPR/EEA ad consent) before personalized ads.
          </p>
          <p className="mt-3">
            We <strong className="text-foreground">do not sell your personal information for money</strong>.
            Some ad-tech practices may be considered “sharing” for cross-context behavioral
            advertising under California law; see Section 10.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-foreground">4.5 Purchases</h3>
          <p className="mt-3">
            Pro subscriptions are processed by <strong className="text-foreground">Apple App Store</strong>{" "}
            or <strong className="text-foreground">Google Play</strong>. We receive confirmation of
            subscription status from those platforms, not your full payment details. Payment data is
            handled under Apple’s or Google’s privacy policies.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-foreground">4.6 Notifications</h3>
          <p className="mt-3">
            With your permission, the App may schedule <strong className="text-foreground">local notifications</strong>{" "}
            on your device (e.g., streak reminders). These are processed on your device; we do not
            need to store the reminder text on our servers for them to work.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">5. How we use information</h2>
          <p className="mt-3">We use information to:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Provide real-time AI conversation practice and post-session analysis</li>
            <li>Store and display progress, scores, streaks, and history (when tracking is enabled)</li>
            <li>Authenticate you and secure your account/session</li>
            <li>Enforce free-tier limits and show ads to non‑Pro users</li>
            <li>Process and validate subscriptions</li>
            <li>Improve reliability, debug issues, and prevent abuse</li>
            <li>Comply with law and respond to lawful requests</li>
            <li>Communicate with you if you contact support</li>
          </ol>
          <p className="mt-4">
            <strong className="text-foreground">Legal bases (EEA/UK users):</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Contract</strong> – to provide the App you request
            </li>
            <li>
              <strong className="text-foreground">Legitimate interests</strong> – security, analytics
              for operations, ad-funded free tier (balanced against your rights)
            </li>
            <li>
              <strong className="text-foreground">Consent</strong> – microphone, notifications,
              tracking/ personalized ads where required
            </li>
            <li>
              <strong className="text-foreground">Legal obligation</strong> – when law requires
              retention or disclosure
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">6. How we share information</h2>
          <p className="mt-3">We share information only as needed:</p>
          <PolicyTable>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className={th}>Recipient</th>
                <th className={th}>What may be shared</th>
                <th className={th}>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Supabase</strong>
                </td>
                <td className={td}>User ID, profile, conversations, session metadata</td>
                <td className={td}>Hosting, database, authentication, serverless functions</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Google (Gemini / Generative Language API)</strong>
                </td>
                <td className={td}>Audio, conversation content, session tokens</td>
                <td className={td}>Real-time AI conversation</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Groq</strong> (or another LLM provider if configured)
                </td>
                <td className={td}>Conversation transcript text</td>
                <td className={td}>Automated scoring and feedback after sessions</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Google AdMob</strong>
                </td>
                <td className={td}>Device/ad data as described above</td>
                <td className={td}>Advertising</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Apple / Google</strong>
                </td>
                <td className={td}>Purchase tokens, subscription status</td>
                <td className={td}>In-app purchases</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Apple</strong> (iOS speech)
                </td>
                <td className={td}>Speech audio on device / per Apple’s design</td>
                <td className={td}>Transcription on iOS when enabled</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Service providers</strong>
                </td>
                <td className={td}>Data under contract</td>
                <td className={td}>Hosting, email support, analytics if we add them later</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Legal/safety</strong>
                </td>
                <td className={td}>As required</td>
                <td className={td}>Law enforcement, court orders, protection of rights</td>
              </tr>
            </tbody>
          </PolicyTable>
          <p className="mt-4">
            We do not share your conversation transcripts with other users. We do not publish your
            practice content publicly.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">7. International data transfers</h2>
          <p className="mt-3">
            We and our processors may store and process data in the{" "}
            <strong className="text-foreground">United States</strong> and other countries where our
            providers operate. If you are outside the US, your information may be transferred to
            jurisdictions with different data-protection laws. Where required, we rely on appropriate
            safeguards (such as Standard Contractual Clauses or UK IDTA equivalents) with our
            vendors.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">8. Data retention</h2>
          <PolicyTable>
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className={th}>Data type</th>
                <th className={th}>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Profile &amp; preferences</strong>
                </td>
                <td className={td}>
                  Until you delete your data or we delete your account, plus a short backup period
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Conversations &amp; progress</strong>
                </td>
                <td className={td}>
                  Until you delete them in Settings, disable tracking (for new data), or request
                  deletion
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Session/budget logs</strong>
                </td>
                <td className={td}>
                  As long as needed for operations and accounting, then aggregated or deleted
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Support emails</strong>
                </td>
                <td className={td}>As long as needed to resolve your request</td>
              </tr>
              <tr>
                <td className={td}>
                  <strong className="text-foreground">Local device data</strong>
                </td>
                <td className={td}>
                  Until you clear app data, uninstall, or use in-app delete features
                </td>
              </tr>
            </tbody>
          </PolicyTable>
          <p className="mt-4">
            We may retain minimal logs longer where required by law or for disputes, security, or
            fraud prevention.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">9. Security</h2>
          <p className="mt-3">
            We use technical and organizational measures appropriate to the risk, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Encrypted connections (HTTPS/TLS)</li>
            <li>Row-level security so users can access only their own database rows</li>
            <li>
              Secure storage for authentication tokens on native apps (e.g., iOS Keychain)
            </li>
          </ul>
          <p className="mt-3">
            No method of transmission or storage is 100% secure. Use the App at your own risk and keep
            your device updated.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">10. Your privacy rights and choices</h2>
          <p className="mt-3">Depending on where you live, you may have rights to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Access</strong> a copy of personal data we hold
              about you
            </li>
            <li>
              <strong className="text-foreground">Correct</strong> inaccurate data
            </li>
            <li>
              <strong className="text-foreground">Delete</strong> personal data
            </li>
            <li>
              <strong className="text-foreground">Restrict or object</strong> to certain processing
            </li>
            <li>
              <strong className="text-foreground">Data portability</strong> (machine-readable copy)
            </li>
            <li>
              <strong className="text-foreground">Withdraw consent</strong> (e.g., microphone, ads,
              notifications) via device or in-app settings
            </li>
            <li>
              <strong className="text-foreground">Opt out of “sale” or “sharing”</strong> for
              cross-context behavioral advertising (California and similar US state laws)
            </li>
          </ul>

          <p className="mt-4">
            <strong className="text-foreground">In the App today:</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Delete conversation history:</strong> Settings →
              delete conversations (removes server-stored conversations and related local cache for
              your user).
            </li>
            <li>
              <strong className="text-foreground">Progress tracking:</strong> You can turn off
              progress tracking (when exposed in Settings; if not yet in UI, contact us to disable
              server storage).
            </li>
            <li>
              <strong className="text-foreground">Microphone / notifications / tracking:</strong>{" "}
              Device settings and in-app permission prompts.
            </li>
          </ul>

          <p className="mt-4">
            <strong className="text-foreground">Full account deletion:</strong> Because the App uses
            anonymous accounts, to delete <strong className="text-foreground">all</strong> data tied
            to your user ID (including profile), email fluentspeak.contact@gmail.com from the address you
            used to contact us or include your anonymous user ID if shown in the App/support tools.
            We will verify and delete within the time required by law (often 30–45 days).
          </p>
          <p className="mt-3">
            We will not discriminate against you for exercising privacy rights.
          </p>

          <p className="mt-4">
            <strong className="text-foreground">California residents (CCPA/CPRA summary):</strong>
            <br />
            We collect the categories in Section 4 for the purposes in Section 5. We disclose
            identifiers, internet activity, and inferences to service providers and ad partners as
            described. You may opt out of sharing for cross-context behavioral advertising by 
            using device settings. We do not knowingly sell personal
            information of minors under 16.
          </p>

          <p className="mt-3">
            <strong className="text-foreground">EEA/UK:</strong> You may lodge a complaint with your
            local supervisory authority. We encourage you to contact us first.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">11. Automated processing and AI</h2>
          <p className="mt-3">The App uses artificial intelligence to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Conduct spoken conversations</li>
            <li>Score your practice and generate suggestions, strengths, and error corrections</li>
          </ul>
          <p className="mt-3">
            These outputs are <strong className="text-foreground">automated</strong> and for{" "}
            <strong className="text-foreground">learning support only</strong>; they are not
            professional, legal, medical, or employment advice. You may contact us if you want human
            review of decisions that significantly affect you (where applicable law requires).
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">12. Third-party links and SDKs</h2>
          <p className="mt-3">
            The App integrates third-party SDKs (e.g., Capacitor plugins for ads, purchases,
            notifications). Their collection is governed by their policies:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://policies.google.com/privacy"
                className="text-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>{" "}
              (Gemini, AdMob)
            </li>
            <li>
              <a
                href="https://supabase.com/privacy"
                className="text-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://groq.com/privacy"
                className="text-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Groq Privacy Policy
              </a>{" "}
              (or your configured provider)
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Privacy
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy"
                className="text-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play / Google Payments
              </a>
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">13. Changes to this policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. We will post the new version with a
            revised “Last updated” date and, where required, notify you in the App or by other
            appropriate means. Continued use after changes means you accept the updated policy.
          </p>
        </section>

        <hr className="border-border" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">14. Contact us</h2>
          <p className="mt-3">Questions or requests about privacy:</p>
          <p className="mt-3">
            <strong className="text-foreground">Tanner Blake</strong>
            <br />
            Email: fluentspeak.contact@gmail.com
            <br />
            Address: 89 Parkview Drive, Feeding Hills, MA, Hampden Country, 01030
          </p>
        </section>
      </div>
    </article>
  );
}
