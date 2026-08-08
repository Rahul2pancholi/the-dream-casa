import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Tag, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Metadata } from "next";

interface BlogSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | The Dream Casa",
    };
  }

  return {
    title: `${post.title} | The Dream Casa Indore`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://thedreamcasa.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://thedreamcasa.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogSlugProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://thedreamcasa.in${post.image}`,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "The Dream Casa",
      logo: {
        "@type": "ImageObject",
        url: "https://thedreamcasa.in/images/logo-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thedreamcasa.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="flex flex-1 flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Article Header Hero */}
        <section className="relative overflow-hidden bg-[#161412] py-16 text-white sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-gold">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-gold uppercase tracking-wider font-semibold">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink font-bold">
                  PJ
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-neutral-400">{post.author.role} • {post.locality}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/917490932661?text=Hi%20Poorti,%20I%20read%20your%20article%20'${encodeURIComponent(
                  post.title
                )}'%20and%20want%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white uppercase tracking-wider shadow-lg hover:bg-emerald-700 transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Ask Poorti on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-[#faf8f5] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Article Content Container */}
            <article className="mt-12 rounded-3xl border border-gold/15 bg-white p-8 sm:p-12 shadow-sm">
              <div className="prose prose-lg max-w-none text-ink prose-headings:font-serif prose-headings:font-bold prose-headings:text-ink prose-p:text-muted prose-p:leading-relaxed prose-a:text-gold prose-strong:text-ink">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/\n\n/g, "<br/><br/>")
                      .replace(/## (.*)/g, '<h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-ink">$1</h2>')
                      .replace(/### (.*)/g, '<h3 className="font-serif text-xl font-bold mt-6 mb-3 text-gold">$1</h3>'),
                  }}
                />
              </div>

              {/* Founder Spotlight Card */}
              <div className="mt-14 rounded-2xl border border-gold/20 bg-cream p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-white font-serif text-2xl font-bold">
                  PJ
                </div>
                <div className="flex flex-col text-center sm:text-left gap-2">
                  <h3 className="font-serif text-xl font-bold text-ink">
                    Consultation with Founder Poorti Jain
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Have questions about turnkey budgets, 3D architectural renders, or civil modifications for your home in Indore? Contact Poorti Jain directly.
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3">
                    <a
                      href="tel:+917490932661"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-semibold text-white uppercase tracking-wider hover:bg-gold-dark"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call +91 7490 932 661
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-5 py-2 text-xs font-semibold text-ink uppercase tracking-wider hover:bg-cream-dark"
                    >
                      Book Studio Visit
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>

      <SiteFooter />
    </div>
  );
}
