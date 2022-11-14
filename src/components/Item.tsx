import {TrashSimple} from 'phosphor-react'
import styles from './Item.module.css'

interface ItemProps {
    task: string; 
    deleteTask: (task: string) => void;
    id: string;
    
}

export function Item({ task, deleteTask, id }: ItemProps) {
    

    function handleTaskDelete() {
        deleteTask(id)
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