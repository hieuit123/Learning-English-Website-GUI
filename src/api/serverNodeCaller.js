import * as configUrl from "../assets/config/config-url"
const axios = require('axios');


export default async function (endpoint, method = 'GET', body) {
    axios({
        url: `${configUrl.NODE_SERVER_URL}/${endpoint}`,
        method: method,
        data: JSON.stringify(body)
    }).catch(err => {
        console.log(err)
    })
}
