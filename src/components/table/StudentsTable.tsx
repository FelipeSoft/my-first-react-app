import { Student } from "@/types/Student";
import { ReactNode } from "react";

type Props = {
    students: Student[],
    children: ReactNode
}

export const StudentsTable = ({ students, children }: Props) => {
    return (
        <table className="w-full mb-4">
            <thead className="bg-slate-800">
                <tr>
                    <td className="py-2 pl-2">Name</td>
                    <td className="py-2">Status</td>
                    <td className="py-2">Grade 1</td>
                    <td className="py-2">Grade 2</td>
                    <td className="py-2">Final Grade</td>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}