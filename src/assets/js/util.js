import Swal from 'sweetalert2';

const SweetToast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  padding: 10,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const Dialog={
  show:function(content,callback){
    Swal.fire({
      title: content,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '删除'
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }
};

const Toast={
  success:function(content){
    SweetToast.fire({
      icon: 'success',
      title: content
    });
  },
  error:function(content){
    SweetToast.fire({
      icon: 'error',
      title: content
    });
  }
};

export {Toast,Dialog};
