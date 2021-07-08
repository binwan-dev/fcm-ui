import axios from 'axios'

var baseHost = 'http://localhost:8081'

const Api = {
    loadProject: function (param) {
        return axios.get(baseHost + '/app', { params: param })
    }
}

export default Api
