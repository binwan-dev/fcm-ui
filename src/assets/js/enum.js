const ValidType={
  realtime: 1,
  nextRun: 2,
  delay: 3,
  data:[
    {
      name:'实时',
      key:'realtime',
      val:1
    },{
      name:'重启',
      key:'realtime',
      val:2
    }
  ],
  getForVal:function(val){
    for(var i=0;i<ValidType.data.length;i++){
      if(ValidType.data[i].val==val){
        return ValidType.data[i];
      }
    }
  }
};

export {
  ValidType
};
