import React, { Component } from 'react';
import '../assets/main.css';
import Task from './Task';
import { connect } from 'react-redux';
import { addTaskInputValueHandler,
        addNewTaskObjHandler } from '../redux/action'

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
        const { tasksArr, addTaskInputValue, addTaskInputValueHandler, isVertical, addNewTaskObjHandler} = this.props;
        return (
            <main className='main-area'>
                <h2>Main Board</h2>
                <div className='main-flex' style={isVertical? {flexDirection : "column"} : {flexDirection : "row"}}>
                    {
                        tasksArr.map((task)=> <Task key={task.tasksId} task={task}/>)
                    }
                    
                    <div className={isVertical? 'tasks tasks-column' : 'tasks'}>
                        <form className='add-task-form add-new' onSubmit={(e) => {e.preventDefault(); return addNewTaskObjHandler()}}>
                            <input type='text' placeholder='Add List' value={addTaskInputValue} onChange={addTaskInputValueHandler}/>
                            <button type='submit'><i className='fas fa-plus'></i></button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        tasksArr : state.tasksArr,
        addTaskInputValue : state.addTaskInputValue,
        isVertical : state.isVertical,
    }
}

const mapDispatchToPros = dispatch =>{
    return {
        addTaskInputValueHandler : (e) => dispatch(addTaskInputValueHandler(e)),
        addNewTaskObjHandler : () => dispatch(addNewTaskObjHandler()),
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Main)
