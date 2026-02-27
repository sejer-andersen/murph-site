import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="container px-6 lg:px-10 max-w-3xl mx-auto">
          <h1
            className="text-3xl lg:text-4xl mb-2"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
            Last updated: 22 February 2026
          </p>

          <div className="space-y-10">
            <Section title="1. Introduction">
              <P>
                Murph ApS (&ldquo;Murph&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data.
              </P>
              <P>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our platform, interact with our AI systems, or otherwise engage with our services.
              </P>
              <P>
                Murph ApS is the data controller for the personal data described in this policy, unless otherwise stated.
              </P>
              <P>If you have questions about this policy, you can contact us at:</P>
              <ul className="list-none space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <li>Email: <a href="mailto:sejer@trymurph.com" className="underline" style={{ color: "rgba(255,255,255,0.8)" }}>Sejer@trymurph.com</a></li>
                <li>Address: Lyngebakken 18, Copenhagen, Denmark</li>
                <li>CVR: 44670623</li>
              </ul>
            </Section>

            <Section title="2. What Data We Collect">
              <H3>2.1 Information You Provide Directly</H3>
              <BulletList items={[
                "Name",
                "Email address",
                "Phone number",
                "Company name",
                "Billing information",
                "Account login credentials",
                "Information submitted through contact forms",
                "Content you upload, submit, or generate using our platform",
              ]} />

              <H3>2.2 Automatically Collected Information</H3>
              <P>When you use our website or services, we may automatically collect:</P>
              <BulletList items={[
                "IP address",
                "Browser type and version",
                "Device information",
                "Usage data (pages visited, session duration, clicks, interactions)",
                "Cookies and tracking technologies",
              ]} />

              <H3>2.3 AI Interaction Data</H3>
              <P>If you use Murph&apos;s AI-powered tools, we may process:</P>
              <BulletList items={[
                "Prompts you provide",
                "Generated outputs",
                "Interaction logs",
                "Metadata related to system usage",
              ]} />
              <P>
                Murph does not use your proprietary or confidential content to train public AI models unless explicitly agreed in writing.
              </P>
            </Section>

            <Section title="3. How We Use Your Data">
              <P>We process personal data for the following purposes:</P>
              <BulletList items={[
                "To provide and operate our services",
                "To create and manage user accounts",
                "To improve system performance and user experience",
                "To communicate with you regarding updates, support, or marketing",
                "To process payments and manage billing",
                "To comply with legal obligations",
                "To detect fraud, misuse, or security incidents",
              ]} />
              <P>Our legal basis under GDPR may include:</P>
              <BulletList items={[
                "Contractual necessity",
                "Legitimate interest",
                "Consent",
                "Legal obligation",
              ]} />
            </Section>

            <Section title="4. Sharing of Data">
              <P>Murph does not sell personal data.</P>
              <P>We may share data with trusted third parties, including:</P>
              <BulletList items={[
                "Payment processors",
                "Hosting and cloud infrastructure providers",
                "Analytics providers",
                "Technical service providers",
                "Public authorities where required by law",
              ]} />
              <P>
                All data processors are contractually bound by data processing agreements in accordance with GDPR.
              </P>
            </Section>

            <Section title="5. International Data Transfers">
              <P>
                If personal data is transferred outside the EU/EEA, Murph ensures appropriate safeguards are implemented, including:
              </P>
              <BulletList items={[
                "EU Standard Contractual Clauses (SCCs)",
                "Transfers to countries with adequacy decisions",
                "Additional contractual and technical safeguards where necessary",
              ]} />
            </Section>

            <Section title="6. Data Retention">
              <P>We retain personal data only for as long as necessary to:</P>
              <BulletList items={[
                "Provide our services",
                "Fulfill contractual obligations",
                "Comply with legal requirements",
                "Resolve disputes",
              ]} />
              <P>Account data may be deleted upon request unless retention is legally required.</P>
            </Section>

            <Section title="7. Your Rights Under GDPR">
              <P>Under GDPR, you have the right to:</P>
              <BulletList items={[
                "Access your personal data",
                "Rectify inaccurate or incomplete data",
                "Request erasure of your data",
                "Restrict or object to processing",
                "Request data portability",
                "Withdraw consent at any time",
              ]} />
              <P>
                You may also lodge a complaint with the Danish Data Protection Agency (Datatilsynet).
              </P>
              <P>
                To exercise your rights, contact: <a href="mailto:sejer@trymurph.com" className="underline" style={{ color: "rgba(255,255,255,0.8)" }}>Sejer@trymurph.com</a>
              </P>
            </Section>

            <Section title="8. Security">
              <P>
                Murph implements appropriate technical and organizational security measures, including:
              </P>
              <BulletList items={[
                "Encrypted data transmission (HTTPS)",
                "Secure cloud infrastructure",
                "Access controls",
                "Monitoring and logging",
              ]} />
              <P>However, no method of transmission or storage is completely secure.</P>
            </Section>

            <Section title="9. Cookies">
              <P>Murph uses cookies and similar technologies to:</P>
              <BulletList items={[
                "Enable core website functionality",
                "Analyze traffic",
                "Improve user experience",
              ]} />
              <P>
                Users can manage cookie preferences through their browser settings. A separate Cookie Policy may apply.
              </P>
            </Section>

            <Section title="10. Children's Privacy">
              <P>
                Murph does not knowingly collect personal data from individuals under the age of 16.
              </P>
            </Section>

            <Section title="11. Changes to This Policy">
              <P>
                Murph may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date.
              </P>
            </Section>

            <Section title="12. Contact Information">
              <ul className="list-none space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <li>Murph ApS</li>
                <li>Lyngebakken 18</li>
                <li>Copenhagen, Denmark</li>
                <li>CVR: 44670623</li>
                <li>Email: <a href="mailto:sejer@trymurph.com" className="underline" style={{ color: "rgba(255,255,255,0.8)" }}>Sejer@trymurph.com</a></li>
              </ul>
            </Section>
          </div>

          {/* CTA buttons */}
          <div className="mt-16 flex items-center justify-center gap-x-4">
            <a
              href="https://calendly.com/sejer-anthemagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
            >
              Get in touch
            </a>
            <a
              href="/#how-we-work"
              className="px-7 py-3 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium hover:bg-white/25 transition-colors duration-150 backdrop-blur-sm"
            >
              How it works
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="text-lg lg:text-xl mb-4"
        style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF" }}
      >
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-sm font-medium mt-4 mb-2"
      style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter)" }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
