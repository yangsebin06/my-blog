const fs = require('fs');
const path = require('path');

const topics = [
  "진짜 코딩의 세계로! C언어 포인터 첫 만남", 
  "비전공자에서 컴공 신입생으로, 첫 한 달 회고", 
  "나의 첫 번째 개발용 맥북, M-시리즈 세팅 삽질기",
  "처음 겪는 리눅스(Linux) 터미널, 까만 창 공포증 극복하기", 
  "객체지향이 뭔데? 붕어빵 틀로 배우는 Java 기초", 
  "코딩 동아리 첫 코테 면접 탈탈 털린 후기",
  "HTML/CSS 기초 타파: 나만의 첫 웹페이지 띄우기", 
  "도대체 Git은 왜 쓰는 걸까? add, commit, push의 늪", 
  "신입생 필수 교양 정리, 그리고 학점 관리 전략",
  "알고리즘 입문: O(n)과 O(n^2)이 가져온 충격적인 차이"
];

const tagsPool = [
  ["C언어", "포인터", "전공필수"], ["신입생회고", "컴공", "열정"], ["맥북", "개발환경", "삽질기"], 
  ["Linux", "CLI", "우분투"], ["Java", "객체지향", "OOP"], ["코딩테스트", "동아리면접", "알고리즘"],
  ["프론트엔드", "HTML", "첫웹사이트"], ["Git", "버전관리", "Github"], ["대학생활", "새내기", "학점"], 
  ["알고리즘", "시간복잡도", "자료구조"]
];

function generatePosts() {
  const posts = [];
  
  // Start from late January 2026 (getting ready for the semester) to April 14, 2026
  let currentDate = new Date('2026-01-25');
  const msPerDay = 1000 * 60 * 60 * 24;
  
  // Total days from Jan 25 to Apr 14 is approx 80 days. 
  // 50 posts out of 80 days means almost every 1-2 days.

  for (let i = 1; i <= 50; i++) {
    const topicIndex = (i - 1) % topics.length;
    let baseTopic = topics[topicIndex];
    const tags = tagsPool[topicIndex];
    
    // Vary the topic slightly to make them unique
    if (i > 10) baseTopic = `[Week ${Math.ceil(i/5)}] ${baseTopic} 심화편 정리`;
    if (i > 30) baseTopic = `[중간고사 에피소드] ${baseTopic} 극복기`;

    // Increment date by 1~2 days
    currentDate = new Date(currentDate.getTime() + (Math.floor(Math.random() * 2) + 1) * msPerDay);
    
    // Cap at 2026-04-14
    if (currentDate > new Date('2026-04-14')) {
      currentDate = new Date('2026-04-14');
    }
    
    const dateStr = currentDate.toISOString().split('T')[0];

    const slug = `sebin-story-${i}-${baseTopic.replace(/[^a-zA-Z0-9가-힣]+/g, '-').toLowerCase()}`;
    const title = `${baseTopic}`;
    const excerpt = `컴퓨터 소프트웨어 공학부 신입생으로서 겪은 에피소드. 오늘은 '${tags[0]}' 주제로 처음 부딪힌 벽과 그것을 어떻게 해결해나갔는지 솔직하고 담백하게 정리해보았습니다.`;
    const content = `
## 🍏 새내기 개발자의 우당탕탕 성장 일기 (${i}번째 기록)

안녕하세요! 컴퓨터 소프트웨어 전공으로 이제 막 코딩의 세계에 뛰어든 예비 개발자, 양세빈입니다. 
오늘은 대학교 첫 학기를 보내며 만난 **${tags[0]}** 에 얽힌 짭짤한(?) 경험을 이야기해볼까 합니다.

### 1. 오늘의 멘붕 포인트: 도대체 이게 왜 안 될까?
처음 수업을 듣고 과제를 시작할 때만 해도 항상 자신감이 넘칩니다. "이 정도 공식이나 문법이면 금방 끝나겠지?"
하지만 현실은 늘 차갑습니다. 
- 오타 하나 때문에 3시간 동안 원인을 찾지 못해 헤맨 경험
- 교수님이 시연하실 때는 완벽하게 돌아갔는데 내 노트북에서는 빨간 에러만 뿜어내는 마법

### 2. 구글링과 삽질의 미학
선배들이 가장 많이 구글링(Googling) 역량을 강조했던 이유를 이제야 알 것 같습니다. 공식 문서나 스택오버플로우를 참고하며 겨우겨우 해결책을 찾아 나갔습니다. 에러 메시지를 읽는 버릇을 들이니 조금씩 어떤 규칙으로 코드가 박살나고 있는지 보이더군요!

\`\`\`javascript
// 오늘 새롭게 배운 가장 중요한 마인드셋 코드
function isDeveloper(me) {
  if (me.hasError) {
    console.log("당황하지 말고 콘솔 로그부터 읽자!");
    me.searchGoogle();
    me.solve();
  }
  return true;
}
\`\`\`

### 3. 마무리하며
비록 동기들에 비해 아직 걸음마 단계 같아 보일 때도 있지만, 하루하루 모르는 것을 확실히 내 것으로 만들어가는 재미가 꽤나 쏠쏠합니다.
내일은 또 어떤 미지의 에러가 저를 기다리고 있을까요? 다음 기록에서 이어가겠습니다!
    `.trim();

    posts.push({ slug, title, date: dateStr, excerpt, content, tags });
  }
  
  posts.reverse(); // Newest first

  return `export const BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n\nexport function getPostBySlug(slug: string) {\n  return BLOG_POSTS.find((post) => post.slug === slug);\n}\n`;
}

const outputPath = path.join(__dirname, 'src', 'app', 'blog', 'data.ts');
fs.writeFileSync(outputPath, generatePosts(), 'utf-8');
console.log('Successfully generated 50 freshman-tailored blog posts!');
