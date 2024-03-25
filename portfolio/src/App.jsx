import './App.css'
import TopBar from './components/TopBar'
import SectionTop from './components/SectionTop'
import Projects from './components/Projects'
import Feature from './components/Feature'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'
function App() {
  const [shouldFocusProjects, setShouldFocusProjects] = useState(false);

  const handleButtonClick = () => {
    setShouldFocusProjects(!shouldFocusProjects);
   
  };

  return (
    <>
    <TopBar />
    <SectionTop onfocusProjec={handleButtonClick}/>
    <Projects shouldFocus={shouldFocusProjects}/>
    <Feature/>
    <Contact/>
    <Footer></Footer>
    </>
  )
}

export default App
