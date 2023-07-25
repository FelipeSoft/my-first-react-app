import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const FrequentlyAskedQuestionsList = ({ children }: Props) => {
    return (
        <div className="w-82 h-max mt-4 flex justify-start flex-col col-start-1 row-start-2">{children}</div>
    );
}