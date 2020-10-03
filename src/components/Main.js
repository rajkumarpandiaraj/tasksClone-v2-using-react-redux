import React, { Component } from 'react';
import '../assets/main.css';
import Task from './Task';

export class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isMouseHoverOnItemIcon : false
        }
    }
    mouseHoverHandle =()=>{
        this.setState({
            isMouseHoverOnItemIcon : !this.state.isMouseHoverOnItemIcon
        })
    }
    
    render() {
        const {tasksObj, addTaskInputValue, addTaskInputValueHandler, addNewTaskObjHandler,
            itemInputValueHandler, addItemToItemArrHandler, completedArrItemHandler, isVertical} = this.props
        return (
            <main className='main-area'>
                <h2>Main Board</h2>
                <div className='main-flex' style={isVertical? {flexDirection : "column"} : {flexDirection : "row"}}>
                    {
                        Object.entries(tasksObj).map(([key, value])=> <Task key={key} task={value}
                        itemInputValueHandler={(e)=> itemInputValueHandler(e, value.tasksId)}
                        addItemToItemArrHandler={(e)=> addItemToItemArrHandler(e, value.tasksId)}
                        completedArrItemHandler={completedArrItemHandler} isVertical={isVertical}/> )
                    }
                    
                    <div className={isVertical? 'tasks tasks-column' : 'tasks'}>
                        <form className='add-task-form add-new'>
                            <input type='text' placeholder='Add List' value={addTaskInputValue} onChange={addTaskInputValueHandler}/>
                            <button type='submit' onClick={addNewTaskObjHandler}><i className='fas fa-plus'></i></button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}


export default Main
