import {} from  "./actions";
import {getAll} from  "../services/service.notes";
export function notesList(payload) {
    return dispatch => {

        console.log("payload" ,payload);
      //getAll().then
    };
  }


  function addNotes() {
    return dispatch => {
      setTimeout(() => {
        // You can invoke sync or async actions with `dispatch`
        dispatch(increment());
      }, 1000);
    };
  }