import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, User, Tag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Journal & Cost Guides Indore | The Dream Casa",
  description:
    "Expert interior design insights, 3BHK cost breakdowns, turnkey execution guides, and material selection tips by Poorti Jain in Indore.",
  alternates: {
    canonical: "https://thedreamcasa.in/blog",
  },
  openGraph: {
    title: "Interior Design Journal & Cost Guides Indore | The Dream Casa",
    description:
      "Expert interior design insights, 3BHK cost breakdowns, turnkey execution guides, and material selection tips by Poorti Jain in Indore.",
    url: "https://thedreamcasa.in/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.slice(1);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Blog Hero Header */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5 text-left">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                The Dream Casa Journal
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Interior Design Guides & Cost Insights in Indore
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                Practical advice on 3D renders, turnkey execution, cost estimates, modular kitchens, and material sourcing by Poorti Jain.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="bg-[#faf8f5] px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Featured Hero Article */}
            {featuredPost && (
              <div className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="grid lg:grid-cols-12 lg:items-center">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted lg:col-span-7 lg:aspect-[4/3]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                      Featured Guide
                    </div>
                  </div>

                  <div className="flex flex-col p-8 sm:p-10 lg:col-span-5">
                    <div className="flex items-center gap-4 text-xs font-medium text-gold">
                      <span className="flex items-center gap-1.5">
                        <Tag className="h-3.5 w-3.5" />
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-muted">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-ink group-hover:text-gold transition-colors sm:text-3xl">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-gold/10 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                          PJ
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-ink">{featuredPost.author.name}</p>
                          <p className="text-[11px] text-muted">{featuredPost.locality}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold tracking-wider text-gold uppercase transition-all hover:bg-gold hover:text-white"
                      >
                        Read Post <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Articles Grid */}
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink shadow backdrop-blur">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 text-[11px] text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-gold" />
                          {post.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gold" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold leading-snug text-ink group-hover:text-gold transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gold/10 pt-4">
                      <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
                        <MapPin className="h-3 w-3 text-gold" />
                        {post.locality}
                      </span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform"
                      >
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
