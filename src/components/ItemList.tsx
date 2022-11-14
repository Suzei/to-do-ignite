import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Clipboard from '../assets/Clipboard.png'
import { Item } from './Item'
import styles from './ItemList.module.css'

interface TaskProps {
    id: string;
    task: string
}

 
export function ItemList({}: TaskProps) {
  
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [taskName, setTaskName] = useState('')
    const [isComplete, setIsComplete] = useState<boolean>()
    const [n, setN] = useState(0)


    function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value)
    }

    function handleAddTask(event: FormEvent) {
        event.preventDefault()
        const newTask = {
            id: uuidv4(),
            task: taskName,
            isComplete: isComplete
        }
        if (taskName) {
            setTasks((state) => [...state, newTask])        
            
        } 

        setTaskName('')
    }

    function deleteTask(taskToDelete: string) {
        const deleteTask = tasks.filter(({id}) => {
            return id !== taskToDelete
        })
        console.log(deleteTask)

        setTasks(deleteTask)
    }

    return (
        <div className={styles.list}>
            <form className={styles.createTask}>
                <input required type="text" value={taskName} onChange={ handleTaskName } placeholder='Adicione uma nova tarefa' />
                <button onClick={handleAddTask}>Criar <PlusCircle size={ 23 } /></button>
            </form>
            <header>
                <div>
                    <span>Tarefas Criadas</span>
                    <strong>{ tasks.length }</strong>
                </div>

                <div>
                    <span>Tarefas Concluídas</span>
                    <strong>{} de { tasks.length }</strong>
                </div>
            </header>

            <main>
                {!tasks.length ? (
                <>
                    <img src={Clipboard} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                    </>
                ) : 
                ( 
                        
                    tasks.map(item => <Item key={item.id} id={item.id} deleteTask={deleteTask} task={ item.task }/>)            
                )}
            </main>
        </div>
    )
}