const initialState = {
    userName:'',
    customerName:'',
    password:''
}
export const reducer = (state = initialState, action)=>{

    switch(action.type){
        case 'ADD_DETAIL':
            return{
                 ...state,
                 [action.payload.key]:action.payload.value
            }
        default:
            return state
            
    }

}