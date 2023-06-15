<template>
  <div :style="background">
    <span id="aPLShinseisyaName">個人情報名:{{aPLShinseisyaName}}</span>
    <h2 class="othertitle">内容確認</h2>
    <br>
    <h2 class="othertitle">実施計画</h2>
    <table class="othertable">
      <thead>
      <tr>
        <th>番号</th>
        <th>実施項目</th>
        <th>評価基準</th>
        <th>評価頻度</th>
        <th>実施時期年度</th>
        <th>実施時期四半期</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in table1row" :key="item" ref="row">
        <td>1-{{index+1}}</td>
        <td>{{plJisshiKomokuc[item-1]}}</td>
        <td>{{plHyoukaKijunc[item-1]}}</td>
        <td>{{plHyoukaHindoc[item-1]}}</td>
        <td>{{plJisshiJikiNendoc[item-1]}}</td>
        <td>{{plJisshiJikiShihankic[item-1]}}</td>
      </tr>
      </tbody>
    </table>
    <br>
    <h2 class="othertitle">投資計画</h2>
    <table class="othertable">
      <thead>
      <tr>
        <th>導入年度</th>
        <th>導入時期</th>
        <th>海外での購入有無</th>
        <th>単価</th>
        <th>数量</th>
        <th>合計金額</th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="(item,index) in table2row" :key="item">
        <td>{{plDonyuNendo__c[item-1]}}</td>
        <td>{{plDonyuJiki__c[item-1]}}</td>
        <td>{{plKaigaiKounyu__c[item-1]}}</td>
        <td>{{plPrice__c[item-1]}}千円</td>
        <td>{{plAmount__c[item-1]}}</td>
        <td>{{plTotalAmount__c[item-1]}}千円</td>
      </tr>
      </tbody>
    </table>
    <br><br>
    <button class="btnother" @click="$router.push({path:'/othertable134'})">戻る</button>
    <br><br>
    <button class="btnother" @click="saveplan">登録</button>
    <br><br><br><br>
  </div>
</template>

<script>
import {addimplementationplan} from "@/api/post";
import {addinvestmentplan} from "@/api/post";
export default {
  name: "OthertableConfirm",
  data(){
    return{
      background:{
        backgroundImage:'url('+require('../views/background2.jpg')+')',
        backgroundSize:'20%'
      },
      aPLShinseisyaName:'',
      table1row:[1],
      table1rownum:1,
      table2row:[1],
      table2rownum:1,
      checked1:[],
      checked2:[],
      plJisshiKomokuc:[],
      plHyoukaKijunc:[],
      plHyoukaHindoc:[],
      plJisshiJikiNendoc:[],
      plJisshiJikiShihankic:[],
      thisyear:'',
      plDonyuNendo__c:[],
      plDonyuJiki__c:[],
      plKaigaiKounyu__c:[],
      plPrice__c:[],
      plAmount__c:[],
      plTotalAmount__c:[],
      successnum : 0
    }
  },
  created() {
    this.aPLShinseisyaName = sessionStorage.getItem('aPLShinseisyaName')
    this.thisyear = new Date().getFullYear()
    this.table1rownum = localStorage.getItem('table1rownum')
    this.table2rownum = localStorage.getItem('table2rownum')
    for (let i=0;i<this.table1rownum;i++){
      this.table1row[i] = parseInt(localStorage.getItem('table1row'+i))
      this.plJisshiKomokuc[i] = localStorage.getItem('plJisshiKomokuc'+i)
      this.plHyoukaKijunc[i] = localStorage.getItem('plHyoukaKijunc'+i)
      this.plHyoukaHindoc[i] = localStorage.getItem('plHyoukaHindoc'+i)
      this.plJisshiJikiNendoc[i] = localStorage.getItem('plJisshiJikiNendoc'+i)
      this.plJisshiJikiShihankic[i] = localStorage.getItem('plJisshiJikiShihankic'+i)
      if (this.plJisshiKomokuc[i]=='undefined'){
        this.plJisshiKomokuc[i]=''
      }
      if (this.plHyoukaKijunc[i]=='undefined'){
        this.plHyoukaKijunc[i]=''
      }
      if (this.plHyoukaHindoc[i]=='undefined'){
        this.plHyoukaHindoc[i]=''
      }
      if (this.plJisshiJikiNendoc[i]=='undefined'){
        this.plJisshiJikiNendoc[i]=''
      }
      if (this.plJisshiJikiShihankic[i]=='undefined'){
        this.plJisshiJikiShihankic[i]=''
      }
    }
    for (let i=0;i<this.table2rownum;i++){
      this.table2row[i] = parseInt(localStorage.getItem('table2row'+i))
      if (localStorage.getItem('plDonyuNendo__c'+i).replaceAll(/[{}+thisyear]/g,'')==''){
        this.plDonyuNendo__c[i]=0
      }else {
        this.plDonyuNendo__c[i]=parseInt(localStorage.getItem('plDonyuNendo__c'+i).replaceAll(/[{}+thisyear]/g,''))
      }
      this.plDonyuNendo__c[i] += this.thisyear
      this.plDonyuJiki__c[i] = localStorage.getItem('plDonyuJiki__c'+i)
      if (localStorage.getItem('plKaigaiKounyu__c'+i)=='true'){
        this.plKaigaiKounyu__c[i] = '有'
      }else {
        this.plKaigaiKounyu__c[i] = '無'
      }
      this.plPrice__c[i] = localStorage.getItem('plPrice__c'+i)
      this.plAmount__c[i] = localStorage.getItem('plAmount__c'+i)
      this.plTotalAmount__c[i] = localStorage.getItem('plTotalAmount__c'+i)
      if (this.plDonyuNendo__c[i]=='undefined'){
        this.plDonyuNendo__c[i]=''
      }
      if (this.plDonyuJiki__c[i]=='undefined'){
        this.plDonyuJiki__c[i]=''
      }
      if (this.plPrice__c[i]=='undefined'){
        this.plPrice__c[i]=''
      }
      if (this.plAmount__c[i]=='undefined'){
        this.plAmount__c[i]=''
      }
      if (this.plTotalAmount__c[i]=='undefined'){
        this.plTotalAmount__c[i]=''
      }
    }
  },
  methods:{
    saveplan(){
      for (let i=0;i<this.table1rownum;i++){
        let obj = {
          aplshinseisyaname : this.aPLShinseisyaName,
          name : '1-'+(i+1).toString(),
          pljisshikomokuc : this.plJisshiKomokuc[i],
          plhyoukakijunc : this.plHyoukaKijunc[i],
          plhyoukahindoc : this.plHyoukaHindoc[i],
          pljisshijikinendoc : this.plJisshiJikiNendoc[i],
          pljisshijikishihankic : this.plJisshiJikiShihankic[i],
        }
        addimplementationplan(obj).then(res=>{
          if (res.data=='保存に成功しました'){
            this.successnum++
            if (this.successnum == parseInt(this.table1rownum) + parseInt(this.table2rownum)){
              alert('入力内容の登録が完了しました')
              this.$router.push({path:'/businessplan'})
            }
          }
        })
            .catch(error=>{
              alert(error.message)
            })
      }
      for (let i=0;i<this.table2rownum;i++){
        let obj = {
          aplshinseisyaname : this.aPLShinseisyaName,
          pldonyunendo__c : this.plDonyuNendo__c[i],
          pldonyujiki__c : this.plDonyuJiki__c[i],
          plkaigaikounyu__c : this.plKaigaiKounyu__c[i],
          plprice__c : this.plPrice__c[i],
          plamount__c : this.plAmount__c[i],
          pltotalamount__c : this.plTotalAmount__c[i],
        }
        addinvestmentplan(obj).then(res=>{
          if (res.data=='保存に成功しました'){
            this.successnum++
            if (this.successnum == parseInt(this.table1rownum) + parseInt(this.table2rownum)){
              alert('入力内容の登録が完了しました')
              this.$router.push({path:'/businessplan'})
            }
          }
        })
            .catch(error=>{
              alert(error.message)
            })
      }
    }
  }
}
</script>

<style>
.othertable{
  margin: auto;
  opacity: 0.9;
  background-color: #ffffff;
  padding:0 50px 0 50px;
}
.othertitle{
  display: inline-block;
  opacity: 0.9;
  background-color: #ffffff;
}

</style>