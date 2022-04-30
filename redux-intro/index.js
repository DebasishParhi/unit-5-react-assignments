import { legacy_createStore as createStore} from "redux";
const ADD_TODO = "ADD_TODO"
const reducer = (store,action)=>{
    if(action.type===ADD_TODO)
    {
        return { ...store, todos: [...store.todos, action.payload] };
    }
    return store;
}

const initState = {
    todos:[]
}

const store = createStore(reducer, initState);
store.dispatch({
    type: ADD_TODO,
    payload: { todo: "learn vue", status: "false" },
  });
  console.log("after", store.getState());

  