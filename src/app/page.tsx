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
import { TaskList } from "@/components/features/TaskList";
import { Task } from "@/components/features/Task";
import { TaskType } from "@/types/TaskType";
import { Linden_Hill } from "next/font/google";

const Page = () => {
    const [ fullName, setFullName ] = useState<Person>({name: "", lastName: ""});
    const [ taskInput, setTaskInput ] = useState<string>("");
    const [ list, setList ] = useState<TaskType[]>([
        {id: 1, title: "Teste", done: false}
    ]);

    const auto_increment = (array: any[]) => {
        if (array.length === 0) {
            return null; 
        }
        
        let max = array[0].id;
        for (let i = 1; i < array.length; i++) {
            if (array[i].id > max) {
                max = array[i].id;
            }
        }
    
        return max;
    }

    const handleClick = () => {
        setFullName({name: "", lastName: ""});  
    }

    const handleAdd = () => {
        if (taskInput.trim() === "") return;

        setList([...list, {id: auto_increment(list) + 1, title: taskInput, done: false}]);
        setTaskInput("");
    }

    const removeItem = (id: number) => {
        setList(list.filter((element => element.id !== id )));
    }

    const toggleItem = (id: number) => {
        let newList = [...list];
        for(let i in newList){
            if(newList[i].id === id){
                newList[i].done = !newList[i].done;
            }
        }

        setList(newList);
    }


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
            <div className="grid grid-cols-2 gap-5 w-full place-items-start justify-items-center">
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
                <TaskList 
                    onChange={(e) => setTaskInput(e.target.value)}
                    onClick={handleAdd} 
                    value={taskInput}
                >
                    <p>Itens na lista: {list.length}</p>
                    {   
                        list.map((element) => {
                            return <Task id={element.id} toggleItem={() => toggleItem(element.id)} key={element.id} onClick={() => removeItem(element.id)} title={element.title} done={element.done}></Task>
                        })
                    }
                </TaskList>
            </div>
        </div>
    );
}

export default Page;
