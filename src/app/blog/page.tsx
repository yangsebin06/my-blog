import Link from "next/link";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Core Logic | NEURAL_MONOLITH",
  description: "개발 공부 기록과 일상 이야기",
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="flex items-end justify-between mb-16 border-b border-outline-variant/20 pb-8 relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant/20 rounded-sm mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase">System Logs // Active</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface">Core_Logic</h1>
          <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest mt-2 block">배우고 느낀 점들을 정리하고 공유합니다</p>
        </div>
      </div>

      <div className="space-y-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative p-6 bg-surface-container-low border border-outline-variant/10 rounded-lg hover:border-primary/50 transition-colors">
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-on-surface-variant/40 block mb-3">{post.date}</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-secondary-container/10 text-secondary text-[10px] px-2 py-0.5 font-mono uppercase rounded-sm border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {post.excerpt}
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end mt-4 md:mt-0">
              <Link href={`/blog/${post.slug}`} className="text-tertiary flex items-center gap-2 font-mono text-xs uppercase tracking-widest group">
                READ_LOG <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
