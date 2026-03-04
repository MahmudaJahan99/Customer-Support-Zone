import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tickets from './components/Tickets/Tickets'
import { TicketContext } from './components/TicketsContext'
import Status from './components/Status/Status'
import Resolved from './components/Resolved/Resolved'

/******************** FETCH DATA ********************/
const fetchTickets = async () => {
  const res = await fetch("/mockTickets.json")
  return res.json()
}
const ticketsPromise = fetchTickets()

function App() {
  /******************** STATE MANAGEMENT ********************/
  const [selectedTicket, setSelectedTicket] = useState([])

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(prev  => [...prev, ticket])
    console.log(selectedTicket)
  }
  return (
    <>
      <header>
        <nav className='my-5 shadow-sm'>
          <Header />
        </nav>
        <section>
          <Hero selectedTicket={selectedTicket} />
        </section>
      </header>
      <main className='my-5 grid md:grid-cols-5 gap-3 max-w-350 mx-auto'>
        <TicketContext.Provider value={{ ticketsPromise, selectedTicket, setSelectedTicket, handleSelectTicket, }}>
          <div className='col-span-4'>
            <Suspense fallback={<p>Loading tickets...</p>}>
              <Tickets />
            </Suspense>
          </div>

          <div>
            <Status />
            <Resolved />
          </div>
        </TicketContext.Provider>
      </main>

      <Footer />
    </>
  )
}

export default App
