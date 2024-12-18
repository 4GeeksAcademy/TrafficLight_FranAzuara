import React, {useState} from "react";

const TrafficLigth = () => {

    const [color, setColor] = useState("red");

    return(
            <div className="semaforo bg-dark rounded p-3">
                <div className={'bg-danger p-5 mb-3 rounded-circle opacity-75' + (color === "red" ? " opacity-100" : "")} onClick={() => setColor("red")}>
                </div>
                <div className={'bg-warning p-5 mb-3 rounded-circle opacity-75' + (color === "yellow" ? " opacity-100" : "")} onClick={() => setColor("yellow")}>
                </div>
                <div className={'bg-success p-5 rounded-circle opacity-75' + (color === "green" ? " opacity-100" : "")} onClick={() => setColor("green")}>
                </div>
            </div>
    )
}
export default TrafficLigth;