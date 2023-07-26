import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    action?: string
}

export const FullNameForm = ({ children, action }: Props) => {
    return (
        <form action={action} onSubmit={e => e.preventDefault()} className="flex flex-col">
            {children}
        </form>
    );
}