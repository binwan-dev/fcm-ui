import axios from 'axios';

var baseHost = 'http://localhost:8081';

const Api = {
  loadAppPaged: function (param) {
    return axios.get(baseHost + '/app', { params: param });
  },
  loadAppNamespacePaged: function(param){
    return axios.get(baseHost+'/app/namespace',{params:param});
  },
  loadAppConfigPaged: function(param){
    return axios.get(baseHost+'/app/config',{params:param});
  },
  loadAppForId: function(appId,param){
    return axios.get(baseHost+'/app/'+appId,{params:param});
  }
};

export default Api;
