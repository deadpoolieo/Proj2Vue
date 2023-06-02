<template>
  <div :style="background" class="applier">
    <span class="maintitle1">企業経営革新ー申請一覧</span>
    <br><br>
    <span class="maintitle2">申請情報</span>
    <br>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>受付番号</th>
          <th>申請区分</th>
          <th>表紙_申請日</th>
          <th>公開用ステータス</th>
          <th>申請者更新日時</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(n,index) in thispageapplierinfo.length" :key="index">
            <td>{{thispageapplierinfo[index].id}}</td>
            <td v-if="thispageapplierinfo[index].appKokaiyoStatus!=='一時保存'&&thispageapplierinfo[index].appKokaiyoStatus!=='申請内容に指摘あり'">{{thispageapplierinfo[index].appUketsukeNo}}</td>
            <td v-else><router-link to="/applieritem">{{thispageapplierinfo[index].appUketsukeNo}}</router-link></td>
            <td>{{thispageapplierinfo[index].appShinseiKubun}}</td>
            <td>{{thispageapplierinfo[index].appShinseiDate}}</td>
            <td>{{thispageapplierinfo[index].appKokaiyoStatus}}</td>
            <td>{{thispageapplierinfo[index].appShinseishaKoshinDateTime}}</td>
          </tr>
      </tbody>
    </table>
    <button class="button1" @click="$router.push({path:'/newapply'})">新規</button>
    <br>
    <span>共{{applierinfo.length}}条</span>
    <select v-model="row" v-bind:value="row">
      <option value="10">10条/页</option>
      <option value="5">5条/页</option>
      <option value="2">2条/页</option>
    </select>
    <button class="page" @click="previouspage">&#60;</button>
    <button class="page" @click="this.page=pagenum[0]">{{pagenum[0]}}</button>
    <button class="page" @click="this.page=pagenum[1]">{{pagenum[1]}}</button>
    <button class="page" @click="this.page=pagenum[2]">{{pagenum[2]}}</button>
    <button class="page" @click="this.page=pagenum[3]">{{pagenum[3]}}</button>
    <button class="page" @click="this.page=pagenum[4]">{{pagenum[4]}}</button>
    <button class="page" @click="nextpage">&#62;</button>
    <span>前往</span>
    <input ref="pageinput" class="topage" type="text" v-model="page">
    <span>页</span>
    <span class="error" ref="pageerrorinput">{{pageerror}}</span>
    <br><br>
    <span class="maintitle2">お知らせ</span>
    <br>
    <button class="button1" @click.once="changenoticeshow">お知らせ一覧</button>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>掲載開始日</th>
        <th>タイトル</th>
      </tr>
      </thead>
      <tbody class="table2">
      <tr v-show="sevendaynoticeshow" v-for="(n,index) in sevendaynoticeinfo.length" :key="index">
        <td>{{index+1}}</td>
        <td>{{sevendaynoticeinfo[index].ntcdate}}</td>
        <td class="title" v-if="sevendaynoticeinfo[index].ntctitle.length<=15"><router-link to="/noticedetails" @mouseenter="selectedinfo=sevendaynoticeinfo[index]" @click="sevendaynoticedetails">{{sevendaynoticeinfo[index].ntctitle}}</router-link></td>
        <td class="title" v-else><router-link to="/noticedetails" @mouseenter="selectedinfo=sevendaynoticeinfo[index];$event.currentTarget.innerHTML=sevendaynoticeinfo[index].ntctitle;" @mouseleave="$event.currentTarget.innerHTML=sevendaynoticeinfo[index].ntctitle.slice(0,15)+'...'" @click="sevendaynoticedetails">{{sevendaynoticeinfo[index].ntctitle.slice(0,15)+'...'}}</router-link></td>
      </tr>
      <tr v-show="allnoticeshow" v-for="(n,index) in allnoticeinfo.length" :key="index">
        <td>{{index+1}}</td>
        <td>{{allnoticeinfo[index].ntcdate}}</td>
        <td class="title" v-if="allnoticeinfo[index].ntctitle.length<=15"><router-link to="/noticedetails" @mouseenter="selectedinfo=allnoticeinfo[index]" @click="sevendaynoticedetails">{{allnoticeinfo[index].ntctitle}}</router-link></td>
        <td class="title" v-else><router-link to="/noticedetails" @mouseenter="selectedinfo=allnoticeinfo[index];$event.currentTarget.innerHTML=allnoticeinfo[index].ntctitle;" @mouseleave="$event.currentTarget.innerHTML=allnoticeinfo[index].ntctitle.slice(0,15)+'...'" @click="sevendaynoticedetails">{{allnoticeinfo[index].ntctitle.slice(0,15)+'...'}}</router-link></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import {queryapplierinfo, querynoticeinfo} from "@/api/post";
  export default {
    data(){
      return {
        background:{
          backgroundImage:'url('+require('../views/background2.jpg')+')',
          backgroundSize:'20%'
        },
        applierinfo: {},
        noticeinfo:{},
        page:1,
        thispageapplierinfo:[],
        row:'10',
        pagenum:[],
        pageerror:'',
        sevendaynoticeinfo:[],
        sevendaynoticeshow:1,
        allnoticeshow:0,
        allnoticeinfo:[],
        selectedinfo:{}
      }
    },
    created(){
      this.getapplierinfo();
      this.getnoticeinfo();
    },
    methods:{
      //申请信息方法
      getapplierinfo(){
        queryapplierinfo().then(res =>{
          this.applierinfo = res.data;
          for (let i = 0;i<this.row;i++){
            this.thispageapplierinfo[i]=this.applierinfo[i]
          }
          let lastpage = Math.min(Math.floor(this.applierinfo.length/this.row+1),this.applierinfo.length/this.row)
          for (let i=0;i<Math.min(lastpage,5);i++){
            this.pagenum[i]=i+1
          }
          return this.thispageapplierinfo,this.applierinfo
        })
      },
      thispagegetinfo() {
        let lastpage = Math.min(Math.floor(this.applierinfo.length / this.row + 1), this.applierinfo.length / this.row)
        if (this.page<=lastpage+1&&this.page>0) {
          this.pageerror=''
          this.$refs.pageinput.style.borderColor = 'black'
          let j
          this.thispageapplierinfo = []
          for (let i = 0; i < this.row; i++) {
            j = this.row * (this.page - 1) + i
            if (this.applierinfo[j] !== undefined) {
              this.thispageapplierinfo[i] = this.applierinfo[j]
            }
          }
          this.pagenum = []

          for (let i = 0; i < Math.min(lastpage, 5); i++) {
            this.pagenum[i] = i + 1
          }
          if (this.page > this.pagenum[2] && this.page + 2 <= lastpage) {
            for (let i = 0; i < 5; i++) {
              this.pagenum[i] = i + this.page - 2
            }
          } else if (this.page + 1 == lastpage) {
            for (let i = 0; i < 5; i++) {
              this.pagenum[i] = i + this.page - 3
            }
          } else if (this.page == lastpage) {
            for (let i = 0; i < 5; i++) {
              this.pagenum[i] = i + this.page - 4
            }
          }
          return this.thispageapplierinfo
        }else if (this.page!=''){
          this.pageerror = 'ページ番号 エラー'
          this.$refs.pageinput.style.borderColor = 'red'
        }
      },
      previouspage(){
        if (this.page>1){
          this.page--
          this.thispagegetinfo()
        }
      },
      nextpage(){
        let lastpage = Math.min(Math.floor(this.applierinfo.length/this.row+1),this.applierinfo.length/this.row)
        if (this.page<lastpage){
          this.page++
          this.thispagegetinfo()
        }
      },
      //获取日期
      getdate(n){
        let dd = new Date();
        if (n){
          dd.setDate(dd.getDate()-n);
        }
        let year = dd.getFullYear();
        let month = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth()+1):dd.getMonth()+1;
        let day = dd.getDate()<10 ? "0" + dd.getDate():dd.getDate();
        return year + "-" +month + "-" +day;
      },
      //通知方法
      getnoticeinfo(){
        querynoticeinfo().then(res =>{
          this.noticeinfo = res.data;
          for (let i = 0;i<this.noticeinfo.length;i++){
            this.allnoticeinfo.push(this.noticeinfo[i]);
            if (this.getdate(7)<this.noticeinfo[i].ntcdate){
              this.sevendaynoticeinfo.push(this.noticeinfo[i]);
            }
          }
          for (let i=0;i<this.allnoticeinfo.length;i++){
            this.allnoticeinfo[i].ntcdate=this.allnoticeinfo[i].ntcdate.replace(/-/,'年')
            this.allnoticeinfo[i].ntcdate=this.allnoticeinfo[i].ntcdate.replace(/-/,'月')
            this.allnoticeinfo[i].ntcdate=this.allnoticeinfo[i].ntcdate+'日'
          }
          return this.noticeinfo,this.sevendaynoticeinfo,this.allnoticeinfo
        })
      },
      //显示全部通知
      changenoticeshow(){
        this.sevendaynoticeshow=!this.sevendaynoticeshow
        this.allnoticeshow=!this.allnoticeshow
      },
      //通知传值
      sevendaynoticedetails(){
        sessionStorage.setItem('ntctitle',this.selectedinfo.ntctitle)
        sessionStorage.setItem('ntcdate',this.selectedinfo.ntcdate)
        sessionStorage.setItem('ntcjuyo',this.selectedinfo.ntcjuyo)
      }
    },
    watch:{
      row(){
        this.page=1
        this.thispagegetinfo()
      },
      page(){
        this.thispagegetinfo()
      }
    }
  }

</script>
<style>
table{
  margin: auto;
  opacity: 0.9;
  background-color: #ffffff;
}
span{
  opacity: 0.9;
  background-color: #ffffff;
}
.page{
  width: 20px;
  background: #ffffff;
  color: #000000;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}
.topage{
  text-align: center;
  width: 20px;
}
.error{
  color: red;
}
.button1{
  width: 90px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}
.table2 tr{
  height: 60px;
}
.title{
  width: 280px;
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