import{ ADD_ITEM_TO_ITEM_ARR_HANDLER, MODAL_HANDLE } from './actionType';
import {MAIN_ORIENTATION_HANDLE,
        ADD_TASK_INPUT_VALUE_HANDLER,
        ADD_NEW_TASK_OBJ_HANDLER,
        ITEM_INPUT_VALUE_HANDLER,
        COMPLETED_ARR_ITEM_HANDLER} from './actionType';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    isModalOpened : false,
    isVertical : false,
    tasksArr : [{
                title : 'My Tasks',
                tasksId : uuidv4(),
                item : {
                    itemInputValue : '',
                    itemId : uuidv4()
                },
                items : [],
                completedArr : [],
            }],
    addTaskInputValue : '',
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action;

//opens and closes the modal menu
    if(type === MODAL_HANDLE){
        return {...state, isModalOpened : !state.isModalOpened}
    }

//change the orientation of the main component
    if(type === MAIN_ORIENTATION_HANDLE){
        return {...state, isVertical : !state.isVertical}
    }

//changes the add task input value
    if(type === ADD_TASK_INPUT_VALUE_HANDLER){
        return {...state, addTaskInputValue : payload}
    }

//adds new tasksObj to tasksArr
    if(type === ADD_NEW_TASK_OBJ_HANDLER){
        return{
            ...state,
            tasksArr : [
                ...state.tasksArr,
                {
                    title : state.addTaskInputValue,
                    tasksId : uuidv4(),
                    item : {
                        itemInputValue : '',
                        itemId : uuidv4()
                    },
                    items : [],
                    completedArr : [],
                }
            ],
            addTaskInputValue : '',
        }
    }

//changes the value of the item input value
    if(type === ITEM_INPUT_VALUE_HANDLER){
        const tempTasksArr = state.tasksArr.map(task => {
            if(task.tasksId === payload.id){
                return{
                    ...task,
                    item :{
                        itemId : uuidv4(),
                        itemInputValue : payload.value,
                    }

                }
            }
            return task
        })
        return {...state, tasksArr : [...tempTasksArr]}
    }

// add item to the items arr
    if(type === ADD_ITEM_TO_ITEM_ARR_HANDLER){
        const tempTasks = state.tasksArr.map(task =>{
            if(task.tasksId === payload.id){
                return{
                    ...task,
                    items : [...task.items, task.item],
                    item : {
                        itemInputValue : '',
                        itemId : uuidv4(),
                    }
                }
            }

            return task
        })

        return{...state, tasksArr : [...tempTasks] }
    }

    if(type === COMPLETED_ARR_ITEM_HANDLER){
        const temp = state.tasksArr.map(task =>{
            if(task.tasksId === payload.tasksId){
                const tempItems = task.items.filter(item => item.itemId !== payload.itemId);
                const tempCompletedItem = task.items.filter(item => item.itemId === payload.itemId)
                return{
                    ...task,
                    items : [...tempItems],
                    completedArr : [...task.completedArr, ...tempCompletedItem]
                }
            }
            return task
        })

        return {...state, tasksArr : [...temp]}
    }
    return state;
}

export default reducer;


