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

  // Very basic simulated markdown rendering
  const createMarkup = (html: string) => {
    let converted = html;
    converted = converted.replace(/## (.*?)\n/g, '<h2 class="text-2xl font-bold mt-10 mb-4 text-on-surface border-b border-outline-variant pb-2">$1</h2>\n');
    converted = converted.replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold mt-8 mb-3 text-on-surface">$1</h3>\n');
    converted = converted.replace(/\`(.*?)\`/g, '<code class="bg-surface-dim text-primary-600 font-mono text-sm px-1.5 py-0.5 rounded border border-outline-variant">$1</code>');
    
    // Markdown lists
    converted = converted.replace(/- (.*?)\n/g, '<li class="ml-6 list-disc mb-1 text-on-surface-variant">$1</li>\n');
    
    const paragraphs = converted.split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => {
        if (!p.startsWith('<h') && !p.startsWith('<li')) {
          return `<p class="text-on-surface-variant leading-relaxed mb-6">${p.replace(/\n/g, '<br/>')}</p>`;
        }
        if (p.startsWith('<li')) {
           return `<ul class="mb-6">${p}</ul>`;
        }
        return p;
      });
      
    return { __html: paragraphs.join('') };
  };

  return (
    <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-outline-variant shadow-sm mt-4">
      <Link href="/blog" className="inline-flex items-center gap-2 text-on-surface-variant font-medium hover:text-primary-600 transition-colors mb-10 text-sm">
        <span className="material-symbols-outlined text-base">arrow_back</span> 목록으로 돌아가기
      </Link>
      
      <header className="mb-12 border-b border-outline-variant pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-primary-50 text-primary-600 text-xs px-2 py-1 font-medium rounded border border-primary-100">
              #{tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-on-surface">
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
            <span className="material-symbols-outlined text-sm">person</span>
          </div>
          <div>
            <div className="text-on-surface font-semibold text-sm">양세빈</div>
            <time className="text-on-surface-variant text-xs">{post.date}</time>
          </div>
        </div>
      </header>

      <div 
        className="text-on-surface-variant leading-relaxed text-base md:text-lg"
        dangerouslySetInnerHTML={createMarkup(post.content)} 
      />
    </article>
  );
}
