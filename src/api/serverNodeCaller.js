import * as configUrl from "../assets/config/config-url"
const axios = require('axios');


export default function(endpoint, method = 'GET', body) {
    axios({
        url: `${configUrl.NODE_SERVER_URL}/${endpoint}`,
        method: method,
        data: body
    }).catch(err => {
        console.log(err)
    })
}