<template>
  <div>
    <!-- Default box -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">项目列表</h3>

        <div class="card-tools">
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i class="fas fa-minus"></i>
          </button>
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="remove"
            title="Remove"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body p-0">
        <table class="table table-striped projects">
          <tbody>
            <tr v-for="project in projects" :key="project">
              <td>
                <a class="btn" @click="openDetail(project)">{{
                  project.Name
                }}</a>
              </td>
              <td>
                <small>{{ project.CreateTime }}</small>
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
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script>
import api from "../assets/js/api";

export default {
  name: "Project",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    loadProjectList: function () {
      api
        .loadProject({ pageNumber: 1, pageSize: 20 })
        .then((res) => {
          this.projects = res.data.List;
        })
        .catch((err) => {
          alert(err);
        });
    },
    openDetail: function (project) {
      alert(project.Id);
    },
  },
};
</script>
