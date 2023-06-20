import Header from './sections/header.jsx'
import Slide from './components/Slide.jsx'
import AboutMe from './sections/aboutme.jsx'
import Service from './sections/service.jsx'
import ContactMe from './sections/contact.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {
  return (
    <>
      <Header/>
      <main className="text-[#333]">
        <Slide/>
        <AboutMe/>
        <Service/>
        <ContactMe/>        
      </main>
      <Footer/>
    </>
  )
}

export default App
