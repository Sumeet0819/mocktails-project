import React from 'react'
import Navbar from './components/Navbar'
import gsap, { ScrollTrigger , SplitText} from 'gsap/all'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
  </main>
  )
}

export default App
