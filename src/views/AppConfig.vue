<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">{{ appInfo.Name }}</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <!-- <ol class="breadcrumb float-sm-right"> -->
            <!--   <li class="breadcrumb-item"><a href="#">Home</a></li> -->
            <!--   <li class="breadcrumb-item active">Dashboard v1</li> -->
            <!-- </ol> -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>

    <div class="row">
      <div class="card" style="width: 18rem;">
	<ul class="list-group list-group-flush">
	  <li class="list-group-item">An item</li>
	  <li class="list-group-item">A second item</li>
	  <li class="list-group-item">A third item</li>
	</ul>
      </div>
      <div class="col">
	<div class="card" v-for="namespace in appNamespaces" :key="namespace">
	  <div class="card-header">
            <h3 class="card-title">{{ namespace.Name }}</h3>
	    <div class="card-tools">
	      <button type="button" class="btn btn-tool" @click="loadNamespace(namespace)"><i class="fas fa-minus"></i></button>
	      <button class="btn btn-primary btn-sm">添加配置</button>
	      <button class="btn btn-danger btn-sm">删除Namespace</button>
	    </div>
	  </div>
	  <!-- /.card-header -->
	  <div v-bind:class="'card-body text-center '+namespace.collapse">
	    <table class="table table-bordered table-sm">
	      <tbody>
		<tr v-for="config in namespace.Configs" :key="config">
		  <td style="width:240px" class="text-right">{{ config.Name }}</td>
		  <td class="text-left">{{ config.Data }}</td>
		  <td >{{ getValidTypeName(config.ValidType) }}</td>
		  <td style="width:150px;">
		    <button class="btn btn-primary btn-sm" type="button" @click="modifyConfig(config)" data-toggle="modal" data-target="#exampleModal">修改</button>
		    <button class="btn btn-danger btn-sm" type="button" @click="deleteConfig(config.Id)">删除</button>
		    
		  </td>
		</tr>
	      </tbody>
	    </table>
	  </div>
	  <!-- /.card-body -->
	</div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
	<div class="modal-content">
	  <div class="modal-header">
            <h5 class="modal-title">修改配置</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
	  </div>
	  <div class="modal-body">
	    <form>
	      <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-right">配置名</label>
                <div class="col-sm-10">
                  <input type="input" class="form-control" id="name" placeholder="配置名" v-model="config.Name">
                </div>
              </div>
	      <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-right">生效方式</label>
                <div class="col-sm-10">
		  <select class="form-select" v-model="config.ValidType">
		    <option v-for="item in validTypes" :key="item" v-bind:value="item.val">{{ item.name }}</option>
		  </select>
                </div>
              </div>
	      <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-right">配置值</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="data" placeholder="配置值" rows="6" v-model="config.Data"></textarea>
                </div>
              </div>
	    </form>
	  </div>
	  <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="modifyConfigSave">保存</button>
	  </div>
	</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/js/api'
import {ValidType} from '../assets/js/enum'

export default{
  name:"AppConfig",
  data(){
    return{
      appInfo:{},
      appNamespaces:{},
      config:{},
      validTypes:ValidType.data
    }
  },
  mounted:function(){
    let appId=this.$route.query.appId
    this.loadAppForId(appId)
    this.loadAppNamespacePaged(appId)
  },
  methods:{
    loadAppForId:function(appId){
      api
	.loadAppForId(appId)
	.then((res)=>{
	  this.appInfo=res.data
	}).catch((err)=>{
	  console.log(err)
	})
    },
    loadAppNamespacePaged:function(appId){
      api
	.loadAppNamespacePaged({
	  pageNumber:1,
	  pageSize:20,
	  appId:appId
	})
	.then((res)=>{
	  this.appNamespaces=res.data.List
	  this.appNamespaces.forEach(e=>{
	    e.collapse='collapse'
	    e.loaded=false
	  })
	})
	.catch((err)=>{
	  console.log(err)
	})
    },
    loadAppConfig:function(){
      
    },
    loadNamespace:function(namespace){
      if(namespace.collapse==''){
	namespace.collapse='collapse'
      }else{
	namespace.collapse=''
      }
      if(namespace.loaded){
	return
      }
      
      api
	.loadAppConfigs({namespaceId:namespace.Id})
	.then(res=>{
	  namespace.loaded=true
	  namespace.Configs=res.data
	}).catch(err=>console.log(err))
    },
    modifyConfig:function(config){
      this.config=config
      this.validTypes.forEach(item=>{
	if(item.val==config.ValidType){
	  item.selected='selected'
	}
      })
    },
    modifyConfigSave:function(){
      this.$swal.fire({
	text:'Hello Vue world!!!',
	toast: true,
	position:'top-center'
      });
      /* api
	 .modifyAppConfig({this.config})
	 .then(res=>{
	 
	 })
	 .catch(err=>{

	 }) */
    },
    getValidTypeName:function(validType){
      return ValidType.getForVal(validType).name
    }
  }
}
</script>
