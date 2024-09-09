import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        {/* Add other main content components here */}
      </main>
      <FooterSection />
    </div>
  )
}

export default App
