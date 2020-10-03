import React, { Component } from 'react'
import Nav from './Nav';
import Navmodal from './Navmodal';
import Main from './Main';
import { v4 as uuidv4 } from 'uuid';

export class Googletasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isModalOpened : false,
            isVertical : false,
            tasksObj : {
                myTask : {
                    title : 'My Tasks',
                    tasksId : uuidv4(),
                    item : {
                        itemInputValue : '',
                        itemId : uuidv4()
                    },
                    items : [],
                    completedArr : [],
                }
            },
            addTaskInputValue : '',
        }
        
    }
    addTaskInputValueHandler = (e)=>{
        this.setState({
            addTaskInputValue : e.target.value,
        })
    }
    addNewTaskObjHandler = (e) =>{
        e.preventDefault()
        this.setState({
            tasksObj : {
                ...this.state.tasksObj,
                [this.state.addTaskInputValue] : {
                    title : this.state.addTaskInputValue,
                    tasksId : uuidv4(),
                    item : {
                        itemInputValue : '',
                        itemId : uuidv4()
                    },
                    items : [],
                    completedArr : [],
                }
            },
            addTaskInputValue : ''
        }, ()=>{console.log(this.state)})
    
    }
    handleModalOpen = ()=>{
        this.setState({
            isModalOpened : !this.state.isModalOpened,
        })
    }
    itemInputValueHandler = (e, id) =>{
        const selectedObjKey = Object.entries(this.state.tasksObj).map(([key, value]) => {
            if(value.tasksId === id){
                return key
            }
        })
        const selectArr = selectedObjKey.filter(obj => obj !== undefined)
        const select = selectArr[0]
        const selectedObj = this.state.tasksObj[select]
        this.setState({
            tasksObj : {
                ...this.state.tasksObj,
                [select] : {
                    ...selectedObj,
                    item : {
                        itemId : uuidv4(),
                        itemInputValue : e.target.value,
                    }
                    
                }
            }
        })

    }
    addItemToItemArrHandler = (e, id) =>{
        e.preventDefault();
        const selectedObjKey = Object.entries(this.state.tasksObj).map(([key, value]) => {
            if(value.tasksId === id){
                return key
            }
        })
        const selectArr = selectedObjKey.filter(obj => obj !== undefined)
        const select = selectArr[0]
        const selectedObj = this.state.tasksObj[select]
        this.setState({
            tasksObj : {
                ...this.state.tasksObj,
                [select] : {
                    ...selectedObj,
                    items : [...selectedObj.items, selectedObj.item],
                    item : {
                        ...selectedObj.item,
                        itemInputValue : ''
                    }
                    
                }
            }
        }, ()=> console.log(this.state))

    }

    completedArrItemHandler = (taskId, itemId)=>{
        const selectedObjKey = Object.entries(this.state.tasksObj).map(([key, value]) => {
            if(value.tasksId === taskId){
                return key
            }
        })
        const selectArr = selectedObjKey.filter(obj => obj !== undefined)
        const select = selectArr[0]
        const selectedObj = this.state.tasksObj[select]
        const completedItem = selectedObj.items.filter(item => item.itemId ===  itemId )
        selectedObj.items.forEach((item, index) => {
                if(item.itemId ===  itemId){
                    console.log('crt');
                    console.log(item);
                    selectedObj.items.splice(index,1);
                }
        });
        console.log(completedItem);
        this.setState({
            tasksObj : {
                ...this.state.tasksObj,
                [select] : {
                    ...selectedObj,
                    completedArr : [...selectedObj.completedArr, completedItem[0]]
                    
                }
            }
        }, ()=> console.log(this.state))

    }

    orientationHandle = ()=>{
        this.setState({
            isVertical : !this.state.isVertical
        })
    }
    
    render() {
        return (
            <div>
                <Nav handleModalOpen={this.handleModalOpen} isModalOpened={this.state.isModalOpened} orientationHandle={this.orientationHandle} />
                <Navmodal isModalOpened={this.state.isModalOpened} />
                <Main tasksObj={this.state.tasksObj} addTaskInputValue={this.state.addTaskInputValue}
                        addTaskInputValueHandler={this.addTaskInputValueHandler}
                        addNewTaskObjHandler={this.addNewTaskObjHandler}
                        itemInputValueHandler={this.itemInputValueHandler}
                        addItemToItemArrHandler={this.addItemToItemArrHandler}
                        completedArrItemHandler={this.completedArrItemHandler}
                        isVertical={this.state.isVertical}/>
                
            </div>
        )
    }
}

export default Googletasks
