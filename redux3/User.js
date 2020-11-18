import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function User() {
    const {users}=useSelector(abc=>abc)
    console.log(users)
    return (
        <>
           {
            users?users.map(element=>(
                <React.Fragment key={element.id}>
                    <div className="col-md-2" >
                    <div className="card" >
                   <div className="card-body bg-dark">
                 <h5 className="card-title">{element.title}</h5>
                 <h6 className="card-subtitle mb-2 text-muted">{element.content}</h6>
             </div>
               </div>
             </div>
                 

                 </React.Fragment>
                  )):' '
           }
        </>
    )
}

export default User
