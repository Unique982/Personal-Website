import { LegalLayout } from "@/components/legal-layout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="January 3, 2026">
      <section className="space-y-4">
        <p className="leading-relaxed">
          By accessing <strong>khemrajneupane.com.np</strong>, you agree to be
          bound by these Terms & Conditions. If you do not agree, please do not
          use our website.
        </p>

        <ul className="list-disc list-inside space-y-4 pl-4">
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
    </LegalLayout>
  );
}
