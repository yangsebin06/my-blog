import { getPostBySlug, BLOG_POSTS } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

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

  const createMarkup = (html: string) => {
    let converted = html;
    converted = converted.replace(/## (.*?)\n/g, '<h2 class="text-2xl font-bold mt-12 mb-6 text-apple-text border-b border-apple-border/40 pb-2 tracking-tight">$1</h2>\n');
    converted = converted.replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold mt-8 mb-4 text-apple-text tracking-tight">$1</h3>\n');
    converted = converted.replace(/\`(.*?)\`/g, '<code class="bg-apple-bg border border-apple-border/50 text-apple-blue font-mono text-[13px] px-1.5 py-0.5 rounded-md">$1</code>');
    
    converted = converted.replace(/- (.*?)\n/g, '<li class="ml-6 list-disc mb-2 text-apple-textMute font-medium">$1</li>\n');
    
    const paragraphs = converted.split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => {
        if (!p.startsWith('<h') && !p.startsWith('<li')) {
          return `<p class="text-apple-textMute font-medium leading-[1.8] mb-6">${p.replace(/\n/g, '<br/>')}</p>`;
        }
        if (p.startsWith('<li')) {
           return `<ul class="mb-6">${p}</ul>`;
        }
        return p;
      });
      
    return { __html: paragraphs.join('') };
  };

  return (
    <article className="max-w-2xl mx-auto bg-apple-card p-8 md:p-14 rounded-[2rem] border border-apple-border/30 shadow-apple mt-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-apple-textMute font-semibold hover:text-apple-blue transition-colors mb-12 text-sm">
        <span className="material-symbols-outlined text-[18px]">arrow_back_ios_new</span> 목록으로 이동
      </Link>
      
      <header className="mb-14">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-apple-bg border border-apple-border/40 text-apple-text text-[11px] px-3 py-1 font-bold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.25] mb-8 text-apple-text">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 pt-6 border-t border-apple-border/40">
          <div className="w-10 h-10 bg-apple-bg rounded-full flex items-center justify-center text-apple-text">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>
          <div>
            <div className="text-apple-text font-bold text-sm">양세빈</div>
            <time className="text-apple-textMute text-xs font-medium">{post.date}</time>
          </div>
        </div>
      </header>

      <div 
        className="text-apple-textMute text-base md:text-[17px] tracking-tight"
        dangerouslySetInnerHTML={createMarkup(post.content)} 
      />
    </article>
  );
}
