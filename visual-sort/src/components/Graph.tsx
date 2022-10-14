import { useEffect, useState } from "react";
import Bar from "./classes/Bar";

export default function Graph() {
    var unsortedArr: number[] = Array.from({length: 20}, () => Math.floor(Math.random() * 200));
    
    var [bars, swapBars] = useState(
        unsortedArr.map((value) => {
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            return (
               <Bar value={value} color={randomColor} />
            )
        })
    );

    // Returns a promise that resolves after given delay
    const timer = (delay: number) => {
        return new Promise((resolve) => setTimeout(resolve, delay));
    }

    const bubbleSort = async(arr : JSX.Element[], delay: number) => {
        let len = arr.length;
        let checked;
        do {
            checked = false;
            for (let i = 0; i < len - 1; i++) {
                if (arr[i].props.value > arr[i + 1].props.value) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    checked = true;
                    swapBars([...arr]);
                    await timer(delay);
                }
            }
        } while (checked);
    }
    
    return (
        <>
            <div className="graph-wrapper">
                <div className="bars">
                    {bars}
                </div>
            </div>
            <button onClick={() => {bubbleSort(bars, 30)}}>Sort!</button>
        </>
       
    );
}