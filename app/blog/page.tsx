import Header from "@/components/header";
import Link from "next/link";

interface BlogPost {
   id: string;
   title: string;
   date: string;
   excerpt: string;
   readingTime: string;
}

const blogPosts: BlogPost[] = [
   {
      id: "1",
      title: "web dev blows and i love it",
      date: "2025-01-12",
      excerpt:
         "As a self-taught programmer, figuring out which 'lane' to go through has been challenging.",
      readingTime: "1 min read",
   },
   {
      id: "2",
      title: "golang is cool",
      date: "2025-01-12",
      excerpt: "why golang is for me",
      readingTime: "2 min read",
   },
];

export default function BlogPage() {
   return (
      <>
         <div className="flex flex-col min-h-screen p-8 max-w-2xl mx-auto">
            <Header />
            <main className="flex-grow space-y-12">
               <section className="space-y-4">
                  <h1 className="text-2xl font-bold text-green-400/90">blog</h1>
                  <p className="text-sm text-green-400/70">
                     thoughts on code and other web things
                  </p>
               </section>

               <section className="space-y-6">
                  {blogPosts.map((post) => (
                     <article
                        key={post.id}
                        className="space-y-3 border border-green-400/20 p-4 rounded-lg"
                     >
                        <div className="flex justify-between items-start">
                           <Link
                              href={`/blog/${post.id}`}
                              className="text-lg font-semibold text-green-400/90 hover:text-green-400 transition-colors"
                           >
                              {post.title}
                           </Link>
                           <span className="text-xs text-green-400/50">
                              {post.readingTime}
                           </span>
                        </div>
                        <time
                           dateTime={post.date}
                           className="text-xs text-green-400/50 block"
                        >
                           {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                           })}
                        </time>
                        <p className="text-sm text-green-400/70">
                           {post.excerpt}
                        </p>
                        <div className="pt-2">
                           <Link
                              href={`/blog/${post.id}`}
                              className="text-xs text-orange-400/90 hover:text-orange-300 transition-colors"
                           >
                              read more {"->"}
                           </Link>
                        </div>
                     </article>
                  ))}
               </section>
            </main>
         </div>
      </>
   );
}
