"use client"

import { StudentsTable } from "@/components/StudentsTable";
import { StudentsTableRow } from "@/components/StudentsTableRow";
import { students } from "@/data/students";
import { ReactNode } from "react";

const Page = () => {
    const studentsArray: ReactNode[] = [];
    students.map(element => {
        studentsArray.push(<StudentsTableRow 
            id={element.id} 
            name={element.name} 
            photo={element.photo} 
            email={element.email} 
            status={element.status} 
            g1={element.g1} 
            g2={element.g2} 
        />)
    })
    
    return (
        <div className="container mx-auto">
            <StudentsTable students={students}>
                {studentsArray}
            </StudentsTable>
        </div>
    );
}

export default Page;