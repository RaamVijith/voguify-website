import ScrollAnimationComponent from "./components/branding/Brandings"
import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/NavBar/NavBar"
import Services from "./components/services/Services"
import TrendingProducts from "./components/trendingProducts/TrendingProducts"

function App() {

  return (
    <div className="bg-[#f4f1ef]">
      <Navbar/>
      <HeroSection/>
      <ScrollAnimationComponent/>
      <TrendingProducts/>
      <Services/>
    </div>
  )
}

export default App
