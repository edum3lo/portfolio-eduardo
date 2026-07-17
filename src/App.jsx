import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-hidden bg-photo-black text-zinc-100 selection:bg-photo-red/40">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ChatWidget />
      </div>
    </MotionConfig>
  )
}

export default App
