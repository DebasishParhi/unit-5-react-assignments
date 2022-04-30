import { ADD_TODO } from "./action";
import {TOGGLE} from "./action"
export const counterReducer = (store,{type , payload})=>{
    switch(type){
        case ADD_TODO:
            return {...store, todos:payload }
        default: return store
    }
    
}