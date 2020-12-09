import { API_INTERFACE } from '../constants/uri.constant';
import Method from './services';
//import { AppStorageHelper } from '../shared/utils/appStorageHelper';



/**
 * service to create a user.
 * @param {*} values
 */
function createNote (params) {
  const headers = { 'Content-Type': 'application/json'};
  return Method.post(API_INTERFACE.BASE_URL, params,headers);
}
function updateNote (params) {
  console.log("params id data" ,params)
  const headers = { 'Content-Type': 'application/json'};
  return Method.put(API_INTERFACE.BASE_URL+"/"+params.id,params, {headers : headers});
}

function getAll (params) {
  const headers = { 'Content-Type': 'application/json'};
  return Method.get(API_INTERFACE.BASE_URL, headers);
}

function getNote (params) {
  const headers = { 'Content-Type': 'application/json'};
  return Method.get(API_INTERFACE.BASE_URL+"/"+params, headers);
}

function deleteNote (id) {
  const headers = { 'Content-Type': 'application/json'};
  return Method.delete(API_INTERFACE.BASE_URL+"/"+id, headers);
}

export  {
  createNote,
  getAll,
  deleteNote,
  updateNote,
  getNote
};
