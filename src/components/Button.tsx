type Props = {
    label: string,
    onClick: () => void
}

export const Button = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="bg-slate-800 py-3 px-6 rounded-lg">{label}</button>
    );
}