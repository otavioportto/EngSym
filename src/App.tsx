import {AboutProject} from './components/AboutProject';
import {Hero} from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Resources } from './components/Resources';

function App() {
  return (
    <main>
      <Hero />
      <AboutProject/>
      <Features/>
      <Resources/>
      <HowItWorks/>
      <Footer/>
      
    </main>
  )
}

export default App