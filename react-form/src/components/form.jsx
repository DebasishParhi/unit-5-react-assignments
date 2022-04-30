
import { useState } from "react"


export const FormData = () => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        age: "",
        address: "",
        salary: "",
        marital: ""
    })

    const formchange = (e) => {       
        const { id, value } = e.target
        setFormInfo({
            ...formInfo,
            [id]: value
    })
        
    }

    const submitdata = async (e) => {
        e.preventDefault()
       
       
            try{

                let res = await fetch("http://localhost:3006/users", {
                    method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formInfo)
                })
                let data = await res.json()
               console.log("Userdetails:",data) 
             
            }
            catch(err){
                console.log(err)
            }

              
     
    }

    return (
        <div>
        <form >
            <input type="text" onChange={formchange} placeholder="Enter text" id="username" />
            <input type="number" onChange={formchange} placeholder="Enter age" id="age" />
            <input type="text" onChange={formchange} placeholder="Enter address" id="address" />
            <select  onChange={formchange} id="department">
                <option value="s">Select...</option>
                <option value="bank">Bank</option>
                <option value="finance">Finance</option>
                <option value="clerk">clerk</option>
            </select>
            
            <input type="number" onChange={formchange} placeholder="Enter salary" id="salary" />
            <input type="checkbox" value="true" onChange={formchange} name="" id="marital" />
            <input type="submit" onClick={submitdata} value="submit" />
        </form>
      
       
        </div>


    )
}

