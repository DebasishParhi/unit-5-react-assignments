
export const ADD_TODO = "ADD_TODO"
export const TOGGLE = "TOGGLE"
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
export const tog = {
  type: TOGGLE,
  payload : true
}