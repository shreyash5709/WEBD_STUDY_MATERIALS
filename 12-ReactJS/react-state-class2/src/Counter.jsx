import { useEffect, useState } from "react"

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    let incCountx = () => {
        setCountx((currCount) => currCount+1);
    }
    let incCounty = () => {
        setCounty((currCount) => currCount+1);
    }

    useEffect(
        function sideEffect(){
            console.log("This is sideeffect of useState");
        },
        [countx]
    )
    return(<>
        <h1>Countx = {countx}</h1>
        <button onClick={incCountx}>+1</button>
        <h1>County = {county}</h1>
        <button onClick={incCounty}>+1</button>
    </>)
}