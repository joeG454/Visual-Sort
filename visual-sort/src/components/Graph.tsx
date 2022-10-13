import { useEffect, useState } from "react";
import Bar from "./classes/Bar";

export default function Graph() {
    var arr: number[] = Array.from({length: 40}, () => Math.floor(Math.random() * 200));


    function bubbleSort(arr : JSX.Element[]) : void {
        for (var i = 0; i < arr.length; i++){
            for (var j=0; j < arr.length; j++) {
                if(arr[j].props.value > arr[j +1].props.value) {
                    sortBars()
                }
            }
        }
    }

    const [bars, sortBars] = useState(
        arr.map((value) => {
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            return (
               <Bar value={value} color={randomColor} />
            )
        })
    );
    
    return (
        <>
            <div className="graph-wrapper">
                <div className="bars">
                    {bars}
                </div>
            </div>
            <button onClick={() => bubbleSort(bars)}>Sort!</button>
        </>
       
    );
}