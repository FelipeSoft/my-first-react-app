import { FAQ } from "@/types/FAQ";
import { useState } from "react";
import { Answer } from "./Answer";

export const FrequentlyAskedQuestion = ({ question, answer }: FAQ) => {
    const [show, setShow] = useState<boolean>(false);
    return(
        <>
            <div className="w-64 h-max text-black flex items-center flex-col">
                <div className="bg-white flex items-center h-max w-full justify-between">
                    <p className="px-2 text-center">{question}</p>
                    <div onClick={() => setShow(!show)}
                    className="cursor-pointer bg-blue-600 h-8 w-8 text-white flex items-center justify-center text-2xl p-2">
                    {show === false ? "+" : "-"}    
                    </div>
                </div>
                {show === true && 
                    <Answer text={answer} marginY="my-1"></Answer>
                }
            </div>
        </>
    );
}