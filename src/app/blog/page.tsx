import Link from "next/link";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Blog | 양세빈의 아카이브",
  description: "컴퓨터 소프트웨어 공학 신입생의 성장 기록",
};

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="mb-12 border-b border-apple-border/40 pb-8 text-center md:text-left">
        <h1 className="text-4xl font-black tracking-tight text-apple-text mb-4">전체 아카이브</h1>
        <p className="text-apple-textMute text-lg font-medium">
          신입생의 시선으로 바라본 소프트웨어 공학의 세계를 꼼꼼히 기록합니다. (총 {BLOG_POSTS.length}편)
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block bg-apple-card rounded-2xl p-6 md:p-8 border border-apple-border/30 hover:border-apple-blue/40 hover:bg-apple-cardHover hover:shadow-apple transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-apple-blue/0 group-hover:bg-apple-blue transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-apple-text group-hover:text-apple-blue transition-colors">
                {post.title}
              </h2>
              <time className="text-sm font-mono text-apple-textMute whitespace-nowrap">
                {post.date}
              </time>
            </div>
            
            <p className="text-apple-textMute leading-relaxed line-clamp-2 font-medium mb-6">
              {post.excerpt}
            </p>

            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-apple-bg border border-apple-border/40 text-apple-textMute text-xs font-medium px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
