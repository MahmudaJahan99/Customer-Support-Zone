import { useContext } from "react";
import { TicketContext } from "../TicketsContext";

const TicketCard = ({ ticket }) => {
    const { createdAt, customer, description, id, priority, status, title } = ticket
    const {handleSelectTicket} = useContext(TicketContext)

    const priorityColors = {
        Low: "text-green-500",
        Medium: "text-yellow-500",
        High: "text-red-500",
    }

    return (
        <div onClick={() => handleSelectTicket(ticket)}>
            <div className="card bg-base-100 card-sm shadow-sm">
                <div className="card-body min-h-37.5">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{title}</h2>
                        <span className={`flex items-center gap-1 max-w-fit px-2 py-1 rounded-2xl font-bold ${status === "Open" ? "text-green-600 bg-green-200" : "text-yellow-600 bg-yellow-200"} `}>
                            <div className={`w-3 h-3 rounded-full ${status === "Open" ? "bg-green-600" : "bg-yellow-500"}`}></div>
                            <span>{status}</span>
                        </span>
                    </div>

                    <p>{description}</p>
                    <div className="flex justify-between gap-2 text-gray-500">
                        <div className="flex gap-2 md:gap-5">
                            <span>{id}</span>
                            <span className={`uppercase font-semibold ${priorityColors[priority] || "text-gray-500"}`}>{priority} priority</span>
                        </div>
                        <div className="flex gap-2 md:gap-5">
                            <span>{customer}</span>
                            <span>
                                <i className="fa-regular fa-calendar mr-2"></i>
                                {createdAt.split("T")[0].split("-").join("/")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;