import { FAQ } from "@/types/FAQ";
import { useState } from "react";

export const FrequentlyAskedQuestion = ({ question, answer }: FAQ) => {
    const [show, setShow] = useState<boolean>(false);
    return(
        <>
            <div className="w-64 h-max bg-white text-black flex items-center flex-col">
                <div className="flex items-center h-max w-full justify-between">
                    <p className="px-2 text-center">{question}</p>
                    <div onClick={() => 
                        {show === true ? setShow(false) : setShow(true)}}
                    className="cursor-pointer bg-blue-600 h-8 w-8 text-white flex items-center justify-center text-2xl p-2">
                    {show === true ? "+" : "-"}    
                    </div>
                </div>
                {show === true && 
                <div className="bg-gray-700 text-white whitespace-wrap text-ellipsis w-full px-2 h-max">
                    {answer} 😁
                </div>
                }
            </div>
        </>
    );
}