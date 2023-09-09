import './App.css'
import Header from "./components/header"
import Navbar from './components/navbar'
import Hero from "./components/hero"
import Side from "./components/side"
import Footer from "./components/footer"

function App() {

  return (
    <>
    <div className='bg-black'>
      <Header />
      <Navbar />
      <div className='lg:flex'>
        <Hero />
        <Side />
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
