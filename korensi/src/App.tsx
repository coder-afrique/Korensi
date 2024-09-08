import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  )
}

export default App
