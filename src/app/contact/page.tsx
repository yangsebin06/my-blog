export const metadata = {
  title: "Contact | 양세빈의 블로그",
  description: "프로젝트 협업 제안 및 문의",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight">연락하기</h1>
        <p className="text-on-surface-variant text-lg">
          동아리 활동이나 새로운 사이드 프로젝트 제안은 언제나 환영합니다!
        </p>
      </div>

      <form className="bg-white p-8 md:p-12 rounded-2xl border border-outline-variant shadow-sm space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-on-surface">이름 (Name)</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-on-surface bg-surface-dim" 
            placeholder="이름을 입력하세요" 
            required 
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold text-on-surface">이메일 (Email)</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-on-surface bg-surface-dim" 
            placeholder="이메일 주소를 입력하세요" 
            required 
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-bold text-on-surface">내용 (Message)</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-outline focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-on-surface bg-surface-dim resize-y" 
            placeholder="제안하실 내용을 자유롭게 적어주세요."
            required 
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full mt-4 bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-500 transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">send</span> 
          메시지 보내기
        </button>
      </form>
    </div>
  );
}
