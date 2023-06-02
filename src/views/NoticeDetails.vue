<template>
  <div :style="background">
    <span class="maintitle1">お知らせ詳細</span>
    <br><br>
    <table>
      <tbody>
      <tr>
        <td class="maintitle2">{{ntctitle}}</td>
      </tr>
      <br>
      <tr>
        <td>{{ntcdate}}</td>
      </tr>
      <br>
      <tr>
        <td>重要内容</td>
      </tr>
      <tr>
        <td class="juyo">{{ntcjuyo}}</td>
      </tr>
      </tbody>
    </table>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "NoticeDetails",
  data(){
    return{
      background:{
        backgroundImage:'url('+require('../views/background2.jpg')+')',
        backgroundSize:'20%'
      },
      ntctitle:'',
      ntcjuyo:'',
      ntcdate:''
    }
  },
  created() {
    this.getinfo()
  },
  methods:{
    getinfo(){
      this.ntctitle = sessionStorage.getItem('ntctitle')
      this.ntcdate = sessionStorage.getItem('ntcdate')
      this.ntcjuyo = sessionStorage.getItem('ntcjuyo')
      return this.ntctitle,this.ntcdate,this.ntcjuyo
    }
  }
}
</script>

<style scoped>
td{
  width: 500px;
}
.juyo{
  text-align: left;
}
.maintitle1{
  font-size: x-large;
  font-weight: bold;
}
.maintitle2{
  font-size: large;
  font-weight: bold;
}

</style>