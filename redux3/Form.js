import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

function Form() {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const dispatch=useDispatch()
    const storeUser=(e)=>{
        e.preventDefault()
       dispatch({type:"ADD",payload:{id:uuidv4(),title,content }})
       setTitle('')
       setContent('')
    }
    return (
        <div>
        <form onSubmit={storeUser}>
     <div className="card text-white bg-dark mb-3" >
             <div className="card-header text-center">NOTES APP</div>
             <div className="card-body">
            <div className = "form-group">
              <input type = "text" className = "form-control" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              <div className = "form-group">
              <textarea className = "form-control" rows = "3" placeholder="Enter Text..." value={content}  onChange={(e)=>setContent(e.target.value)}></textarea>
             </div>
           
             <input type="submit" className="btn btn-primary btn-lg btn-block" value="ADD A NOTE"/>
             </div>
             </div>
            

          
        </form>
            
        </div>
    )
}

export default Form
