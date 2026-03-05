import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tickets from './components/Tickets/Tickets'
import { TicketContext } from './components/TicketsContext'
import Status from './components/Status/Status'
import Resolved from './components/Resolved/Resolved'
import { ToastContainer } from 'react-toastify'

/******************** FETCH DATA ********************/
const fetchTickets = async () => {
  const res = await fetch("/mockTickets.json")
  return res.json()
}
const ticketsPromise = fetchTickets()

function App() {
  /******************** STATE MANAGEMENT ********************/
  const [selectedTicket, setSelectedTicket] = useState([])
  const [resolvedTicket, setResolvedTicket] = useState([])

  /******************** HANDLE CARD CLICK ********************/
  const handleSelectTicket = (ticket) => {
    setSelectedTicket(prev => [...prev, ticket])
  }

  const handleResolvedTicket = (ticket) => {
    setResolvedTicket(prev => [...prev, ticket])
  }

  return (
    <>
      <header>
        <nav className='my-5 shadow-sm'>
          <Header />
        </nav>
        <section>
          <Hero selectedTicket={selectedTicket} resolvedTicket={resolvedTicket} />
        </section>
      </header>

      <main className='my-5 grid md:grid-cols-5 gap-3 max-w-350 mx-auto'>
        <TicketContext.Provider value={{ ticketsPromise, selectedTicket, handleSelectTicket, resolvedTicket, handleResolvedTicket }}>
          <div className='md:col-span-4'>
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

      <footer>
        <Footer />
      </footer>
      
      <ToastContainer />
    </>
  )
}

export default App
