import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
export const TodoDetails = ()=>{
    const { id } = useParams();
    const todos = useSelector(store=>store.todos)
    return(
        <div>
            <div>{todos[id-1].title}</div>
            <div>{todos[id-1].status? "Done":"Not Done"}</div>
        </div>
    )
}