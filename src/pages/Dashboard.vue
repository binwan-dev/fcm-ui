<template>
  <div>
      <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">项目</h1>
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
    <!-- /.content-header -->
    <section class="content">
      <Project ref='project'></Project>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
  import Project from '../components/Project.vue'

  export default{
      name: 'Dashboard',
      components: {
          Project
      },
      mounted(){
          this.$refs['project'].loadProjectList()
      }
  }
</script>
