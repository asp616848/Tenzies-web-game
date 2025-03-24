import Die from "./Die"
import React from "react";

export default function App() {
    const[ diceValues, setDice] = React.useState(new Array(10).fill(0).map(() =>
        Math.ceil(Math.random() * 6)
    ));
    let a = 1;
    return (
    <main>
        <div className="dice-container">
            {diceValues.map((val, ind) => {
                console.log(val, ind);  // Log values correctly
                return <Die key={ind} value={val} />;  // Return JSX properly
            })}
        </div>
        <button name="Roll">
            Roll
        </button>
    </main>
    )
}