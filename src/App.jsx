import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <header>
        <nav className='mb-5 shadow-sm'>
          <Header />
        </nav>
        <section>
          <Hero />
        </section>
      </header>

    </>
  )
}

export default App
