const fs = require('fs');
const path = require('path');

const topics = [
  "자료구조와 알고리즘", "파이썬 데이터 분석", "모바일 앱 개발 기초",
  "React 프론트엔드 최적화", "Node.js 백엔드 구조", "클라우드 컴퓨팅 특강",
  "Git과 Github 협업 전략", "정보 보안 입문", "AI 딥러닝 개론",
  "데이터베이스 설계 및 SQL"
];

const tagsPool = [
  ["알고리즘", "CS기초", "공부의흔적"], ["파이썬", "데이터", "분석가"], ["Android", "iOS", "모바일"], 
  ["React", "프론트엔드", "웹개발"], ["Nodejs", "백엔드", "서버"], ["AWS", "클라우드", "배포"],
  ["Git", "협업", "오픈소스"], ["보안", "해킹방어", "네트워크"], ["AI", "머신러닝", "인공지능"], 
  ["SQL", "DB", "백엔드"]
];

function generatePosts() {
  const posts = [];
  let currentDate = new Date('2025-01-01');

  for (let i = 1; i <= 50; i++) {
    const topicIndex = (i - 1) % topics.length;
    const baseTopic = topics[topicIndex];
    const tags = tagsPool[topicIndex];
    
    // Increment date slightly to make it look realistic
    currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 5) + 1);
    const dateStr = currentDate.toISOString().split('T')[0];

    const slug = `sebin-post-${i}-${baseTopic.replace(/\s+/g, '-').toLowerCase()}`;
    const title = `[${baseTopic}] 소프트웨어 학도라면 필수! ${i}일차 공부 기록`;
    const excerpt = `${baseTopic}에 대해 새롭게 배우게 된 핵심 개념 3가지와, 직접 코드로 구현해보며 겪었던 좌충우돌 에러 해결기를 깔끔하게 요약해 봅니다.`;
    const content = `
## 🚀 ${baseTopic} 정복하기 (${i}번째 학습 로그)

안녕하세요! 컴퓨터 소프트웨어 전공 양세빈입니다. 
오늘은 **${baseTopic}** 에 대해 깊이 있게 탐구해보았습니다.

### 1. 오늘의 학습 목표
- ${baseTopic} 의 핵심 원리 이해하기
- 수업 시간 실습 과제 구현해보기
- 자주 발생하는 에러 코드 원석 분석

### 2. 깨달은 점
항상 이론으로만 배울 때는 쉬워 보이지만, 막상 키보드를 두드리다 보면 전혀 예상치 못한 붉은색 에러 메시지를 만나게 됩니다. 
이번 ${baseTopic} 학습에서도 어김없이 삽질(?)을 했지만, 스택오버플로우와 공식 문서를 끈질기게 파고든 덕분에 스스로 해결할 수 있었습니다. 

\`\`\`javascript
// 오늘 알게 된 꿀팁 코드 조각!
function debugLife() {
  console.log("에러가 나도 포기하지 말자!");
  return true;
}
\`\`\`

### 3. 마무리
꾸준히 기록하는 습관이 훌륭한 소프트웨어 엔지니어로 가는 첫걸음이라 믿습니다.
다음 ${i+1}번째 글에서도 더 발전된 개발 지식으로 찾아오겠습니다!
    `.trim();

    posts.push({ slug, title, date: dateStr, excerpt, content, tags });
  }
  
  posts.reverse(); // Newest first

  return `export const BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n\nexport function getPostBySlug(slug: string) {\n  return BLOG_POSTS.find((post) => post.slug === slug);\n}\n`;
}

const outputPath = path.join(__dirname, 'src', 'app', 'blog', 'data.ts');
fs.writeFileSync(outputPath, generatePosts(), 'utf-8');
console.log('Successfully generated 50 blog posts!');
