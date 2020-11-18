import React from 'react';
import {Provider} from 'react-redux'
import Form from './redux3/Form';
import store from './redux3/reducer/store'
import User from './redux3/User';


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  return(
    <Provider store={store}>
    
        <div className="col-md-8   m-auto" >
        <Form/>
         </div>
         <div className="row col-md-8  m-auto">
        <User/>
        </div>

    </Provider>
    
  
  )
}
export default App