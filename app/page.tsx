import avi from './avi.png'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen p-8 max-w-3xl mx-auto">
      <Header />
      <main className="flex-grow space-y-12">
        <section className="space-y-2">
          <img src={avi.src} alt="avi" className="w-16 h-16 rounded-full" />
          <h1 className="text-2xl text-green-400/90">tino</h1>
          <div className="space-y-1 text-sm">
            <p>building with typescript & nextjs</p>
            <p className="text-red-400/90">● coding right now</p>
            <p className="max-w-md">
              self taught programmer trying a whole lot of things.
              trying typescript and nextjs for now.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl">current projects</h2>
          <a href="https://tinodev.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h3 className="text-red-400/90 mt-4 underline">ToDo.dev</h3></a>
            <p className="text-sm max-w-md">
              typescript-powered todo app with a blog built with vite, react, vercel, tailwind, and supabase
            </p>
          
        <section className="space-y-4">
          <h3 className="text-red-400/90 mt-4 underline">Personal Website</h3>
          <p className="text-sm max-w-md">
            personal website built with nextjs/typescript
          </p>
        
        <section className="space-y-4">
          <h3 className="text-red-400/90 mt-4 underline">unnamed Golang terminal project</h3>
          <p className="text-sm max-w-md">
            terminal project built with golang
          </p>
        </section>
        </section>
        </section>
      </main>
       </div>
    </>
  )
}

