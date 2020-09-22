import axios from 'axios';
export function fetchGet(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(`/api${url}`, {
        params: data
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}