import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Clipboard from '../assets/Clipboard.png'
import { Item } from './Item'
import styles from './ItemList.module.css'

interface TaskProps {
    uuid: string;
    task?: string
}

interface ItemListProps {
    isChecked?: boolean;
}
 
export function ItemList({}: ItemListProps) {
  
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    const [counterfinishedTask, setCounterFinishedTask] = useState(0)
    const [isChecked, setIsChecked] = useState<boolean>()
    function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function handleTaskFinished() {
        setIsChecked(true)

        if (isChecked) {
            setCounterFinishedTask((state) => state + 1)
        }
    }

    function handleAddTask(event: FormEvent) {
        event.preventDefault()
        if (newTask) {
            setTasks((state) => [...state, newTask])        
            
        } 

        setNewTask('')
    }

    function deleteTask(taskToDelete: string) {
        const deleteTask = tasks.filter((task: string) => {
            return task !== taskToDelete
        })

        setTasks(deleteTask)
    }

    return (
        <div className={styles.list}>
            <form className={styles.createTask}>
                <input required type="text" value={newTask} onChange={ handleTaskName } placeholder='Adicione uma nova tarefa' />
                <button onClick={handleAddTask}>Criar <PlusCircle size={ 23 } /></button>
            </form>
            <header>
                <div>
                    <span>Tarefas Criadas</span>
                    <strong>{ tasks.length }</strong>
                </div>

                <div>
                    <span>Tarefas Concluídas</span>
                    <strong>{counterfinishedTask} de { tasks.length }</strong>
                </div>
            </header>

            <main>
                {!tasks.length ? (
                <>
                    <img src={Clipboard} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </>
                ) : (                           
                    tasks.map(item => <Item key={uuidv4()} deleteTask={deleteTask} task={ item } />)            
                )}
            </main>
        </div>
    )
}