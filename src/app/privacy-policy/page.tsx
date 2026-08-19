import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Dream Casa collects, uses, and protects information shared through our website, consultation form, and WhatsApp.",
  alternates: {
    canonical: "https://thedreamcasa.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated: 17 August 2026"
        />

        <section className="bg-cream-light px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">1. Who we are</h2>
              <p>
                The Dream Casa (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is an interior design studio led by
                Poorti Jain, operating from Indore, Madhya Pradesh and Ahmedabad, Gujarat. This policy
                explains how we handle information when you visit thedreamcasa.in, submit a consultation
                request, or contact us by phone or WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">2. Information we collect</h2>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li>Name, phone number, email address, and project details you submit through our consultation form or WhatsApp chat.</li>
                <li>Standard analytics data (pages visited, device type, approximate location) via Google Analytics, to understand how visitors use the site.</li>
                <li>We do not collect payment information, passwords, or government ID numbers through this website.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">3. How we use it</h2>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li>To respond to your consultation request and discuss your interior design project.</li>
                <li>To follow up by phone, WhatsApp, or email regarding an enquiry you initiated.</li>
                <li>To understand site usage and improve page content and performance.</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">4. WhatsApp &amp; phone contact</h2>
              <p>
                When you message us on WhatsApp or call the number listed on this site, that
                conversation is subject to WhatsApp&rsquo;s and your mobile carrier&rsquo;s own privacy
                terms in addition to this policy. We use those conversations only to respond to your
                enquiry.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">5. Third-party services</h2>
              <p>
                We use Google Analytics for site traffic insights and Firebase Hosting to serve this
                website. These providers may process standard technical data (such as IP address and
                browser type) under their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">6. Your choices</h2>
              <p>
                You can ask us to delete any information you&rsquo;ve shared with us by emailing{" "}
                <a href="mailto:thedreamcasastudio@gmail.com" className="text-gold underline">
                  thedreamcasastudio@gmail.com
                </a>{" "}
                or messaging us on WhatsApp. We will action reasonable requests within a reasonable
                timeframe.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">7. Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:thedreamcasastudio@gmail.com" className="text-gold underline">
                  thedreamcasastudio@gmail.com
                </a>{" "}
                or +91 93434 70377.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
