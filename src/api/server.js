import axios from "axios";
import qs from "qs";
// 封装axios
export function apiAxios(method, url, params={}) {
  const httpDefault = {
    method,
    url,
    params: method === "GET" || method === "DELETE" ? params : null,
    data: method === "POST" || method === "PUT" ? qs.stringify(params) : null,
    timeout: 10000,
  };

  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((res) => {
        resolve(res);
      }).catch((response) => {
        reject(response);
      });
  });
}
