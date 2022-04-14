// import Vue from 'vue'
// import axios from 'axios'



/*
// isto possibilita que possamos acessar o axios de forma global na aplicação
Vue.use({
    install(Vue) {
        

        Vue.prototype.$http = axios.create({
            baseURL: 'http://172.19.0.2:5005/webhooks/rest/webhook/',
            //baseURL: 'http://172.19.0.2:5005/webhooks/restinput/webhook/',
            headers: {
                // "Authorization": "teste"
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                // 'Access-Control-Allow-Methods': 'GET, POST',
                // 'Access-Control-Allow-Headers': 'Content-Type',
                // 'Access-Control-Allow-Credentials': true
            },
            proxy: 'http://172.19.0.2/'

        })

        // Vue.prototype.$http.interceptors.request.use(config => {
        //     console.log("config: ", config)
        //     return config
        // }, error => Promise.reject(error))

        // Vue.prototype.$http.interceptors.response.use(res => {
        //     // const array_t = []
        //     // for(let chave in res.data) {
        //     //     array_t.push({ id: chave, ...res.data[chave] })
        //     // }

        //     // res.data = array_t

        //     console.log("Resposta: ", res)
        //     return res
        // }, error => Promise.reject(error))
    }
})
*/