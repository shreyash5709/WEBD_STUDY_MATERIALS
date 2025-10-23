import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottry({n=3, winningSum=15}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(<>
        <h1>Lottry Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "Congratulations, Yow won!"}</h3>
    </>)
}