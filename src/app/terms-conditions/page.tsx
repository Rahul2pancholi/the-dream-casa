import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for thedreamcasa.in and the general terms under which The Dream Casa provides interior design and turnkey execution services.",
  alternates: {
    canonical: "https://thedreamcasa.in/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Legal"
          title="Terms &amp; Conditions"
          description="Last updated: 17 August 2026"
        />

        <section className="bg-cream-light px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">1. Website use</h2>
              <p>
                thedreamcasa.in is operated by The Dream Casa, an interior design studio led by
                Poorti Jain, with studios in Indore and Ahmedabad. By using this website you agree to
                these terms. Content on this site — photography, 3D renders, text, and video — is
                provided for informational purposes about our services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">2. Intellectual property</h2>
              <p>
                All photography, 3D renders, and written content on this site are the property of The
                Dream Casa and may not be reproduced, downloaded, or used commercially without our
                written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">3. Consultation requests</h2>
              <p>
                Submitting a consultation form, WhatsApp message, or phone call does not create a
                binding service agreement. Project scope, timelines, pricing, and deliverables are
                confirmed separately in writing once we&rsquo;ve discussed your project and agreed on
                terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">4. Project engagements</h2>
              <p>
                Once you engage The Dream Casa for a design or turnkey execution project, the specific
                scope, itemized BOQ, payment schedule, and timeline for that project are governed by a
                separate signed agreement between you and The Dream Casa, not by this website&rsquo;s
                terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">5. No warranty on website content</h2>
              <p>
                We keep this site up to date to the best of our ability, but pricing ranges, project
                examples, and timelines shown here are indicative and may vary by project scope,
                location, and material availability at the time of your enquiry.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">6. Governing law</h2>
              <p>
                These terms are governed by the laws of India, with courts in Indore, Madhya Pradesh
                having jurisdiction over any disputes arising from use of this website.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">7. Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
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
