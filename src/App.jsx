import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tickets from './components/Tickets/Tickets'
import { TicketContext } from './components/TicketsContext'

const fetchTickets = async () => {
  const res = await fetch("/mockTickets.json")
  return res.json()
}

const ticketsPromise = fetchTickets()

function App() {
  return (
    <>
      <header>
        <nav className='my-5 shadow-sm'>
          <Header />
        </nav>
        <section>
          <Hero />
        </section>
      </header>

      <main className='my-5'>
        <TicketContext.Provider value={{ ticketsPromise }}>
          <Suspense fallback={<p>Loading tickets...</p>}>
            <Tickets />
          </Suspense>

        </TicketContext.Provider>
      </main>

      <Footer />
    </>
  )
}

export default App
