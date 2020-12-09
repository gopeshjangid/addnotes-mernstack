import axios from 'axios';
import _ from 'lodash';

const baseService = {
  get,
  put,
  post,
  delete : _delete
};

export const methodType = {
  get: 'GET',
  put: 'PUT',
  post: 'POST',
  delete: 'DELETE'
};

//= ==========CRUD Operations abstractions=====================//

/**
 * Description: Use AXIOS GET METHOD
 * @param {string} url
 * @param {object} headers
 * @param {object} body
 * @return {promise}
 */
function get (url, headers) {
  return axios.get(
    url,
    {
      headers: headers
    });
}

/**
 * Description: Use AXIOS PUT METHOD
 * @param {string} url
 * @param {object} headers
 * @param {object} body
 * @return {promise}
 */
function put (url, body,headers) {
  return axios.put(
    url,
    body,
    {
      headers: headers
    });
}

/**
 * Description: Use AXIOS POST METHOD
 * @param {string} url
 * @param {object} headers
 * @param {object} body
 * @return {promise}
 */
function post (url,body,headers) {
  //headers = addAdditionalHeaders(headers);
  return axios.post(
    url,
    body,
    {
      headers: headers
    });
}

function _delete (url,headers) {
  //headers = addAdditionalHeaders(headers);
  return axios.delete(
    url,
    {
      headers: headers
    });
}



export default baseService;
