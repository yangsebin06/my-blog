export const metadata = {
  title: "Contact | NEURAL_MONOLITH",
  description: "Get in touch with me.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant/20 rounded-sm mb-6">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <span className="text-[10px] font-mono text-primary tracking-widest uppercase">CONNECTION_ESTABLISHED</span>
      </div>
      
      <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-4 text-on-surface uppercase">
        Contact <span className="text-primary">Me</span>
      </h1>
      
      <p className="font-body text-on-surface-variant max-w-xl text-center mb-12">
        동아리 활동이나 프로젝트 제안, 언제든 환영합니다! 아래 터미널 포트를 통해 메시지를 전송해주세요.
      </p>

      <form className="w-full bg-[#1C1B1B]/80 backdrop-blur-sm p-8 border border-outline-variant/20 rounded-lg flex flex-col gap-6 shadow-2xl">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-mono text-secondary tracking-widest uppercase">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-surface-container-highest border border-outline-variant/30 text-on-surface px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body" 
            placeholder="이름을 입력하세요" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-mono text-secondary tracking-widest uppercase">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-surface-container-highest border border-outline-variant/30 text-on-surface px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body" 
            placeholder="이메일 주소를 입력하세요" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-mono text-secondary tracking-widest uppercase">Message</label>
          <textarea 
            id="message" 
            className="w-full bg-surface-container-highest border border-outline-variant/30 text-on-surface px-4 py-3 rounded-md min-h-[150px] resize-y focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body" 
            placeholder="메시지 내용을 적어주세요"
          ></textarea>
        </div>

        <button 
          type="button" 
          className="mt-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest px-6 py-4 rounded-md hover:brightness-110 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">send</span> 
          Transmit Message
        </button>
      </form>
    </div>
  );
}
