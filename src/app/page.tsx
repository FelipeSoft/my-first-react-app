"use client"

import { students } from "@/data/students";
import { frequentlyAskedQuestions } from "@/data/frequentlyAskedQuestions";
import { ReactNode, useState } from "react";
import { StudentsTable } from "@/components/table/StudentsTable";
import { StudentsTableRow } from "@/components/table/StudentsTableRow";
import { Button } from "@/components/features/Button";
import { Counter } from "@/components/features/Counter";
import { FrequentlyAskedQuestionsList } from "@/components/faq/FrequentlyAskedQuestionsList";
import { FrequentlyAskedQuestion } from "@/components/faq/FrequentlyAskedQuestion";
import { FullNameForm } from "@/components/forms/FullNameForm";
import { Input } from "@/components/forms/inputs/Input";
import { Person } from "@/types/Person";

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

    const [fullName, setFullName] = useState<Person>({name: "", lastName: ""});
    const handleClick = () => {
        setFullName({name: "", lastName: ""});
    }

    return (
        <div className="container mx-auto flex flex-col justify-start">
            <StudentsTable students={students}>
                {studentsArray}
            </StudentsTable>
            <div className="grid grid-cols-4 gap-5 w-full place-items-center">
                <div className="flex items-center justify-center flex-col gap-4">
                    <Button onClick={() => alert("Olá")} label={"Clique aqui"} backgroundColor="bg-slate-800"></Button>
                    <Counter></Counter>
                </div>
                <FullNameForm>
                    <p className="mb-4">O seu nome completo é: <br />{fullName.name} {fullName.lastName}</p>
                    <Input onChange={e => setFullName({ ...fullName, name: e.target.value })} type={"text"} placeholder="Nome" value={fullName.name}></Input>
                    <Input onChange={e => setFullName({ ...fullName, lastName: e.target.value })} type={"text"} placeholder="Sobrenome" value={fullName.lastName}></Input>
                    <Button onClick={handleClick} label={"Limpar"} backgroundColor="bg-red-800"></Button>
                </FullNameForm>
                <FrequentlyAskedQuestionsList>
                    {faqArray}
                </FrequentlyAskedQuestionsList>
            </div>
        </div>
    );
}

export default Page;
