import Link from "next/link";
import { BLOG_POSTS } from "./blog/data";

export default function Home() {
  const recentPosts = BLOG_POSTS.slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white rounded-2xl p-10 md:p-16 mb-12 shadow-sm border border-outline-variant text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-6 border border-primary-100">
            👋 환영합니다!
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            안녕하세요, <br /> 
            <span className="text-primary-600">양세빈님의 블로그</span>입니다.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            소프트웨어 공학 전공 대학생으로서 배운 내용과 진행한 프로젝트를 기록하는 공간입니다. 
            단순한 코드를 넘어 사용자에게 가치를 전달하는 개발자를 꿈꾸고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/blog" className="bg-primary-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-primary-500 transition-colors shadow-sm">
              블로그 글 보기
            </Link>
            <Link href="/projects" className="bg-white text-on-surface border border-outline px-6 py-3 font-semibold rounded-lg hover:bg-surface-dim transition-colors">
              프로젝트 구경하기
            </Link>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-primary-100 to-primary-50 border-4 border-white shadow-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
            {/* Avatar Placeholder */}
            <span className="material-symbols-outlined text-9xl text-primary-300">person</span>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Recent Posts */}
        <section className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-on-surface">최신 글</h2>
            <Link href="/blog" className="text-sm font-semibold text-primary-600 hover:underline">
              전체 보기 &rarr;
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                <span className="text-sm text-on-surface-variant mb-2 block">{post.date}</span>
                <h3 className="text-xl font-bold text-on-surface mb-2 hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar Info */}
        <section className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="text-lg font-bold mb-4 border-b border-outline-variant pb-2">프로필 요약</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">school</span> 컴퓨터 소프트웨어 전공</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">code</span> 관심 분야: 백엔드, 알고리즘, 인공지능</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">mail</span> yangsebin7391@naver.com</li>
            </ul>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 shadow-sm">
            <h3 className="text-lg font-bold text-primary-900 mb-2">🔥 이번 달의 목표</h3>
            <p className="text-primary-800 text-sm leading-relaxed">
              하루 1 커밋 실천하기! 꾸준함의 힘을 믿고, 매일 조금씩 성장하는 과정을 기록하겠습니다.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
