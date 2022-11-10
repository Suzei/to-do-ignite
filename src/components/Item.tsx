import {TrashSimple} from 'phosphor-react'
import styles from './Item.module.css'

interface ItemProps {
    task: string; 
    deleteTask: (task: string) => void;
}

export function Item({ task, deleteTask }: ItemProps) {
    

    function handleTaskDelete() {
        deleteTask(task)
    }

    return (
        <div className={styles.item}>
            <div>
                <input type="checkbox" className={styles.radio} />
                <span>{task}</span>
            </div>

            <button onClick={handleTaskDelete}>
                <TrashSimple size={23} />
            </button>
        </div>
    )
}