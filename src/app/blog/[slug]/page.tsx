import { getPostBySlug, BLOG_POSTS } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generate static params for all known posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Very basic simulated markdown rendering for this assignment.
  const createMarkup = (html: string) => {
    let converted = html;
    converted = converted.replace(/## (.*?)\n/g, '<h2 class="font-headline text-2xl font-bold mt-10 mb-4 text-primary">$1</h2>\n');
    converted = converted.replace(/\`(.*?)\`/g, '<code class="bg-[#1C1B1B] text-secondary font-mono text-sm px-1.5 py-0.5 rounded-sm border border-outline-variant/20">$1</code>');
    
    const paragraphs = converted.split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => {
        if (!p.startsWith('<h2')) {
          return `<p class="font-body text-on-surface-variant leading-relaxed mb-6">${p.replace(/\n/g, '<br/>')}</p>`;
        }
        return p;
      });
      
    return { __html: paragraphs.join('') };
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <Link href="/blog" className="inline-flex items-center gap-2 text-secondary font-mono text-xs uppercase tracking-widest hover:gap-3 transition-all mb-12">
        <span className="material-symbols-outlined text-sm">arrow_back</span> Return to Protocol
      </Link>
      
      <header className="mb-16 border-b border-outline-variant/20 pb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-primary-container/10 text-primary text-[10px] px-2 py-0.5 font-mono uppercase rounded-sm border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6 text-on-surface">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
          <div className="w-10 h-10 bg-surface-container-highest rounded-sm flex items-center justify-center border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary">person</span>
          </div>
          <div>
            <div className="text-secondary font-mono text-sm uppercase">Lead_Architect</div>
            <time className="text-on-surface-variant/40 font-mono text-[10px] uppercase tracking-widest">{post.date}</time>
          </div>
        </div>
      </header>

      <div 
        className="text-on-surface-variant leading-relaxed text-lg"
        dangerouslySetInnerHTML={createMarkup(post.content)} 
      />
    </article>
  );
}
