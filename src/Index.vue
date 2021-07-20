<template>
  <div id="app">
    <Navbar></Navbar>
    <LeftSidebar></LeftSidebar>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      
      <!-- <Dashboard></Dashboard> -->
    </div>
    <!-- /.content-wrapper -->
    <Footer></Footer>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import Footer from "./components/Footer.vue";
// import Dashboard from "./views/Dashboard.vue";

export default {
  name: "Index",
  components: {
    Navbar,
    LeftSidebar,
    // Dashboard,
    Footer,
  },
  computed: {},
};
</script>
