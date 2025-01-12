import Header from '@/components/header'
import { notFound } from 'next/navigation'

interface BlogPost {
   id: string
   title: string
   content: string
   date: string
}

const blogPosts: Record<string, BlogPost> = {
   '1': {
      id: '1',
      title: 'web dev blows and i love it',
      content: `As a self-taught programmer, figuring out which 'lane' to go
        through has been challenging. Trying not to play with the new
        shiny language or
        <a
          href="https://www.youtube.com/watch?v=EEUiPjLY1c0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 underline"
        >
          framework
        </a>
        isn't easy, and I've hopped around a bit more than I'd like to
        admit. From Golang, to Python, to Javascript(typescript as
        well yuck), to even Rust(yeah i know). Seeing all of the
        discussion and arguments in the community around all of the
        options, I've come to the conclusion that web dev sucks. But i
        would be lying if i said i wasn't having fun.
        <br />
        I spent a few weeks poking at Golang as my first "real" coding
        experience. Thanks to the great resource
        <a
          href="https://github.com/practical-tutorials/project-based-learning"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400"
        >
          Project-Based-Learning
        </a>
        , I was able to follow along with a few projects and learn the
        basics. But i wanted to challenge myself to do something i
        felt was out of my depth. I decided to build my first
        interactive website. I started with a
        <a
          href="https://tino-sv.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400"
        >
          questionaire page
        </a>
        , that used most of the basic form options as different
        question styles. It was built with vanilla html, javascript,
        and css. It was the hardest thing at that point as i basically
        went in blind. I knew HTML and CSS, but i had no idea how to
        add the javascript to make it functional.
        <br />
         Day by day, i would learn more and more about javascript, and
        i began to understand why the language was seen as both a
        joke, and essential to understand. But, i wanted to learn
        more. This is where I began my journey into React. I started
        with a todo app (as we all do). AI and tutorials were my
        guide. Attempting to understand all of the modern and new
        concepts needed for the project, and what I wanted to achieve
        was difficult, but I was able to do it.
        <br />
        It's been frustrating, but engaging. Of course, I still have
        much to learn, but web dev has shown me that, ultimately, most
        languages and frameworks <strong>suck</strong> according to
        someone. So, pick whatever you want, stick with it, and have
        fun.`,
      date: '2025-01-12'
   }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
   const blogPost = blogPosts[params.slug]
   if (!blogPost) {
      notFound()
   }

   return (
      <>
         <div className="min-h-screen p-8 max-w-2xl mx-auto">
            <Header />
            <h1 className="text-2xl font-bold text-green-400/90">{blogPost.title}</h1>
            <time dateTime={blogPost.date} className="text-xs text-green-400/50 block">{blogPost.date}</time>
            <br />
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className="prose prose-green" />
      </div>
      </>
   )
}
