import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => { setCount(count + 1) }
    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div className="bg-white w-max flex items-center justify-evenly p-2 rounded mt-4">
            <div onClick={handleDecrement} className="flex cursor-pointer items-center justify-center p-4 w-10 h-10 bg-red-800 text-white rounded">-</div>
            <div className="text-black mx-4 text-2xl">{count}</div>
            <div onClick={handleIncrement} className="flex cursor-pointer items-center justify-center p-4 w-10 h-10 bg-red-800 text-white rounded">+</div>
        </div>
    );
}