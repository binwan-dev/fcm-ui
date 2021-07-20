<template>
  <div>
      <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">项目</h1>
          </div>
          <div class="col-sm-6">
          </div>
        </div>
      </div>
    </div>
    <!-- /.content-header -->
    <section class="content">
      <table class="table table-striped apps">
          <tbody>
            <tr v-for="app in apps" :key="app">
              <td>
                <a class="btn" @click="openDetail(app)">{{
                  app.Name
                }}</a>
              </td>
              <td>
                <small>{{ date(app.CreateAt) }}</small>
              </td>
            </tr>
            <!-- <tr> -->
            <!--   <td> -->
            <!--     <a>项目1</a> -->
            <!--   </td> -->
            <!--         <td class="project_progress"> -->
            <!--             <div class="progress progress-sm"> -->
            <!--                 <div class="progress-bar bg-green" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" st  yle="width: 77%"> -->
            <!--                 </div> -->
            <!--             </div> -->
            <!--             <small> -->
            <!--                 77% Complete -->
            <!--             </small> -->
            <!--         </td> -->
            <!--         <td class="project-actions text-right">Created 01.01.2019</td> -->
            <!--     </tr> -->
            <!--     <tr> -->
            <!--         <td> -->
            <!--             <a> -->
            <!--                 AdminLTE v3 -->
            <!--             </a> -->
            <!--         </td> -->
            <!--         <td class="project_progress"> -->
            <!--             <div class="progress progress-sm"> -->
            <!--                 <div class="progress-bar bg-green" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%"> -->
            <!--                 </div> -->
            <!--             </div> -->
            <!--             <small> -->
            <!--                 77% Complete -->
            <!--             </small> -->
            <!--         </td> -->
            <!--         <td class="project-actions text-right">Created 01.01.2019</td> -->
            <!--     </tr> -->
          </tbody>
      </table>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import api from "../assets/js/api";

export default {
  name: "App",
  data() {
    return {
      apps: [],
    };
  },
  mounted: function(){
    this.loadAppPaged()
  },
  methods: {
    loadAppPaged: function () {
      api
        .loadAppPaged({ pageNumber: 1, pageSize: 20 })
        .then((res) => {
          this.apps = res.data.List;
        })
        .catch((err) => {
          alert(err);
        });
    },
    openDetail: function (app) {
      this.$router.push('/app/config?appId='+app.Id)
    },
    date:function(timestamp){
      var date = new Date(parseInt(timestamp)*1000);
      return date.toLocaleString().replace(/:\d{1,2}$/,' ');
    }
  },
};
</script>
