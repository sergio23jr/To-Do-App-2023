import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({toDo, markDone, setUpdatedData, deleteTask }) => {
    return(
        <div>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map( (task, index) => {
                return(
                <React.Fragment key ={task.id}>
                <div className='col taskBackground'>
                    <div className={task.status ? 'done taskContainer' : 'taskContainer'}>
                    <span className='taskNumber'>{index + 1}</span>
                    <span className='taskText'>{task.title}</span>
                    </div>
                    
                    <div className='iconWraps'>
                    {task.status ? null : (
                        <span title='Edit'
                        onClick={ () => setUpdatedData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false
                        })}>
                        <FontAwesomeIcon icon={faPen}/>
                        </span>
                    )}
        
                    <span
                        onClick={(e) => markDone(task.id)}
                        title={task.status ? 'Completed' : 'Not completed'}>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                    </span>
        
                    <span 
                    title='Delete'
                    onClick={() => deleteTask(task.id)}
                    >
                    <FontAwesomeIcon icon={faTrashCan}/>
                    </span>
                    </div>
                </div>
        
                </React.Fragment>
                )
            })}
        </div>
    )
}

export default ToDo;