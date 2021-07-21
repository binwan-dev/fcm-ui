import axios from 'axios';

var baseHost = 'http://localhost:8081';

const Api = {
  loadAppPaged: function (param) {
    return axios.get(baseHost + '/app', { params: param });
  },
  loadAppNamespacePaged: function(param){
    return axios.get(baseHost+'/app/namespace',{params:param});
  },
  loadAppConfigs: function(param){
    return axios.get(baseHost+'/app/namespace/config',{params:param});
  },
  loadAppForId: function(appId,param){
    return axios.get(baseHost+'/app/'+appId,{params:param});
  },
  modifyAppConfig:function(param){
    return axios.put(baseHost+'/app/namespace/config',{params:param});
  }
};

export default Api;
