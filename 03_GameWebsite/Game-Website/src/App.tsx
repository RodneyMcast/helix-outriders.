import './styles.css'

// Components
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import GameDescription from './components/Game Description/game'
import Pvpve from './components/PVPVE/pvpve'
import SignupSection from './components/Form/SignupSection'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <GameDescription />
      <Reviews />
      <Pvpve />
      <SignupSection />
      <Footer />
    </>
  )
}
