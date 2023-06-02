<template>
  <div :style="background" class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <br><br><br><br>
    <form>
      <span class="login" id="logintxt">登録</span>
      <br><br>
      <span class="txt">ユーザー名前：</span>
      <input class="text" type="text" v-model="username" ref="usernameinput">
      <br>
      <span class="error" id="usernameerror" ref="usernameerrorinput">{{usernameerror}}</span>
      <br><br>
      <span class="txt">パスワード：</span>
      <input class="text" type="password" v-model="password" ref="passwordinput" id="passwordinput">
      <br>
      <span class="error" id="passworderror" ref="passworderrorinput">{{passworderror}}</span>
      <br><br>
      <div class="admindiv">
        <input type="radio" name="permission" class="admin" value="系统管理员" v-model="admin" ref="radio">管理者
      </div>
      <div class="admindiv">
        <input type="radio" name="permission" class="admin" value="宿舍管理员" v-model="admin">一般ユーザー
      </div>
      <br><br>
      <button class="login" type="button" @click="loginButton" ref="button1" id="button1">登録</button>
      <button class="login" type="button" @click="resetButton" ref="button2" id="button2">リセット</button>
    </form>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import {loginsystem} from "@/api/post";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  created() {
    this.$nextTick(()=>{
      // console.log(this.$refs.usernameinput.getBoundingClientRect().left)
      // console.log(this.$refs.passwordinput.getBoundingClientRect().left)
      // console.log(this.$refs.radio.getBoundingClientRect().left)
      // console.log(this.$refs.button1.getBoundingClientRect().left)
      // console.log(this.$refs.button2.getBoundingClientRect().left)
      // this.$refs.button1.style.left = this.$refs.usernameinput.getBoundingClientRect().left+'px'
    })
  },
  data(){
    return{
      background:{
        backgroundImage:'url('+require('../views/background2.jpg')+')',
        backgroundSize:'20%'
      },
      username:'',
      password:'',
      admin:'',
      usernameerror:'',
      passworderror:''
    }
  },
  methods:{
    loginButton (){
      if (this.username.trim().length > 10){
        alert('用户名大于10个字符')
        return
      }
      if (this.username.trim()==''){
        alert('请输入用户名')
        return
      }
      if (this.password.trim()==''){
        alert('请输入密码')
        return
      }
      if (this.admin==''){
        alert('请选择用户类型')
        return;
      }
      loginsystem(this.username,this.password,this.admin).then(res =>{
        let relate = res.data[0]
        // console.log(relate)
        if(relate == null){
          alert('账号或者密码错误！')
        }else {
          alert('登录成功')
          //进入申请一览画面
          this.$router.push({
            path:'/applier'
          })
        }
      })
    },
    resetButton(){
      this.username=''
      this.password=''
      this.admin=''
    }
  },
  watch:{
    username(newValue){
      // this.username = newValue.replace(/[^A-Za-z0-9]/g,'')
      if (newValue.trim().length > 10 && this.usernameerror.includes('账号大于10个字符')==false){
        this.usernameerror += '账号大于10个字符'
      }else if(newValue.trim().length <= 10){
        this.usernameerror = this.usernameerror.replace('账号大于10个字符','')
      }
      if (/[^A-Za-z0-9\u4E00-\u9FA5]/g.test(newValue.trim())&& this.usernameerror.includes('账号只允许汉字，数字，英文')==false ){
        this.usernameerror += '账号只允许汉字，数字，英文'
      }else if (/[^A-Za-z0-9\u4E00-\u9FA5]/g.test(newValue.trim())==false){
        this.usernameerror = this.usernameerror.replace('账号只允许汉字，数字，英文','')
      }
      this.$refs.usernameerrorinput.style.left = this.$refs.usernameinput.getBoundingClientRect().left+'px'
      if(this.usernameerror!=''){
        this.$refs.usernameinput.style.borderColor = 'red'
      }else {
        this.$refs.usernameinput.style.borderColor = 'black'
      }
    },
    password(newValue){
      // this.username = newValue.replace(/[^A-Za-z0-9]/g,'')
      if (newValue.trim().length > 10 && this.passworderror.includes('密码大于10个字符')==false){
        this.passworderror += '密码大于10个字符'
      }else if(newValue.trim().length <= 10){
        this.passworderror = this.passworderror.replace('密码大于10个字符','')
      }
      if (newValue.trim().length < 6 && this.passworderror.includes('密码小于6个字符')==false && newValue != ''){
        this.passworderror += '密码小于6个字符'
      }else if(newValue.trim().length >= 6 || newValue == ''){
        this.passworderror = this.passworderror.replace('密码小于6个字符','')
      }
      if (/[^A-Za-z0-9]/g.test(newValue.trim())&& this.passworderror.includes('密码只允许数字，英文')==false ){
        this.passworderror += '密码只允许数字，英文'
      }else if (/[^A-Za-z0-9]/g.test(newValue.trim())==false){
        this.passworderror = this.passworderror.replace('密码只允许数字，英文','')
      }
      this.$refs.passworderrorinput.style.left = this.$refs.usernameinput.getBoundingClientRect().left+'px'
      if(this.passworderror!=''){
        this.$refs.passwordinput.style.borderColor = 'red'
      }else {
        this.$refs.passwordinput.style.borderColor = 'black'
      }
    }
  }
}

</script>

<style>
#logintxt{

}
.login{
  display: inline-block;
  height: 30px;
}
.text{
  width: 200px;
  height: 30px;
}
input{
  /*使input宽度和按钮等一样*/
  box-sizing: border-box;
  border: 1px solid;
  /*取消选中时的黑边框*/
  outline: none;
}
#button1{
  width: 80px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
  position: absolute;
}
#button2{
  width: 80px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
  position: absolute;
}
.txt{
  display: inline-block;
  text-align: right;
}
.admindiv{
  width: 120px;
  display: inline-block;
  position: relative;
  left: 46px;
}
.error {
  color: red;
}
#usernameerror{
  position: absolute;
}
#passworderror{
  position: absolute;
}
#button1{
  position: relative;
  left: 36px;
}
#button2{
  position: relative;
  left: 76px;
}
#passwordinput{
  position: relative;
  left: 8px;
}
form{
  opacity: 0.95;
  background-color: #ffffff;
  width: 400px;
  height: 280px;
  display: inline-block;
}
</style>
