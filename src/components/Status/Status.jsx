import { useContext } from "react";
import { TicketContext } from "../TicketsContext";

const Status = () => {
    const { selectedTicket } = useContext(TicketContext)

    return (
        <div>
            <h4 className="text-2xl font-bold my-5 mt-10">Task Status</h4>
            {
                selectedTicket.length > 0 ?
                    selectedTicket.map(t => <p key={t.id}>{t.title}</p>)
                    : <p>Select a ticket to add to Task Status</p>
            }
        </div>
    );
};

export default Status;