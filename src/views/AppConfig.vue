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
      <div class="card">
	<div style="width:320px"></div>
      </div>
      <div class="card">
	<div class="card-header">
          <h3 class="card-title"></h3>
	</div>
	<!-- /.card-header -->
	<div class="card-body text-center">
	</div>
	<!-- /.card-body -->
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/js/api'

export default{
  name:"AppConfig",
  data(){
    return{
      appInfo:{}
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
	console.log(res.data)
      })
      .catch((err)=>{
	console.log(err)
      })
    },
    loadAppConfig:function(){
      
    }
  }
}
</script>
