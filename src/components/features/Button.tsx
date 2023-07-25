type Props = {
    label: string,
    backgroundColor: string,
    onClick: () => void
}

export const Button = ({ label, backgroundColor, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`${backgroundColor} py-3 px-6 rounded-lg w-40`} value={""}>{label}</button>
    );
}