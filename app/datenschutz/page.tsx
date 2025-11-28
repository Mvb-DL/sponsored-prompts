// app/datenschutz/page.tsx

export const metadata = {
  title: 'Privacy Policy | We pay your prompt',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-4">
          Privacy Policy (GDPR)
        </h1>

        {/* 1. Controller */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">1. Controller</h2>
          <p>
            The controller within the meaning of the EU General Data Protection
            Regulation (GDPR) for the website and the service
            &quot;We pay your prompt&quot; is:
          </p>
          <p>
            <strong>Mario von Bassen</strong>
            <br />
            Gressengasse 1
            <br />
            97070 Würzburg
            <br />
            Germany
            <br />
            Email:{' '}
            <a
              href="mailto:mariovonbassen@gmail.com"
              className="underline underline-offset-2 text-zinc-100 hover:text-zinc-300"
            >
              mariovonbassen@gmail.com
            </a>
          </p>
        </section>

        {/* 2. Purpose of "We pay your prompt" / VPP */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            2. Purpose of &quot;We pay your prompt&quot; / Virtual Privacy Prompt (VPP)
          </h2>
          <p>
            <strong>We pay your prompt</strong> is a prototype for a proxy
            service for AI models (a so-called{' '}
            <strong>Virtual Privacy Prompt – VPP</strong>). Users can select a
            model and send prompts without creating an account. The long-term
            goal is to forward prompts from this proxy to external AI providers
            (e.g. OpenAI, Anthropic, Google or other LLM providers).
          </p>
          <p>
            While the model is processing the prompt, a sponsor banner or video
            is displayed for a short time. These sponsors are intended to cover
            the running costs for API usage and server infrastructure so that
            users do not have to pay per prompt themselves.
          </p>
          <p>
            In the current prototype, parts of the response flow are simulated
            in order to demonstrate the experience (model selection, sponsored
            overlay, anonymous session). Chat histories are{' '}
            <strong>not stored on the server</strong> in this prototype. The
            entire conversation exists only in your browser session and is
            discarded when you close or reload the page.
          </p>
        </section>

        {/* 3. Data processed & legal basis */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            3. Data processed & legal bases
          </h2>

          <h3 className="text-sm font-semibold mt-2">
            3.1 Prompts & AI requests
          </h3>
          <p>
            When you enter a prompt, the target version of this service is
            designed to forward that prompt via our systems to the selected AI
            provider. Depending on the content, this may include personal data
            that you voluntarily submit. Please do{' '}
            <strong>not include sensitive data</strong> (e.g. health data or
            other special categories of data pursuant to Art. 9 GDPR).
          </p>
          <p>
            <strong>Purpose:</strong> To provide the AI service (answering your
            request) via an anonymising proxy / VPP layer.
            <br />
            <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (performance of a
            contract or steps prior to entering into a contract) and, for
            general operation and security, our legitimate interests pursuant to
            Art. 6(1)(f) GDPR in providing a secure and economically viable
            service.
          </p>
          <p>
            In the current prototype, the response may still be simulated –
            meaning that not every request is actually forwarded to an external
            AI provider yet. The underlying VPP concept and privacy approach
            remain unchanged.
          </p>

          <h3 className="text-sm font-semibold mt-3">
            3.2 Server log files (technically necessary data)
          </h3>
          <p>
            When you access our website, certain data is processed for technical
            reasons and temporarily stored in server log files, such as:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-zinc-200 space-y-0.5">
            <li>IP address (truncated or pseudonymised where possible)</li>
            <li>Date and time of access</li>
            <li>Requested URL and HTTP status code</li>
            <li>Browser type and operating system (User-Agent)</li>
          </ul>
          <p>
            <strong>Purpose:</strong> Ensuring the technical operation of the
            website, error analysis, protection against misuse and attacks.
            <br />
            <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate
            interest in a secure and stable operation of the website).
          </p>
        </section>

        {/* 4. Hosting (DigitalOcean) */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            4. Hosting with DigitalOcean
          </h2>
          <p>
            This website and the prototype service are hosted on servers
            provided by <strong>DigitalOcean</strong>. This means that your IP
            address, technical request data and server log information are
            processed on infrastructure operated by DigitalOcean.
          </p>
          <p>
            Depending on the selected data center region and internal
            configuration, DigitalOcean infrastructure may be located in or
            outside the EU/EEA (for example, in the United States). DigitalOcean
            acts as a processor within the meaning of Art. 28 GDPR.
          </p>
          <p>
            <strong>Purpose:</strong> Provision of a reliable hosting
            environment, server-side processing of requests, storage of log
            files for security and stability.
            <br />
            <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest
            in using a professional hosting provider) and Art. 28 GDPR (data
            processing under a processor agreement).
          </p>
        </section>

        {/* 5. Advertising & sponsoring */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            5. Advertising & sponsoring
          </h2>
          <p>
            While your prompt is being processed, the website displays sponsor
            banners or videos in a full-screen overlay. These sponsors are
            intended to cover the ongoing costs of the AI APIs and server
            infrastructure. The overlay is intentionally time-limited (for
            example ~5 seconds for banners and ~10–20 seconds for videos).
          </p>
          <p>
            In the current prototype, these ads are embedded in a static or
            low-context way. We do <strong>not</strong> build personalised user
            profiles based on multiple sessions, and the AI answer itself
            remains free of advertising content from us.
          </p>
          <p>
            If, in the future, external ad networks are integrated that use
            their own cookies or tracking technologies, we will inform you
            separately and, where required by law, obtain your explicit consent
            (opt-in) before such technologies are used. Without such consent, no
            non-essential tracking technologies will be deployed.
          </p>
        </section>

        {/* 6. Cookies & local storage */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            6. Cookies & local storage
          </h2>
          <p>
            In the current prototype of &quot;We pay your prompt&quot;, we do
            not use tracking or marketing cookies. Instead, we only rely on
            mechanisms that are technically necessary for the operation and user
            experience:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-zinc-200 space-y-0.5">
            <li>
              An entry in your browser&apos;s local storage (
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-[11px]">
                localStorage
              </code>
              ) to remember your cookie/consent decision (e.g. whether you
              accept only strictly necessary or all allowed storage options).
            </li>
            <li>
              Another entry in{' '}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-[11px]">
                localStorage
              </code>{' '}
              to remember that you have already seen the sponsor invite / call
              for partners, so that this hint is not shown repeatedly.
            </li>
            <li>
              Session-level data that is required to deliver the website and
              render the chat frontend (e.g. temporary in-memory state).
            </li>
          </ul>
          <p>
            <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest
            in providing a user-friendly, stable service) and applicable
            national e-privacy rules for the use of strictly necessary storage
            technologies.
          </p>
        </section>

        {/* 7. Processors & third countries (LLM providers etc.) */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            7. Processors & transfers to third countries
          </h2>
          <p>
            For the actual AI processing, the service is designed to forward
            prompts to external AI providers (e.g. OpenAI, Anthropic, Google or
            comparable services). These providers may be located outside the
            EU/EEA, for example in the United States.
          </p>
          <p>
            We select our service providers carefully and, where possible, rely
            on appropriate safeguards to ensure an adequate level of data
            protection, such as EU Standard Contractual Clauses and additional
            technical and organisational security measures. The specific
            providers actually used in production will be named in a final
            version of this privacy policy.
          </p>
        </section>

        {/* 8. Storage periods */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            8. Storage periods
          </h2>
          <p>
            In the current prototype, chat histories are{' '}
            <strong>not stored on the server side</strong>. The entire
            conversation exists only within your current browser session and is
            lost when you close or reload the page.
          </p>
          <p>
            Server log files are retained only for as long as necessary to
            ensure stable operation, troubleshoot errors, and maintain security.
            The exact retention period depends on technical configuration and
            any statutory retention obligations.
          </p>
        </section>

        {/* 9. Your rights under GDPR */}
        <section className="space-y-2 text-sm text-zinc-200 mb-6">
          <h2 className="text-base font-semibold mb-1">
            9. Your rights (data subject rights)
          </h2>
          <p>
            Under GDPR, you in particular have the following rights with respect
            to your personal data:
          </p>
          <ul className="ml-4 list-disc text-[13px] text-zinc-200 space-y-0.5">
            <li>Right of access (Art. 15 GDPR)</li>
            <li>Right to rectification of inaccurate data (Art. 16 GDPR)</li>
            <li>
              Right to erasure (&quot;right to be forgotten&quot;, Art. 17 GDPR)
            </li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to data portability (Art. 20 GDPR)</li>
            <li>
              Right to object to certain processing activities (Art. 21 GDPR),
              in particular processing based on Art. 6(1)(f) GDPR
            </li>
            <li>
              Right to lodge a complaint with a supervisory authority (Art. 77
              GDPR), especially in the EU member state of your habitual
              residence, place of work, or the place of the alleged
              infringement
            </li>
          </ul>
          <p>
            You can exercise your rights at any time by contacting us at the
            address given in the imprint or via email at{' '}
            <a
              href="mailto:mariovonbassen@gmail.com"
              className="underline underline-offset-2 text-zinc-100 hover:text-zinc-300"
            >
              mariovonbassen@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Disclaimer */}
        <section className="space-y-2 text-xs text-zinc-500 mt-8">
          <p>
            Note: This privacy policy has been drafted specifically for the
            &quot;We pay your prompt&quot; prototype and the described Virtual
            Privacy Prompt (VPP) concept. It does not constitute legal advice.
            Before running the service in production, please have this document
            reviewed and adapted by a qualified legal professional to reflect
            your actual setup, the concrete hosting region at DigitalOcean, the
            AI providers you use, and the legal requirements applicable to you.
          </p>
        </section>
      </div>
    </main>
  );
}
