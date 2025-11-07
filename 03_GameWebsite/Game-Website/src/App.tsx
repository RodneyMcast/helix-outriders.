import './styles.css'

// Components
// import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import PlatformRow from './components/PlatformRow/PlatformRow'
import SignupSection from './components/SignupSection/SignupSection'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <PlatformRow />
      <SignupSection />
      <Reviews />
      <Footer />
    </>
  )
}
