new Vue({
    el:"#app",
    data:{
        user:{
            id:"",
            username:"",
            password:"",
            email:"",
            age:"",
            sex:""
        },
        userList:[]
    },
    methods:{
      findAll:function () {
          //在当前方法中定义一个变量，表明是vue对象
          var _this = this;
          axios.get('/Vue_Day01_VueJSDemo/user/findAll.do')
              .then(function (response) {
                  _this.userList = response.data;//响应数据给userList赋值
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              })
      },
      findById:function (userId) {
          //在当前方法中定义一个变量，表明是vue对象
          var _this = this;
          axios.get('/Vue_Day01_VueJSDemo/user/findById.do',{params:{id:userId}})
              .then(function (response) {
                  _this.user = response.data;//响应数据给userList赋值
                  $("#myModal").modal("show");
              })
              .catch(function (error) {
                  console.log(error);
              })
      },
      update:function (user) { //post请求
          var _this = this;
          axios.post('/Vue_Day01_VueJSDemo/user/updateUser.do', _this.user)
              .then(function (response) {
                  _this.findAll();
              })
              .catch(function (error) {
                  console.log(error);
              });
      }

    },
    created(){  //当我们页面加载的时候，触发请求，查询所有
        this.findAll();
}
});