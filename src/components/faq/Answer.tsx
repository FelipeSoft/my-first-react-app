type Props = {
    text: string,
    marginY: string
}

export const Answer = ({ text, marginY }: Props) => {
    return (
        <div className={`bg-gray-700 text-white whitespace-wrap text-ellipsis w-full px-2 h-max transition-all ${marginY}`}>
            {text} 😁
        </div>
    )
}