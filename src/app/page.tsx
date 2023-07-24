"use client"

import { students } from "@/data/students";
import { ReactNode } from "react";
import { StudentsTable } from "@/components/StudentsTable";
import { StudentsTableRow } from "@/components/StudentsTableRow";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";

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
            <Button onClick={() => alert("Olá")} label={"Clique aqui"}></Button>
            <Counter></Counter>
        </div>
    );
}

export default Page;