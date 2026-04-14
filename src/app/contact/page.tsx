export const metadata = {
  title: "Contact | 양세빈의 아카이브",
  description: "연락처 및 소통",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-apple-text mb-4">어떻게 도와드릴까요?</h1>
        <p className="text-apple-textMute text-lg font-medium">
          사이드 프로젝트 제안이나 코드에 대한 피드백은 언제든 환영입니다.
        </p>
      </div>

      <div className="bg-apple-card p-8 md:p-12 rounded-[2rem] border border-apple-border/30 shadow-apple flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 bg-apple-bg border border-apple-border/40 flex items-center justify-center rounded-2xl text-apple-text mb-4">
          <span className="material-symbols-outlined text-[32px]">chat_bubble</span>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight text-apple-text">소통 창구 통합 안내</h2>
        <p className="text-apple-textMute font-medium leading-relaxed max-w-sm">
          개인정보 보호를 위해 직접적인 이메일 노출 대신, GitHub 프로필이나 커뮤니티 링크를 통해 연락을 받고 있습니다.
        </p>
        
        <div className="w-full h-px bg-apple-border/30 my-6"></div>

        <a 
          href="#" 
          className="w-full sm:w-auto bg-apple-blue text-white font-semibold py-4 px-8 rounded-full hover:bg-apple-blueHover transition-colors shadow-apple hover:shadow-apple-hover flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">public</span> 
          GitHub에서 소통하기
        </a>
      </div>
    </div>
  );
}
