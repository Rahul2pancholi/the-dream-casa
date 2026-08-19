import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageSquare } from "lucide-react";
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
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
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

function renderMarkdownContent(content: string): string {
  let html = content;

  // Headers
  html = html.replace(/^## (.*$)/gim, '<h2 class="font-serif text-2xl sm:text-3xl mt-10 mb-4 text-ink border-b border-ink/10 pb-3">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="font-serif text-xl mt-8 mb-3 text-gold">$1</h3>');

  // Horizontal Rule
  html = html.replace(/^---$/gim, '<hr class="my-8 border-ink/10" />');

  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-ink">$1</strong>');

  // Italic text
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-ink/90">$1</em>');

  const lines = html.split("\n");
  let inList = false;
  const processedLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^[\d]+\.\s+(.*$)/.test(trimmed) || /^-\s+(.*$)/.test(trimmed) || /^\*\s+(.*$)/.test(trimmed)) {
      if (!inList) {
        inList = true;
        processedLines.push('<ul class="my-6 space-y-3 bg-cream/40 p-5 sm:p-6 border-l-2 border-gold/40">');
      }
      const itemText = trimmed.replace(/^[\d]+\.\s+/, "").replace(/^-\s+/, "").replace(/^\*\s+/, "");
      processedLines.push(
        `<li class="flex items-start gap-3 text-sm sm:text-base text-neutral-800 leading-relaxed"><span class="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold font-bold text-[10px]">✓</span><span>${itemText}</span></li>`
      );
    } else {
      if (inList) {
        inList = false;
        processedLines.push("</ul>");
      }

      if (trimmed && !trimmed.startsWith("<h") && !trimmed.startsWith("<hr")) {
        processedLines.push(`<p class="text-base sm:text-lg leading-relaxed text-neutral-700 my-5">${trimmed}</p>`);
      } else {
        processedLines.push(trimmed);
      }
    }
  }

  if (inList) {
    processedLines.push("</ul>");
  }

  return processedLines.join("");
}

export default async function BlogPostDetailPage({ params }: BlogSlugProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const renderedHtml = renderMarkdownContent(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: `https://thedreamcasa.in${post.image}`,
        datePublished: post.publishDate,
        dateModified: post.dateModified || post.publishDate,
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
          { "@type": "ListItem", position: 2, name: "Journal", item: "https://thedreamcasa.in/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://thedreamcasa.in/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Article Header Hero */}
        <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest transition-colors hover:text-cream-light"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Design Journal
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium tracking-wide text-white/50 uppercase">
              <span className="text-gold">{post.category}</span>
              <span className="text-gold/50">/</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishDate}
              </span>
              <span className="text-gold/50">/</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="text-gold/50">/</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {post.locality}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 pt-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-white font-serif font-bold shadow-md">
                  PJ
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author.name}</p>
                  <p className="text-xs text-neutral-400">{post.author.role} • Indore</p>
                </div>
              </div>

              <a
                href={`https://wa.me/919343470377?text=Hi%20Poorti,%20I%20read%20your%20article%20'${encodeURIComponent(
                  post.title
                )}'%20and%20want%20to%20discuss%20my%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white uppercase tracking-wider shadow-lg hover:bg-emerald-700 transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Consult Poorti on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Featured Image & Article Body */}
        <section className="bg-cream-light px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-ink/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Article Content Box */}
            <article className="mt-10 border border-ink/10 bg-card p-8 sm:p-14">
              <div
                className="article-content font-sans"
                dangerouslySetInnerHTML={{ __html: renderedHtml }}
              />

              {/* Founder Spotlight Box */}
              <div className="mt-14 border border-ink/10 bg-cream/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-md">
                  PJ
                </div>
                <div className="flex flex-col text-center sm:text-left gap-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-wider text-gold uppercase">
                    Interior Guidance &bull; Indore
                  </div>
                  <h3 className="font-serif text-xl text-ink">
                    Consultation with Founder Poorti Jain
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Have questions about turnkey interior budgets, 3D photorealistic architectural renders, or civil modifications for your residence in Indore? Connect directly with Poorti Jain.
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3">
                    <a
                      href="tel:+919343470377"
                      className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-xs font-semibold text-ink uppercase tracking-wider hover:bg-ink hover:text-cream-light transition-all"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call +91 93434 70377
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-ink/20 bg-card px-5 py-2.5 text-xs font-semibold text-ink uppercase tracking-wider hover:bg-cream-dark"
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
