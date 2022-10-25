import { useEffect, useState } from "react";
import Bar from "./classes/Bar";

export default function Graph() {
    var unsortedArr: number[] = Array.from({length: 40}, () => Math.floor(Math.random() * 200));
    
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

    const insertionSort = async(arr : JSX.Element[], delay: number) => {
        let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current.props.value < arr[j].props.value)) {
                arr[j+1] = arr[j];
                swapBars([...arr]);
                await timer(delay); 
                j--;
            }
            arr[j+1] = current;
        }
    }
    
    return (
        <>
            <div className="w-100 mx-auto text-center margin-top-3">
                <h3>Insertion Sort</h3>
            </div>
            <div className="graph-wrapper">
                <div className="bars">
                    {bars}
                </div>
            </div>
            <div className="w-100 mx-auto text-center margin-top-3">
                <button onClick={() => {insertionSort(bars, 30)}}>Sort!</button>
            </div>
            
        </>
       
    );
}