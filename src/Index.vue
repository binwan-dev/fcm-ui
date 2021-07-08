<template>
  <div id="#app">
    <Navbar></Navbar>
    <LeftSidebar></LeftSidebar>
     <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <Dashboard></Dashboard>
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
import Navbar from './components/Navbar.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import Footer from './components/Footer.vue'  
import Dashboard from './pages/Dashboard.vue'

export default {
  name: 'Index',
  components: {
Navbar,LeftSidebar,Dashboard,Footer
  }
}
</script>
