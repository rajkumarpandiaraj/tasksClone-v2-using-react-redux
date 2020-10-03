import React from 'react';
import '../assets/main.css'

function Task(props) {
    const {task, itemInputValueHandler, addItemToItemArrHandler, completedArrItemHandler, isVertical} = props
    const mouseEnterHandle = (e) =>{
        e.target.classList = 'fas fa-check';

    }
    const mouseLeaveHandle = (e) =>{
        e.target.classList = 'far fa-circle';
    }

    const completedTaskShowHandle = (e) =>{
        
        if(e.target.classList.contains('completed-task-heading')){
            if(e.target.nextSibling.classList.contains('show')){
                e.target.nextSibling.classList = 'completed-tasks-list'
            } else {
                e.target.nextSibling.classList = 'completed-tasks-list show'
            }
        }else{
            if(e.target.parentElement.nextSibling.classList.contains('show')){
                e.target.parentElement.nextSibling.classList = 'completed-tasks-list'
            } else {
                e.target.parentElement.nextSibling.classList = 'completed-tasks-list show'
            }
        }
    }
    return (
        <div className={isVertical? 'tasks tasks-column' : 'tasks'}>
                        <div className='tasks-title'>
                            <h3>{task.title}</h3>
                            <i className='fas fa-ellipsis-v'></i>
                        </div>
                        <form className='add-task-form'>
                            <input type='text' placeholder='Add Task' value={task.item.itemInputValue} onChange={itemInputValueHandler}/>
                            <button type='submit' onClick={addItemToItemArrHandler}><i className='fas fa-plus'></i></button>
                        </form>
                        <ul className='tasks-list'>
                            {
                                task.items.map(taskItem => (
                                    <li className='task-item' key={taskItem.itemId}>
                                        <i onClick={()=> completedArrItemHandler(task.tasksId, taskItem.itemId)} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className= 'far fa-circle'></i>
                                <span className='task'>{taskItem.itemInputValue}</span>
                                <i className='fas fa-edit'></i>
                            </li>
                                ))
                            }
                            
                        </ul>
                        {
                            task.completedArr.length > 0 && (
                                <>
                                <div className='completed-task-heading' onClick={completedTaskShowHandle}>
                                        <h3>Completed{`(${task.completedArr.length})`}</h3>
                                        <i className='fas fa-chevron-down'></i>
                                        </div>
                                <ul className='completed-tasks-list'>
                                    {
                                        task.completedArr.map(item =>(
                                            <li className='completed-task-item' key={item.itemId}>
                                                <i className='fas fa-check'></i>
                                                <span className='completed-task'>{item.itemInputValue}</span>
                                                <i className='fas fa-trash-alt'></i>

                                            </li>
                                        ))
                                    }

                                </ul>
                                </>
                            )
                        }
                    </div>
    )
}

export default Task
