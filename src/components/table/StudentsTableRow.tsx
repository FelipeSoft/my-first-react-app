import { Student } from "@/types/Student";

export const StudentsTableRow = ({ id, name, photo, email, status, g1, g2 }: Student) => {
    return (
        <tr className="border-b-2 border-black">
            <td className="bg-gray-400 text-black py-2">
                <div className="pl-2 flex items-center gap-2">
                    <img src={photo} alt="Foto" className="w-12 h-12 rounded-full object-cover object-top"/>
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <p>{email}</p>
                    </div>
                </div>
            </td>
            <td className="bg-gray-400 text-black py-2">
                <p className={
                    status === true 
                    ? `bg-lime-600 text-white max-w-max rounded-md p-1.5 text-xs`
                    : `bg-red-600 text-white max-w-max rounded-md p-1.5 text-xs`
                }>
                    {status === true ? "Active" : "Inactive"}
                </p>
            </td>
            <td className="bg-gray-400 text-black py-2">{g1}</td>
            <td className="bg-gray-400 text-black py-2">{g2}</td>
            <td className="bg-gray-400 text-black py-2 font-bold">
                {status === true && ((g1 + g2) / 2).toFixed(2)}
                {status === false && "--"}
            </td>
        </tr>    
    );
}