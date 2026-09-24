import { LegalLayout } from "@/components/legal-layout";

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="January 3, 2026">
      <section className="space-y-4">
        <p className="leading-relaxed">
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
    </LegalLayout>
  );
}