import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});

    let updateBlue = () => {
        moves.blue += 1;
        setMoves({...moves});
    }
    let updateYellow = () => {
        setMoves({...moves, yellow: moves.yellow + 1});
    }
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1}
        });
    }

    return(
        <div>
            <p>Game begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}