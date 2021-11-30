import { createStore } from "redux";
import { combineReducers } from "redux";


export const CURRENT_USER='currentUser';
export const TARGET_USER='targetUser';
export const GET_USERS='getUsers';
export const CLEARE_USERS='cleare_users';
export const ALL_MESSAGES='all_messages';
export const SET_CHOOSEN_ID='setChoosenId';
export const MEMBERS='members';
export const CLEARE_MESSAGES='cleareMessages'

const initialUsersState=[];
const initilMessageState=[];

const initialRoomState={
    currentUserId:'',
    choosenId:''
};





const getUsersReducer=(state=initialUsersState,action)=>{

    if (action.type===GET_USERS){
        return state.concat(action.data)
    }
    if (action.type===CLEARE_USERS){
            return []
    }
    
    return state;
  
}

const roomReducer=(state=initialRoomState,action)=>{
    if (action.type===CURRENT_USER){
        console.log(action.data)
        return {currentUserId:action.data,choosenId:state.choosenId}
    }
    if(action.type===SET_CHOOSEN_ID){
        return {currentUserId:state.currentUserId,choosenId:action.data}
    }
    return state
}

const messagesReducer=(state=initilMessageState,action)=>{
    if(action.type===ALL_MESSAGES){
        return state.concat(action.data)
    }
    if(action.type===CLEARE_MESSAGES){
        return []
    }

    return state;
}

const  membersReducer=(state=[],action)=>{
if(action.type===MEMBERS){
    return action.data
}
return state
}

const rootReducer=combineReducers({getUsersState:getUsersReducer,roomState:roomReducer,messageState:messagesReducer,membersState:membersReducer})

const store=createStore(rootReducer);


export default store;