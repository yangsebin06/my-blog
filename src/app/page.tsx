import Link from "next/link";
import { BLOG_POSTS } from "./blog/data";

export default function Home() {
  // Only show the latest 6 posts on the homepage for a clean look
  const recentPosts = BLOG_POSTS.slice(0, 6);
  const remainingCount = BLOG_POSTS.length - 6;

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Hero Section */}
      <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 font-sans mb-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-apple-text mb-6 leading-tight">
            안녕하세요.<br />
            양세빈입니다.
          </h1>
          <p className="text-xl md:text-2xl text-apple-textMute font-medium tracking-tight mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            컴퓨터 소프트웨어 공학을 전공하는 <br className="hidden md:block" />신입생의 좌충우돌 성장 기록입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/blog" className="bg-apple-text text-apple-bg px-8 py-3.5 rounded-full font-semibold hover:bg-apple-blue hover:text-white transition-all duration-300 shadow-apple hover:shadow-apple-hover">
              모든 에피소드 읽기
            </Link>
            <Link href="/projects" className="bg-apple-card text-apple-text border border-apple-border/50 px-8 py-3.5 rounded-full font-semibold hover:border-apple-border hover:bg-apple-border/20 transition-all duration-300">
              프로젝트 보기
            </Link>
          </div>
        </div>
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-apple-card to-black shadow-apple-hover flex-shrink-0 flex items-center justify-center border border-apple-border/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
            <span className="material-symbols-outlined text-8xl text-apple-textMute relative z-10 opacity-30">terminal</span>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 border-t border-apple-border/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-apple-text mb-1">최근 작성된 에피소드</h2>
            <p className="text-apple-textMute text-sm">가장 최근에 기록된 6개의 포스트만 미리 보실 수 있습니다.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-apple-card p-6 md:p-8 rounded-[1.5rem] border border-apple-border/30 hover:border-apple-blue/50 hover:bg-apple-cardHover transition-all duration-300 shadow-sm hover:shadow-apple">
              <span className="text-xs font-mono text-apple-textMute mb-4 block">{post.date}</span>
              <h3 className="text-lg md:text-xl font-bold text-apple-text mb-3 leading-snug group-hover:text-apple-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-apple-textMute text-[13px] md:text-sm line-clamp-3 leading-relaxed mb-6 mt-auto">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-apple-border/20">
                {post.tags.slice(0,2).map(tag => (
                  <span key={tag} className="bg-apple-bg border border-apple-border/50 text-apple-textMute text-[10px] px-2.5 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Huge View All Button to emphasize 50 posts */}
        <div className="flex justify-center mt-4">
          <Link href="/blog" className="group flex items-center gap-3 bg-apple-card border border-apple-border/40 px-8 py-4 rounded-full text-apple-text font-semibold hover:border-apple-blue hover:text-apple-blue transition-all duration-300 shadow-apple">
            <span className="material-symbols-outlined text-[18px]">library_books</span>
            나머지 {remainingCount}개의 글 전체보기 &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
