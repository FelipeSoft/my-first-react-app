import { ReactNode } from "react"; 

type Props = {
    children: any,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick: () => void
}

export const TaskList = ( { children, onChange, onClick, value }: Props ) => {
    return (
        <div className="w-max h-max">
            <div className="flex items-center justify-center h-8">
                <input onChange={onChange} value={value} type="text" className="h-full outline-none text-black px-2 focus:border-2 focus:border-emerald-600 mr-4"/>
                <button className="bg-emerald-600 text-black h-full px-5 border-2 border-emerald-600" onClick={onClick}>Adicionar</button>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}