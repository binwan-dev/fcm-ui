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
  createAppConfig:function(data){
    return axios.post(baseHost+'/app/namespace/config',data);
  },
  modifyAppConfig:function(data){
    return axios.put(baseHost+'/app/namespace/config',data);
  },
  deleteAppConfig:function(data){
    return axios.delete(baseHost+'/app/namespace/config',{params:data});
  }
};

export default Api;
