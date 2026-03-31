import { getPostBySlug, BLOG_POSTS } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

// Generate static params for all known posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Very basic simulated markdown rendering for this assignment.
  // In a real project, we'd use a markdown parser like next-mdx-remote or react-markdown.
  const createMarkup = (html: string) => {
    // Simple replacements for demo purposes
    let converted = html;
    // Handle basics like headers
    converted = converted.replace(/## (.*?)\n/g, "<h2>$1</h2>\n");
    // Handle inline code
    converted = converted.replace(/\`(.*?)\`/g, "<code>$1</code>");
    // Paragraphs
    const paragraphs = converted.split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => {
        if (!p.startsWith('<h2')) {
          return `<p>${p.replace(/\n/g, '<br/>')}</p>`;
        }
        return p;
      });
      
    return { __html: paragraphs.join('') };
  };

  return (
    <article className={styles.article}>
      <Link href="/blog" className={styles.backLink}>
        &larr; Back to Blog
      </Link>
      
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time>{post.date}</time>
        </div>
        <div className={styles.tags}>
          {post.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </header>

      <div 
        className={styles.content}
        dangerouslySetInnerHTML={createMarkup(post.content)} 
      />
    </article>
  );
}
