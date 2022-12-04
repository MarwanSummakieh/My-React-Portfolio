import React from 'react'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div>
        <>
            <Header/>
            <Navigation/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
            
        </>
    </div>
  )
}

export default App
