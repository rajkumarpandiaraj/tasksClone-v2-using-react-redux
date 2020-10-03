import { MODAL_HANDLE,
        MAIN_ORIENTATION_HANDLE,
        ADD_TASK_INPUT_VALUE_HANDLER,
        ADD_NEW_TASK_OBJ_HANDLER,
        ITEM_INPUT_VALUE_HANDLER,
        ADD_ITEM_TO_ITEM_ARR_HANDLER, COMPLETED_ARR_ITEM_HANDLER} from './actionType';

//modal open and close actionCreator
export const modalHandle = () =>{
    return {
        type : MODAL_HANDLE
    }
}

//change th direction of the main component
export const orientationHandle = () =>{
    return {
        type : MAIN_ORIENTATION_HANDLE
    }
}

//wait for the change in add task Input value
export const addTaskInputValueHandler = (e) =>{
    return {
        type : ADD_TASK_INPUT_VALUE_HANDLER,
        payload : e.target.value
    }
}

//add new task obj to tasksArr
    export const addNewTaskObjHandler = () =>{
        return {
            type : ADD_NEW_TASK_OBJ_HANDLER
        }
    }

//change the value of the item input
    export const itemInputValueHandler = (e,id) =>{
        return{
            type : ITEM_INPUT_VALUE_HANDLER,
            payload : {
                value : e.target.value,
                id : id 
            }
        }
    }

//add item to the item arr
export const addItemToItemArrHandler = (id) =>{
    return{
        type : ADD_ITEM_TO_ITEM_ARR_HANDLER,
        payload : {id}
    }
}

//add the itr to the completedarr
export const completedArrItemHandler = (tasksId, itemId) =>{
    return{
        type : COMPLETED_ARR_ITEM_HANDLER,
        payload : {tasksId, itemId}
    }
}