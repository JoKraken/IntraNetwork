import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  console.log(method, path, data);
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        console.log("I am resolved response", res);
        return resolve(res.data);
      })
      .catch(err => {
        console.log(" I am rejected response", err);
        // return reject(err.response.data.error);
        return reject(err);
      });
  });
}
