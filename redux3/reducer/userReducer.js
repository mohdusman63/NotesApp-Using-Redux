const initialState={
    users:[
       
    ]
}
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return {users:[action.payload,...state.users]}
            case 'DEl':
                return state
             default :
            return state
    }

}

export default userReducer