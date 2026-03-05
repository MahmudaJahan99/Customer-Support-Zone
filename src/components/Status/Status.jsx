import { useContext } from "react";
import { TicketContext } from "../TicketsContext";

const Status = () => {
    const { selectedTicket, handleResolvedTicket } = useContext(TicketContext)

    return (
        <div>
            <h4 className="text-2xl font-bold my-5 mt-10">Task Status</h4>
            {
                selectedTicket.length > 0 ?
                    selectedTicket.map(t => <div key={t.id} className="card card-border bg-base-100">
                        <div className="card-body">
                            <h5 className="card-title">{t.title}</h5>
                            <div className="card-actions">
                                <button onClick={() => handleResolvedTicket(t)} className="btn bg-green-600 text-white w-full">Complete</button>
                            </div>
                        </div>
                    </div>)
                    : <p>Select a ticket to add to Task Status</p>
            }
        </div>
    );
};

export default Status;