import { LegalLayout } from "@/components/legal-layout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 3, 2026">
      <section className="space-y-4">
        <p className="leading-relaxed">
          Welcome to <strong>khemrajneupane.com.np</strong>. Your privacy is
          important to us. This Privacy Policy explains how we collect, use, and
          protect your information when you visit our website.
        </p>

        <p className="leading-relaxed">
          We may collect personal information such as your name, email address,
          or other details only when you voluntarily provide them (for example,
          via contact forms).
        </p>

        <p className="leading-relaxed">
          We also collect non-personal information such as browser type, IP
          address, device information, pages visited, and time spent on the
          site.
        </p>

        <p className="leading-relaxed">
          <strong>Cookies:</strong> Our website uses cookies to enhance user
          experience, store visitor preferences, and display personalized
          content. You may disable cookies through your browser settings.
        </p>

        <p className="leading-relaxed">
          <strong>Google AdSense & Third-Party Ads:</strong> We use Google
          AdSense to display advertisements. Google, as a third-party vendor,
          uses cookies (including the DoubleClick cookie) to serve ads based on
          users’ visits to this and other websites.
        </p>
      </section>

      <section id="rights" className="space-y-4 pt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">
          {" "}
          GDPR & CCPA Rights{" "}
        </h2>
        <p className="leading-relaxed">
          Users have the right to access, correct, or delete their personal
          data. If you wish to exercise these rights, please contact us at
          <span className="text-primary"> contact@khemrajneupane.com.np</span>.
        </p>
      </section>
    </LegalLayout>
  );
}
