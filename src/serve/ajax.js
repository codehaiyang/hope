import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') { 
    let promise;
    return new Promise((resolve, reject) => {
        if (type.toUpperCase() === 'GET') {
            let paramsStr = ''
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&'
            })

            if(paramsStr){
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'))
                if(url.indexOf('127.0.0.1') === -1) {
                    url += '?' + paramsStr + '&Geek-James' + randomCode(20)
                } else {
                    url += '?' + paramsStr
                }
            } else {
                if (url.indexOf('127.0.0.1') === -1) {
                    url += '?Geek-James' + randomCode(20)
                }
            }
            promise = axios.get(url)
        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url,params)
        }
        promise.then((response) => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    }) 
 }

 /*生成指定长度的随机数*/
function randomCode(length) {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = "";
    for (let i = 0; i < length; i++) {
        let index = Math.ceil(Math.random() * 9);
        result += chars[index];
    }
    return result;
}