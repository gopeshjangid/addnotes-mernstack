import {getAll ,createNote ,deleteNote, updateNote,getNote} from  "../services/service.notes";
export const startFetching  = ()=>{
  return dispatch => {
    dispatch({type : "START" , payload : "Fetching..."}); 
    getAll().then(res=>{
        console.log("response" ,res);
        dispatch({type : "FETCH_SUCCESS" ,payload: res.data}); 
      }).catch(e=>{
          console.log("error" ,e)
        dispatch({type : "FAILED" ,payload: e.data}); 
      });
  };
}

  export const startSaving  = (payload)=>{
    return dispatch => {
        dispatch({type : "START" ,payload: "Saving..."}); 
        createNote(payload).then(res=>{
            dispatch({type : "SAVE_SUCCESS" ,payload: res.data}); 
        }).catch(e=>{
            console.log("error" ,e)
            dispatch({type : "FAILED" ,payload: e.data}); 
        });
    }
   
}

  export const success  = (payload)=>{
    return  {type : "SUCCESS" ,payload};
  }

  export const failed  = (payload)=>{
    return  {type : "FAILED" ,payload};
  }

  export const startUpdate  = (data)=>{
    return dispatch => {
        dispatch({type : "START" ,payload: "Updating..."}); 
        updateNote(data).then(res=>{
            dispatch({type : "SAVE_SUCCESS" ,payload: res.data}); 
        }).catch(e=>{
            console.log("error" ,e)
            dispatch({type : "FAILED" ,payload: e.data}); 
        });
    }
  }

  export const startDelete  = (payload)=>{
    return dispatch => {
        dispatch({type : "START" ,payload: "Deleting..."}); 
        deleteNote(payload).then(res=>{
            dispatch({type : "DELETE_SUCCESS" ,payload: res.data}); 
        }).catch(e=>{
            console.log("error" ,e)
            dispatch({type : "FAILED" ,payload: e.data}); 
        });
    }
  }

  export const getNoteDetail  = (id)=>{
    return dispatch => {
        getNote(id).then(res=>{
            console.log("response" ,res);
            dispatch({type : "FETCH_DETAIL_SUCCESS" ,payload: res.data}); 
        }).catch(e=>{
            console.log("error" ,e)
            dispatch({type : "FAILED" ,payload: e.data}); 
        });
    }
  }