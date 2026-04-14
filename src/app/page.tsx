import Link from "next/link";
import { BLOG_POSTS } from "./blog/data";

export default function Home() {
  const recentPosts = BLOG_POSTS.slice(0, 5);

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Hero Section */}
      <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 font-sans">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-apple-text mb-6">
            안녕하세요.<br />
            양세빈입니다.
          </h1>
          <p className="text-xl md:text-2xl text-apple-textMute font-medium tracking-tight mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            컴퓨터 소프트웨어 공학을 전공하고 있는 <br className="hidden md:block" />신입생의 좌충우돌 성장 기록입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/blog" className="bg-apple-text text-white px-8 py-3.5 rounded-full font-semibold hover:bg-apple-blue transition-all duration-300 shadow-apple hover:shadow-apple-hover">
              스토리 읽기
            </Link>
            <Link href="/projects" className="bg-white text-apple-text border border-apple-border/50 px-8 py-3.5 rounded-full font-semibold hover:border-apple-blue hover:text-apple-blue transition-all duration-300">
              프로젝트 보기
            </Link>
          </div>
        </div>
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-[2rem] bg-gradient-to-br from-gray-100 to-gray-200 shadow-apple flex-shrink-0 flex items-center justify-center border border-white relative overflow-hidden">
            {/* Apple-esque geometric aesthetic or Memoji style placeholder */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            <span className="material-symbols-outlined text-8xl text-apple-textMute relative z-10 opacity-50">face</span>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 border-t border-apple-border/30">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-apple-text">최근 작성된 글</h2>
          <Link href="/blog" className="text-sm font-semibold text-apple-blue hover:underline">
            에피소드 전체보기 &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.slice(0,3).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white p-6 rounded-2xl border border-apple-border/40 hover:border-apple-blue/50 hover:shadow-apple transition-all duration-300">
              <span className="text-xs font-mono text-apple-textMute mb-3">{post.date}</span>
              <h3 className="text-lg font-bold text-apple-text mb-3 leading-snug group-hover:text-apple-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-apple-textMute text-sm line-clamp-2 leading-relaxed mb-4 mt-auto">
                {post.excerpt}
              </p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-apple-border/20">
                {post.tags.slice(0,2).map(tag => (
                  <span key={tag} className="bg-apple-gray text-apple-textMute text-[10px] px-2 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
