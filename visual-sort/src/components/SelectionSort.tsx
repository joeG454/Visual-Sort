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

    const selectionSort = async(arr : JSX.Element[], delay: number) => {
        let n = arr.length;
        
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(arr[j].props.value < arr[min].props.value) {
                    min=j; 
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;   
                swapBars([...arr]);
                await timer(delay);   
            }
        }
    }
    
    return (
        <>
            <div className="w-100 mx-auto text-center margin-top-3">
                <h3>Selection Sort</h3>
            </div>
            <div className="graph-wrapper">
                <div className="bars">
                    {bars}
                </div>
            </div>
            <div className="w-100 mx-auto text-center margin-top-3">
                <button onClick={() => {selectionSort(bars, 30)}}>Sort!</button>
            </div>
            
        </>
       
    );
}