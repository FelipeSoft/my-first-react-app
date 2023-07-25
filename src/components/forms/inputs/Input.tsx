import { ReactEventHandler, SyntheticEvent } from "react"

type Props = {
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, placeholder, onChange, value}: Props) => {
    return (
        <input onChange={onChange} type={type} className="bg-slate-800 py-3 px-6 rounded-lg w-80 mb-4" placeholder={placeholder} value={value}/>
    )
}