type Props = {
    id: number,
    title: string,
    done: boolean,
    onClick: () => void,
    toggleItem: () => void
}

export const Task = ({ id, title, done, onClick, toggleItem }: Props) => {
    return(
        <div className="flex items-center mb-4">
            <input type="checkbox" className="w-6 h-6 mr-4" checked={done} onChange={toggleItem}/><p className="pl-2 w-full flex justify-between items-center bg-white h-8 text-black">{title} <button className="bg-red-500 h-full px-5 text-white" onClick={onClick}>Deletar</button></p>
        </div>
    );
}