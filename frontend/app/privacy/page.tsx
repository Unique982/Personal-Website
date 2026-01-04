import { LegalLayout } from "@/components/legal-layout";

export default function LegalPage() {
  return (
    <LegalLayout title="Legal Information" lastUpdated="January 3, 2026">
      {/* Privacy Policy */}
      <section id="privacy-policy" className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Privacy Policy</h2>

        <p className=" leading-relaxed">
          Welcome to <strong>khemrajneupane.com.np</strong>. Your privacy is
          important to us. This Privacy Policy explains how we collect, use, and
          protect your information when you visit our website.
        </p>

        <p className=" leading-relaxed">
          We may collect personal information such as your name, email address,
          or other details only when you voluntarily provide them (for example,
          via contact forms).
        </p>

        <p className="leading-relaxed">
          We also collect non-personal information such as browser type, IP
          address, device information, pages visited, and time spent on the
          site.
        </p>

        <p className=" leading-relaxed">
          <strong>Cookies:</strong> Our website uses cookies to enhance user
          experience, store visitor preferences, and display personalized
          content. You may disable cookies through your browser settings.
        </p>

        <p className=" leading-relaxed">
          <strong>Google AdSense & Third-Party Ads:</strong> We use Google
          AdSense to display advertisements. Google, as a third-party vendor,
          uses cookies (including the DoubleClick cookie) to serve ads based on
          users’ visits to this and other websites. Users may opt out of
          personalized advertising via Google Ads Settings.
        </p>
      </section>

      {/* Terms & Conditions */}
      <section id="terms" className="space-y-4 pt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Terms & Conditions
        </h2>

        <p className=" leading-relaxed">
          By accessing <strong>khemrajneupane.com.np</strong>, you agree to be
          bound by these Terms & Conditions. If you do not agree, please do not
          use our website.
        </p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>All content is for personal and informational purposes only.</li>
          <li>Unauthorized use of our content is strictly prohibited.</li>
          <li>
            We may modify, update, or remove content at any time without prior
            notice.
          </li>
          <li>
            We do not guarantee that the website will always be error-free or
            uninterrupted.
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className="space-y-4 pt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Disclaimer</h2>

        <p className=" leading-relaxed">
          All information provided on <strong>khemrajneupane.com.np</strong> is
          published in good faith and for general informational purposes only.
          We make no warranties regarding the accuracy, completeness, or
          reliability of this information.
        </p>

        <p className="leading-relaxed">
          Any action you take upon the information found on this website is
          strictly at your own risk. We will not be liable for any losses or
          damages in connection with the use of our website.
        </p>
      </section>

      {/* GDPR & CCPA */}
      <section id="rights" className="space-y-4 pt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">
          GDPR & CCPA Rights
        </h2>

        <p className=" leading-relaxed">
          Users have the right to access, correct, or delete their personal
          data. If you wish to exercise these rights, please contact us using
          the information below.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4 pt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Contact Us</h2>

        <p className=" leading-relaxed">
          If you have any questions regarding this Legal Information page,
          please contact us at:
        </p>

        <p className="font-medium text-primary">
          📧 contact@khemrajneupane.com.np <br />
          📧 developerunique123@gmail.com
        </p>
      </section>
    </LegalLayout>
  );
}
