import { useContext } from "react";
import TicketCard from "../TicketCard/TicketCard";
import { TicketContext } from "../TicketsContext";

const Tickets = () => {
    const { allTickets } = useContext(TicketContext)

    return (
        <div>
            <h3 className="text-2xl font-bold my-5 mt-10">Customer Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    allTickets.map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tickets;