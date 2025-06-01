import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import { useState } from "react";
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App = () => {

  const [navHeight, setNavHeight] = useState(0);

  return (
    <main className="bg-black">
      <Navbar onHeightChange={setNavHeight} />
      <Hero navHeight={navHeight} />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
