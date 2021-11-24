import { createStore } from "redux";
import { combineReducers } from "redux";


export const CURRENT_USER='currentUser';
export const TARGET_USER='targetUser';
export const GET_USERS='getUsers';
export const CLEARE_USERS='cleare_users';

const initialUsersState=[];


const getUsersReducer=(state=initialUsersState,action)=>{

    if (action.type===GET_USERS){
        return state.concat(action.data)
    }
    if (action.type===CLEARE_USERS){
            return []
    }
    return state;
  
}



const rootReducer=combineReducers({getUsersState:getUsersReducer})

const store=createStore(rootReducer);


export default store;