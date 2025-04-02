import Die from "./Die"
import React, { useEffect, useRef } from "react";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"


export default function App() {
    const[ diceValues, setDice] = React.useState(()=>retNewArr());
    let allHeld = diceValues.isHeld.every(held => held === true);
    let allEqual = diceValues.arr.every(val => val === diceValues.arr[0]);
    const gameWon = allHeld && allEqual;

    const btn = React.useRef(null);

    useEffect(()=>
    {
        btn.current.focus()
    }, [gameWon])

    function retNewArr(){
        console.log("newArr fn called")
        const arr =new Array(10).fill(0).map(() =>Math.ceil(Math.random() * 6))
        const isHeld = new Array(10).fill(false)
        const id = new Array(10).fill(0).map(() => nanoid())

        return {arr, isHeld,id};
    }

    
    

    if (gameWon) {
        console.log("Game Won");
    }


    function onRoll(){
        setDice(prev=>
        ({
            
            arr: prev.arr.map((val, ind) =>
                prev.isHeld[ind] ? val : Math.ceil(Math.random() * 6) // Roll only unheld dice
            ),
            isHeld: [...prev.isHeld], // Preserve hold state
            id:[...prev.id]
        })
        )
    }

    function toggleHeld(ind){
        setDice(prev=>
            {
            const held = [...prev.isHeld];
            held[ind] = !held[ind];
            return({
                arr:prev.arr,
                isHeld:held,
                id:[...prev.id]
            })
        })
    }
    function win() {
        setDice(prev=>({
            arr: new Array(10).fill(99),  // Set all dice to 6 (or any fixed value)
            isHeld: new Array(10).fill(true),  // Mark all dice as held
            id: [...prev.id] // Generate new IDs
        }));
    }
    
    return (
    <main>
        {gameWon && <Confetti/>}
        <div className="dice-container">
            {diceValues.arr.map((val, ind) => {
                // console.log(diceValues.id[ind]);
                
                return <Die
                    toggleHold={()=>toggleHeld(ind)} 
                    isHeld={diceValues.isHeld[ind]} 
                    key={diceValues.id[ind]} 
                    value={val} />;  // Return JSX properly
            })}
        </div>
        <button ref={btn} className="dice-button" onClick={() => gameWon ? setDice(retNewArr()) : onRoll()} name="Roll">
            {gameWon ? "New Game" : "Roll"}
        </button>

        <button className="dice-button" onClick={win} name="Win">
            Win
        </button>
    </main>
    )
}