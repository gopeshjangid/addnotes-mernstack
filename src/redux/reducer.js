

const initialState = {
    list : [],
    loading : false,
    msg: "",
    status : "",
    detail : null
}


export default  (state = initialState , payload)=>{
    let {type} = payload;
    switch (type) {
        case "START":
            return {
                ...state,
                loading : true,
                status : "START",
                msg : payload.payload
            }
            break;
            case "FAILED":
                return {
                    ...state,
                    loading : false,
                    status : "FAILED",
                    msg : payload.payload
                }
            case "FETCH_SUCCESS":
                return {
                    ...state,
                    loading : false,
                    status : "FETCH_SUCCESS",
                    msg : "",
                    list : payload.payload
                }
                break;
            case "FETCH_DETAIL_SUCCESS":
                return {
                    ...state,
                    loading : false,
                    status : "FETCH_DETAIL_SUCCESS",
                    msg : "",
                    detail : payload.payload
                }
                break;    
            break;
            case "SAVE_SUCCESS":
                return {
                    ...state,
                    loading : false,
                    status : "SAVE_SUCCESS",
                    msg : "",
                }
            case "DELETE_SUCCESS":
                return {
                    ...state,
                    loading : false,
                    status : "DELETE_SUCCESS",
                    msg : ""
                }    
            break;

        default:
            return state;
            break;
    }
}