import React from 'react'
import Navbar from './components/Navbar'
import gsap, { ScrollTrigger , SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
    <Navbar/>
  </main>
  )
}

export default App
