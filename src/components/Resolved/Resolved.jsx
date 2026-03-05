import { useContext } from "react";
import { TicketContext } from "../TicketsContext";

const Resolved = () => {
    const { resolvedTicket } = useContext(TicketContext)

    return (
        <div>
            <h4 className="text-2xl font-bold my-5 mt-10">Resolved Task</h4>
            {
                resolvedTicket.length > 0 ?
                    resolvedTicket.map(t => <div key={t.id} className="card card-border bg-base-100">
                        <div className="card-body">
                            <h5 className="card-title">{t.title}</h5>
                        </div>
                    </div>)
                    : <p>No resolved tasks yet</p>
            }
        </div>
    );
};

export default Resolved;