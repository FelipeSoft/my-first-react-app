"use client"

import { students } from "@/data/students";
import { frequentlyAskedQuestions } from "@/data/frequentlyAskedQuestions";
import { ReactNode } from "react";
import { StudentsTable } from "@/components/table/StudentsTable";
import { StudentsTableRow } from "@/components/table/StudentsTableRow";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { FrequentlyAskedQuestionsList } from "@/components/faq/FrequentlyAskedQuestionsList";
import { FrequentlyAskedQuestion } from "@/components/faq/FrequentlyAskedQuestion";

const Page = () => {
    const studentsArray: ReactNode[] = [];
    students.map(element => {
        studentsArray.push(
        <StudentsTableRow 
            id={element.id} 
            name={element.name} 
            photo={element.photo} 
            email={element.email} 
            status={element.status} 
            g1={element.g1} 
            g2={element.g2} 
        />
        );
    });

    const faqArray: ReactNode[] = [];
    frequentlyAskedQuestions.map(element => {
        faqArray.push(
            <FrequentlyAskedQuestion 
                question={element.question}
                answer={element.answer} 
            />    
        );
    });

    return (
        <div className="container mx-auto flex flex-col justify-start">
            <StudentsTable students={students}>
                {studentsArray}
            </StudentsTable>
            <Button onClick={() => alert("Olá")} label={"Clique aqui"}></Button>
            <Counter></Counter>
            <FrequentlyAskedQuestionsList>
                {faqArray}
            </FrequentlyAskedQuestionsList>
        </div>
    );
}

export default Page;