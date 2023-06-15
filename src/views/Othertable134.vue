<template>
  <div :style="background">
    <span id="aPLShinseisyaName">個人情報名:{{aPLShinseisyaName}}</span>
    <h2 class="othertitle">実施計画</h2>
    <table class="othertable">
      <thead>
      <tr>
        <th><input type="checkbox" @change="allcheckbox1" ref="allcheck1"></th>
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
        <td><input type="checkbox" ref="checkbox1"></td>
        <td>1-{{index+1}}</td>
        <td><input type="text" v-model="plJisshiKomokuc[item-1]"></td>
        <td><input type="text" v-model="plHyoukaKijunc[item-1]"></td>
        <td>
          <select name="plHyoukaHindoc" v-model="plHyoukaHindoc[item-1]">
            <option value="">選択してください</option>
            <option value="毎月">毎月</option>
            <option value="半年">半年</option>
            <option value="1年後">1年後</option>
          </select>
        </td>
        <td>
          <select name="plJisshiJikiNendoc" v-model="plJisshiJikiNendoc[item-1]">
            <option value="">選択してください</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </td>
        <td>
          <select name="plJisshiJikiShihankic" v-model="plJisshiJikiShihankic[item-1]">
            <option value="">選択してください</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>
    <span class="othertable2error">{{table1requiredcheck}}</span>
    <br><br>
    <button class="btnother" @click="addtable1row">追加</button>
    <button class="btnother" @click="removetable1row">削除</button>
    <br><br>
    <h2 class="othertitle">投資計画</h2>
    <table class="othertable">
      <thead>
      <tr>
        <th><input type="checkbox" @change="allcheckbox2" ref="allcheck2"></th>
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
        <td><input type="checkbox" ref="checkbox2"></td>
        <td>
          <select name="plDonyuNendo__c" v-model="plDonyuNendo__c[item-1]">
            <option value="">選択してください</option>
            <option value="{{thisyear}}">{{thisyear}}</option>
            <option value="{{thisyear+1}}">{{thisyear+1}}</option>
            <option value="{{thisyear+2}}">{{thisyear+2}}</option>
            <option value="{{thisyear+3}}">{{thisyear+3}}</option>
            <option value="{{thisyear+4}}">{{thisyear+4}}</option>
            <option value="{{thisyear+5}}">{{thisyear+5}}</option>
          </select>
        </td>
        <td>
          <select name="plDonyuJiki__c" v-model="plDonyuJiki__c[item-1]">
            <option value="">選択してください</option>
            <option value="1年後">1年後</option>
            <option value="2年後">2年後</option>
            <option value="3年後">3年後</option>
            <option value="4年後">4年後</option>
            <option value="5年後">5年後</option>
            <option value="6年後">6年後</option>
            <option value="7年後">7年後</option>
            <option value="8年後">8年後</option>
          </select>
        </td>
        <td><input type="checkbox" ref="plKaigaiKounyu__ccheckbox" v-model="plKaigaiKounyu__c[item-1]"></td>
        <td>
          <input type="text" class="plPrice__c" v-model="plPrice__c[item-1]">千円
          <br>
          <span class="othertable2error">{{priceerror[item-1]}}</span>
        </td>
        <td>
          <input type="text" v-model="plAmount__c[item-1]">
          <br>
          <span class="othertable2error">{{amounterror[item-1]}}</span>
        </td>
        <td class="plTotalAmount__c">{{plTotalAmount__c[item-1]}}千円</td>
      </tr>
      </tbody>
    </table>
    <span class="othertable2error">{{table2requiredcheck}}</span>
    <br>
    <button class="btnother" @click="addtable2row">追加</button>
    <button class="btnother" @click="removetable2row">削除</button>
    <br><br>
    <button class="btnother" @click="$router.push({path:'/newapply'})">戻る</button>
    <br><br>
    <button class="btnother" @click="tempsave">一時保存</button>
    <br><br>
    <button class="btnother" @click="reset">リセット</button>
    <br><br>
    <button class="btnother" @click="gotoconfirm">内容確認</button>
  </div>
</template>

<script>
export default {
  name: "Othertable134",
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
      table1requiredcheck:'',
      table2requiredcheck:'',
      thisyear:'',
      plDonyuNendo__c:[],
      plDonyuJiki__c:[],
      plKaigaiKounyu__c:[],
      plPrice__c:[],
      priceerror:[],
      plAmount__c:[],
      amounterror:[],
      plTotalAmount__c:[]
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
      this.plDonyuNendo__c[i] = localStorage.getItem('plDonyuNendo__c'+i)
      this.plDonyuJiki__c[i] = localStorage.getItem('plDonyuJiki__c'+i)
      if (localStorage.getItem('plKaigaiKounyu__c'+i)=='true'){
        this.plKaigaiKounyu__c[i] = true
      }else {
        this.plKaigaiKounyu__c[i] = false
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
    addtable1row(){
      if (this.table1rownum==null){
        this.table1rownum=1
      }
      if (this.table1rownum<=5){
        this.table1rownum++
        this.table1row.push(this.table1rownum)
      }else {
        alert('最大5行追加')
      }
      if (this.plJisshiKomokuc[this.table1rownum-1]==undefined){
        this.plJisshiKomokuc[this.table1rownum-1]=''
      }
      if (this.plHyoukaKijunc[this.table1rownum-1]==undefined){
        this.plHyoukaKijunc[this.table1rownum-1]=''
      }
      if (this.plHyoukaHindoc[this.table1rownum-1]==undefined){
        this.plHyoukaHindoc[this.table1rownum-1]=''
      }
      if (this.plJisshiJikiNendoc[this.table1rownum-1]==undefined){
        this.plJisshiJikiNendoc[this.table1rownum-1]=''
      }
      if (this.plJisshiJikiShihankic[this.table1rownum-1]==undefined){
        this.plJisshiJikiShihankic[this.table1rownum-1]=''
      }
    },
    addtable2row(){
      if (this.table2rownum==null){
        this.table2rownum=1
      }
      if (this.table2rownum<=5){
        this.table2rownum++
        this.table2row.push(this.table2rownum)
      }else {
        alert('最大5行追加')
      }
      if (this.plDonyuNendo__c[this.table2rownum-1]==undefined){
        this.plDonyuNendo__c[this.table2rownum-1]=''
      }
      if (this.plDonyuJiki__c[this.table2rownum-1]==undefined){
        this.plDonyuJiki__c[this.table2rownum-1]=''
      }
      if (this.plPrice__c[this.table2rownum-1]==undefined){
        this.plPrice__c[this.table2rownum-1]=''
      }
      if (this.plAmount__c[this.table2rownum-1]==undefined){
        this.plAmount__c[this.table2rownum-1]=''
      }
      if (this.plTotalAmount__c[this.table2rownum-1]==undefined){
        this.plTotalAmount__c[this.table2rownum-1]=''
      }
      if (this.$refs.plKaigaiKounyu__ccheckbox[this.table2rownum-1]==undefined){
        this.plKaigaiKounyu__c[this.table2rownum-1] = false
      }
    },
    removetable1row(){
      this.checked1 = []
      let plJisshiKomokuctemp = []
      let plHyoukaKijunctemp = []
      let plHyoukaHindoctemp = []
      let plJisshiJikiNendoctemp = []
      let plJisshiJikiShihankictemp = []
      for (let i=1;i<=this.table1rownum;i++){
        if (this.$refs.checkbox1[i-1]!=undefined){
          if (this.$refs.checkbox1[i-1].checked){
            this.checked1.push(parseInt(this.table1row[i-1]))
          }
        }
      }
      for (let i=1;i<=this.table1rownum;i++){
        if (this.checked1.includes(i)==false){
          let removeindex = this.table1row.indexOf(i)
          plJisshiKomokuctemp.push(this.plJisshiKomokuc[removeindex])
          plHyoukaKijunctemp.push(this.plHyoukaKijunc[removeindex])
          plHyoukaHindoctemp.push(this.plHyoukaHindoc[removeindex])
          plJisshiJikiNendoctemp.push(this.plJisshiJikiNendoc[removeindex])
          plJisshiJikiShihankictemp.push(this.plJisshiJikiShihankic[removeindex])
        }
      }
      this.plJisshiKomokuc=[]
      this.plHyoukaKijunc=[]
      this.plHyoukaHindoc=[]
      this.plJisshiJikiNendoc=[]
      this.plJisshiJikiShihankic=[]
      this.table1row=[]
      for (let i=0;i<plJisshiKomokuctemp.length;i++){
        this.plJisshiKomokuc.push(plJisshiKomokuctemp[i])
        this.plHyoukaKijunc.push(plHyoukaKijunctemp[i])
        this.plHyoukaHindoc.push(plHyoukaHindoctemp[i])
        this.plJisshiJikiNendoc.push(plJisshiJikiNendoctemp[i])
        this.plJisshiJikiShihankic.push(plJisshiJikiShihankictemp[i])
        this.table1row.push(i+1)
      }
      this.table1rownum-=this.checked1.length
      for (let i=1;i<=this.table1rownum;i++){
        this.$refs.checkbox1[i-1].checked=false
      }
    },
    removetable2row(){
      this.checked2 = []
      let plDonyuNendo__ctemp = []
      let plDonyuJiki__ctemp = []
      let plKaigaiKounyu__ctemp = []
      let plPrice__ctemp = []
      let plAmount__ctemp = []
      let plTotalAmount__ctemp = []
      for (let i=1;i<=this.table2rownum;i++){
        if (this.$refs.checkbox2[i-1]!=undefined){
          if (this.$refs.checkbox2[i-1].checked){
            this.checked2.push(parseInt(this.table2row[i-1]))
          }
        }
      }
      for (let i=1;i<=this.table2rownum;i++){
        if (this.checked2.includes(i)==false){
          let removeindex = this.table2row.indexOf(i)
          plDonyuNendo__ctemp.push(this.plDonyuNendo__c[removeindex])
          plDonyuJiki__ctemp.push(this.plDonyuJiki__c[removeindex])
          plKaigaiKounyu__ctemp.push(this.plKaigaiKounyu__c[removeindex])
          plPrice__ctemp.push(this.plPrice__c[removeindex])
          plAmount__ctemp.push(this.plAmount__c[removeindex])
          plTotalAmount__ctemp.push(this.plTotalAmount__c[removeindex])
        }
      }
      this.plDonyuNendo__c=[]
      this.plDonyuJiki__c=[]
      this.plKaigaiKounyu__c=[]
      this.plPrice__c=[]
      this.plAmount__c=[]
      this.plTotalAmount__c=[]
      this.table2row=[]
      for (let i=0;i<plDonyuNendo__ctemp.length;i++){
        this.plDonyuNendo__c.push(plDonyuNendo__ctemp[i])
        this.plDonyuJiki__c.push(plDonyuJiki__ctemp[i])
        this.plKaigaiKounyu__c.push(plKaigaiKounyu__ctemp[i])
        this.plPrice__c.push(plPrice__ctemp[i])
        this.plAmount__c.push(plAmount__ctemp[i])
        this.plTotalAmount__c.push(plTotalAmount__ctemp[i])
        this.table2row.push(i+1)
      }
      this.table2rownum-=this.checked2.length
      for (let i=1;i<=this.table2rownum;i++){
        this.$refs.checkbox2[i-1].checked=false
      }
    },
    allcheckbox1(){
      if (this.$refs.allcheck.checked){
        for (let i=1;i<=this.table1rownum;i++){
          this.$refs.checkbox1[i-1].checked=true
        }
      }else {
        for (let i=1;i<=this.table1rownum;i++){
          this.$refs.checkbox1[i-1].checked=false
        }
      }
    },
    allcheckbox2(){
      if (this.$refs.allcheck.checked){
        for (let i=1;i<=this.table1rownum;i++){
          this.$refs.checkbox2[i-1].checked=true
        }
      }else {
        for (let i=1;i<=this.table1rownum;i++){
          this.$refs.checkbox2[i-1].checked=false
        }
      }
    },
    computeallamount(){
      for (let i=1;i<=this.table2rownum;i++){
        this.plTotalAmount__c[i-1] = parseInt(this.plAmount__c[i-1]) * parseInt(this.plPrice__c[i-1])
      }
    },
    tempsave(){
      localStorage.setItem('table1rownum',this.table1rownum)
      localStorage.setItem('table2rownum',this.table2rownum)
      for (let i=0; i<this.table1row.length; i++){
        localStorage.setItem('plJisshiKomokuc'+i,this.plJisshiKomokuc[i])
        localStorage.setItem('plHyoukaKijunc'+i,this.plHyoukaKijunc[i])
        localStorage.setItem('plHyoukaHindoc'+i,this.plHyoukaHindoc[i])
        localStorage.setItem('plJisshiJikiNendoc'+i,this.plJisshiJikiNendoc[i])
        localStorage.setItem('plJisshiJikiShihankic'+i,this.plJisshiJikiShihankic[i])
        localStorage.setItem('table1row'+i,this.table1row[i])
      }
      for (let i=0; i<this.table2row.length; i++){
        localStorage.setItem('plDonyuNendo__c'+i,this.plDonyuNendo__c[i])
        localStorage.setItem('plDonyuJiki__c'+i,this.plDonyuJiki__c[i])
        localStorage.setItem('plKaigaiKounyu__c'+i,this.$refs.plKaigaiKounyu__ccheckbox[i].checked)
        localStorage.setItem('plPrice__c'+i,this.plPrice__c[i])
        localStorage.setItem('plAmount__c'+i,this.plAmount__c[i])
        localStorage.setItem('plTotalAmount__c'+i,this.plTotalAmount__c[i])
        localStorage.setItem('table2row'+i,this.table2row[i])
      }
      alert('一時保存に成功しました。')
    },
    reset(){
      localStorage.clear()
      for (let i=0;i<this.table1rownum;i++){
        this.plJisshiKomokuc[i] = ''
        this.plHyoukaKijunc[i] = ''
        this.plHyoukaHindoc[i] = ''
        this.plJisshiJikiNendoc[i] = ''
        this.plJisshiJikiShihankic[i] = ''
      }
      for (let i=0;i<this.table2rownum;i++){
        this.plDonyuNendo__c[i] = ''
        this.plDonyuJiki__c[i] = ''
        this.plKaigaiKounyu__c[i] = ''
        this.plPrice__c[i] = ''
        this.plAmount__c[i] = ''
        this.plTotalAmount__c[i] = ''
      }
      this.table1row = [1]
      this.table1rownum = 1
      this.table2row = [1]
      this.table2rownum = 1
    },
    gotoconfirm(){
      //输入检查
      for (let i=0;i<this.plJisshiKomokuc.length;i++){
        if(this.plJisshiKomokuc[i]!='' || this.plHyoukaKijunc[i]!='' || this.plHyoukaHindoc[i]!='' || this.plJisshiJikiNendoc[i]!='' || this.plJisshiJikiShihankic[i]!=''){
          if (this.plJisshiKomokuc[i]==''){
            alert('実施項目内容を入力してください。')
            return
          }
          if (this.plHyoukaKijunc[i]==''){
            alert('評価基準内容を入力してください。')
            return
          }
          if (this.plHyoukaHindoc[i]==''){
            alert('評価頻度内容を入力してください。')
            return
          }
          if (this.plJisshiJikiNendoc[i]==''){
            alert('実施時期年度内容を入力してください。')
            return
          }
          if (this.plJisshiJikiShihankic[i]==''){
            alert('実施時期四半期内容を入力してください。')
            return
          }
        }
      }
      for (let i=0;i<this.plDonyuNendo__c.length;i++){
        if(this.plDonyuNendo__c[i]!='' || this.plDonyuJiki__c[i]!='' || this.plPrice__c[i]!='' ||this.plAmount__c[i]!='' || this.plKaigaiKounyu__c[i]){
          if (this.plDonyuNendo__c[i]==''){
            alert('導入年度内容を入力してください。')
            return
          }
          if (this.plDonyuJiki__c[i]==''){
            alert('導入時期内容を入力してください。')
            return
          }
          if (this.plDonyuJiki__c[i]==''){
            alert('導入時期内容を入力してください。')
            return
          }
          if (this.plPrice__c[i]==''){
            alert('単価内容を入力してください。')
            return
          }
          if (/[^\d]/.test(this.plPrice__c[i])) {
            alert('単価は整数しか入力できない。')
            return
          }
          if (this.plAmount__c[i]==''){
            alert('数量内容を入力してください。')
            return
          }
          if (/[^\d]/.test(this.plAmount__c[i])) {
            alert('数量は整数しか入力できない。')
            return
          }
        }
      }
      localStorage.setItem('table1rownum',this.table1rownum)
      for (let i=0; i<this.table1row.length; i++){
        localStorage.setItem('plJisshiKomokuc'+i,this.plJisshiKomokuc[i])
        localStorage.setItem('plHyoukaKijunc'+i,this.plHyoukaKijunc[i])
        localStorage.setItem('plHyoukaHindoc'+i,this.plHyoukaHindoc[i])
        localStorage.setItem('plJisshiJikiNendoc'+i,this.plJisshiJikiNendoc[i])
        localStorage.setItem('plJisshiJikiShihankic'+i,this.plJisshiJikiShihankic[i])
        localStorage.setItem('plDonyuNendo__c'+i,this.plDonyuNendo__c[i])
        localStorage.setItem('plDonyuJiki__c'+i,this.plDonyuJiki__c[i])
        localStorage.setItem('plKaigaiKounyu__c'+i,this.$refs.plKaigaiKounyu__ccheckbox[i].checked)
        localStorage.setItem('plPrice__c'+i,this.plPrice__c[i])
        localStorage.setItem('plAmount__c'+i,this.plAmount__c[i])
        localStorage.setItem('plTotalAmount__c'+i,this.plTotalAmount__c[i])
        localStorage.setItem('table1row'+i,this.table1row[i])
      }
      this.$router.push({path:'/othertableconfirm'});
    },
    requiredcheck1(){
      this.table1requiredcheck = ''
      for (let i=0;i<this.plJisshiKomokuc.length;i++){
        if(this.plJisshiKomokuc[i]!='' || this.plHyoukaKijunc[i]!='' || this.plHyoukaHindoc[i]!='' || this.plJisshiJikiNendoc[i]!='' || this.plJisshiJikiShihankic[i]!=''){
          if (this.plJisshiKomokuc[i]=='') {
            this.table1requiredcheck += '行'+(i+1)+'実施項目内容を入力してください。'
          }
          if (this.plHyoukaKijunc[i]==''){
            this.table1requiredcheck+='行'+(i+1)+'評価基準内容を入力してください。'
          }
          if (this.plHyoukaHindoc[i]==''){
            this.table1requiredcheck+='行'+(i+1)+'評価頻度内容を入力してください。'
          }
          if (this.plJisshiJikiNendoc[i]==''){
            this.table1requiredcheck+='行'+(i+1)+'実施時期内容を入力してください。'
          }
          if (this.plJisshiJikiShihankic[i]==''){
            this.table1requiredcheck+='行'+(i+1)+'実施時期四半期内容を入力してください。'
          }
        }
      }
    },
    requiredcheck2(){
      this.table2requiredcheck = ''
      for (let i=0;i<this.plDonyuNendo__c.length;i++){
        if(this.plDonyuNendo__c[i]!='' || this.plDonyuJiki__c[i]!='' || this.plPrice__c[i]!='' || this.plAmount__c[i]!='' || this.plKaigaiKounyu__c[i]){
          if (this.plDonyuNendo__c[i]=='') {
            this.table2requiredcheck += '行'+(i+1)+'導入年度内容を入力してください。'
          }
          if (this.plDonyuJiki__c[i]==''){
            this.table2requiredcheck+='行'+(i+1)+'導入時期内容を入力してください。'
          }
          if (this.plPrice__c[i]==''){
            this.table2requiredcheck+='行'+(i+1)+'単価内容を入力してください。'
          }
          if (this.plAmount__c[i]==''){
            this.table2requiredcheck+='行'+(i+1)+'数量内容を入力してください。'
          }
        }
      }
    }
  },
  watch:{
    'plJisshiKomokuc':{
      handler: function (){
        this.requiredcheck1()
      },
      deep:true
    },
    'plHyoukaKijunc':{
      handler: function (){
        this.requiredcheck1()
      },
      deep:true
    },
    'plHyoukaHindoc':{
      handler: function (){
        this.requiredcheck1()
      },
      deep:true
    },
    'plJisshiJikiNendoc':{
      handler: function (){
        this.requiredcheck1()
      },
      deep:true
    },
    'plJisshiJikiShihankic':{
      handler: function (){
        this.requiredcheck1()
      },
      deep:true
    },
    'plPrice__c':{
      handler: function (newValue){
        this.requiredcheck2()
        for (let i=0;i<newValue.length;i++){
            if (/[^\d]/.test(newValue[i])){
              this.priceerror[i] = '単価は整数しか入力できない。'
              this.plTotalAmount__c[i] = ''
            }else if (/[^\d]/.test(newValue[i])==false){
              this.priceerror[i] = ''
              this.computeallamount()
            }
        }
      },
      deep:true
    },
    'plAmount__c':{
      handler: function (newValue){
        this.requiredcheck2()
        for (let i=0;i<newValue.length;i++){
            if (/[^\d]/.test(newValue[i])){
              this.amounterror[i] = '数量は整数しか入力できない。'
              this.plTotalAmount__c[i] = ''
            }else if (/[^\d]/.test(newValue[i])==false){
              this.amounterror[i] = ''
              this.computeallamount()
            }
        }
      },
      deep:true
    }
  }
}
</script>

<style>
.othertable2error{
  color: red;
  font-size: 5px;
}
.plPrice__c{
  text-align: right;
}
.plTotalAmount__c{
  text-align: right;
}
#aPLShinseisyaName{
  text-align: right;
  display: block;
}
.othertable{
  margin: auto;
  opacity: 0.9;
  background-color: #ffffff;
  padding:0 50px 0 50px;
}
.btnother{
  margin: 0 0 0 10px;
  height: 20px;
  width: 120px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}
.othertitle{
  display: inline-block;
  opacity: 0.9;
  background-color: #ffffff;
}

</style>