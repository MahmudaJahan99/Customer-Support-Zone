import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tickets from './components/Tickets/Tickets'
import { TicketContext } from './components/TicketsContext'
import Status from './components/Status/Status'
import Resolved from './components/Resolved/Resolved'
import { ToastContainer } from 'react-toastify'

function App() {
  /******************** STATE MANAGEMENT ********************/
  const [allTickets, setAllTickets] = useState([])
  const [selectedTicket, setSelectedTicket] = useState([])
  const [resolvedTicket, setResolvedTicket] = useState([])

  /******************** FETCH DATA ********************/
  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/mockTickets.json")
      const data = await res.json()
      setAllTickets(data)
    }
    fetchTickets()
  }, [])

  /******************** HANDLE CARD CLICK ********************/
  const handleSelectTicket = (ticket) => {
    setSelectedTicket(prev => [...prev, ticket])
  }

  const handleCompleteBtn = (ticket) => {
    setResolvedTicket(prev => [...prev, ticket])
    const selectedListUpdate = selectedTicket.filter(t => t.id !== ticket.id)
    setSelectedTicket(selectedListUpdate)
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
        <TicketContext.Provider value={{ allTickets, selectedTicket, handleSelectTicket, resolvedTicket, handleCompleteBtn }}>
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
