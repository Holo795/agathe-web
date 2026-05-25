import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Espaces from './components/Espaces.jsx'
import Rituel from './components/Rituel.jsx'
import Service from './components/Service.jsx'
import Strategy from './components/Strategy.jsx'
import Sensoriel from './components/Sensoriel.jsx'
import Promesse from './components/Promesse.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Espaces />
      <Rituel />
      <Service />
      <Strategy />
      <Sensoriel />
      <Promesse />
      <Footer />
    </>
  )
}
