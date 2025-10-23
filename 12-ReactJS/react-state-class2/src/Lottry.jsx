import { useState } from "react"
import "./Lottry.css"
import { genTicket, sum } from "./helper";

export default function Lottry(){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    }
    return(<>
        <h1>Lottry Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div><br />
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "Congratulations, Yow won!"}</h3>
    </>)
}