import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/action";
import {Link} from 'react-router-dom'

export const Todo = ()=>{
    const [text,setText] = useState("");
    const todos = useSelector(store=>store.todos)
    const dispatch = useDispatch()
    const handleChange =(e)=>{
setText(e.target.value);
    }

    const body = {
        title:text,
        status:false
    }
const handleAdd=()=>{
    fetch("http://localhost:8080/todos",{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
    }).then(getdata)

   

}

// console.log("subs", todos);
useEffect(()=>{
    getdata();
},[])

const getdata = async ()=>{
    let res = await fetch("http://localhost:8080/todos");
    let data= await res.json();
     dispatch(
        addTodo(data)
    )
}


    return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
        {todos.map((e)=>(
            <Link to={`/todos/${e.id}`} key={e.id}>
                <div>
                {e.title}</div></Link>
        ))}
    </div>
)

}