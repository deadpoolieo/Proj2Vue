<template>
  <div :style="background">
    <h2 id="applicationconfirmtitle">申請者情報入力内容の確認</h2>
    <table id="table3">
      <thead>
      <tr>
        <th colspan="2">申請者情報</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table3tr">
        <td class="table3td">申請情報登録日</td>
        <td class="table3td">{{Now}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">申請者名</td>
        <td class="table3td">{{aPLShinseisyaName}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">郵便番号（3桁）</td>
        <td class="table3td">{{aPLAddressYubinNo3}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">郵便番号（4桁）</td>
        <td class="table3td">{{aPLAddressYubinNo4}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">都道府県</td>
        <td class="table3td">{{aPLAddressTodofuken}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">市区町村</td>
        <td class="table3td">{{aPLAddressShikuchoson}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">字・番地等</td>
        <td class="table3td">{{aPLAddressBanchi}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">都道府県カナ</td>
        <td class="table3td">{{aPLAddressTodofukenKana}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">市区町村カナ</td>
        <td class="table3td">{{aPLAddressShikuchosonKana}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">字・番地等カナ</td>
        <td class="table3td">{{aPLAddressBanchiKana}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">マンション名等</td>
        <td class="table3td">{{aPLAddressManshon}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">代表者の役職</td>
        <td class="table3td">{{aPLDaihyoshaYakushoku}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">代表者の氏名</td>
        <td class="table3td">{{aPLDaihyoshaName}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">法人番号</td>
        <td class="table3td">{{aPLHojinNo}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">担当者の氏名</td>
        <td class="table3td">{{aPLTantoshaName}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">電話番号</td>
        <td class="table3td">{{region}}-{{aPLCSTEL}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">FAX番号</td>
        <td class="table3td">{{aPLCSFAX}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">担当者メールアドレス</td>
        <td class="table3td">{{aPLCSTantoshaMail}}</td>
      </tr>
      <tr class="table3tr">
        <td class="table3td">確認用メールアドレス</td>
        <td class="table3td">{{aPLCSKakuninyoMail}}</td>
      </tr>
      </tbody>
    </table>
    <br><br>
    <button class="btnconfirm" @click="$router.push({path:'/newapply'})">戻る</button>
    <br><br>
    <button class="btnconfirm" @click="saveapplication">登録</button>
    <br><br><br><br>
  </div>
</template>

<script>
import {addapplication} from "@/api/post";
export default {
  name: "ApplicationConfirm",
  data() {
    return {
      background:{
        backgroundImage:'url('+require('../views/background2.jpg')+')',
        backgroundSize:'20%'
      },
      Now: '',
      aPLShinseisyaName: '',
      aPLAddressTodofuken: '',
      aPLAddressShikuchoson: '',
      aPLAddressBanchi: '',
      aPLAddressTodofukenKana: '',
      aPLAddressShikuchosonKana: '',
      aPLAddressBanchiKana: '',
      aPLAddressManshon: '',
      aPLDaihyoshaYakushoku: '',
      aPLDaihyoshaName: '',
      aPLHojinNo: '',
      aPLTantoshaName: '',
      aPLAddressYubinNo3: '',
      aPLAddressYubinNo4: '',
      alladdress: '',
      region: '',
      aPLCSTEL: '',
      aPLCSFAX: '',
      aPLCSTantoshaMail: '',
      aPLCSKakuninyoMail: '',
    }
  },
  created() {
    this.Now = localStorage.getItem('Now')
    this.aPLShinseisyaName = localStorage.getItem('aPLShinseisyaName')
    this.aPLAddressYubinNo3 = localStorage.getItem('aPLAddressYubinNo3')
    this.aPLAddressYubinNo4 = localStorage.getItem('aPLAddressYubinNo4')
    this.aPLAddressTodofuken = localStorage.getItem('aPLAddressTodofuken')
    this.aPLAddressShikuchoson = localStorage.getItem('aPLAddressShikuchoson')
    this.aPLAddressBanchi = localStorage.getItem('aPLAddressBanchi')
    this.aPLAddressTodofukenKana = localStorage.getItem('aPLAddressTodofukenKana')
    this.aPLAddressShikuchosonKana = localStorage.getItem('aPLAddressShikuchosonKana')
    this.aPLAddressBanchiKana = localStorage.getItem('aPLAddressBanchiKana')
    this.aPLAddressManshon = localStorage.getItem('aPLAddressManshon')
    this.aPLDaihyoshaYakushoku = localStorage.getItem('aPLDaihyoshaYakushoku')
    this.aPLDaihyoshaName = localStorage.getItem('aPLDaihyoshaName')
    this.aPLHojinNo = localStorage.getItem('aPLHojinNo')
    this.aPLTantoshaName = localStorage.getItem('aPLTantoshaName')
    this.region = localStorage.getItem('region')
    this.aPLCSTEL = localStorage.getItem('aPLCSTEL')
    this.aPLCSFAX = localStorage.getItem('aPLCSFAX')
    this.aPLCSTantoshaMail = localStorage.getItem('aPLCSTantoshaMail')
    this.aPLCSKakuninyoMail = localStorage.getItem('aPLCSKakuninyoMail')
  },
  methods:{
    saveapplication(){
      let obj = {
        now : this.Now,
        aplshinseisyaname : this.aPLShinseisyaName,
        apladdressyubinno3 : this.aPLAddressYubinNo3,
        apladdressyubinno4 : this.aPLAddressYubinNo4,
        apladdresstodofuken : this.aPLAddressTodofuken,
        apladdressshikuchoson : this.aPLAddressShikuchoson,
        apladdressbanchi : this.aPLAddressBanchi,
        apladdresstodofukenkana : this.aPLAddressTodofukenKana,
        apladdressshikuchosonkana : this.aPLAddressShikuchosonKana,
        apladdressbanchikana : this.aPLAddressBanchiKana,
        apladdressmanshon : this.aPLAddressManshon,
        apldaihyoshayakushoku : this.aPLDaihyoshaYakushoku,
        apldaihyoshaname : this.aPLDaihyoshaName,
        aplhojinno : this.aPLHojinNo,
        apltantoshaname : this.aPLTantoshaName,
        aplcstel : this.region +' '+ this.aPLCSTEL,
        aplcsfax : this.aPLCSFAX,
        aplcstantoshamail : this.aPLCSTantoshaMail
      }
      addapplication(obj).then(res=>{
        if (res.data=='保存に成功しました'){
          alert('保存に成功しました')
          // localStorage.setItem('Now','')
          // localStorage.setItem('aPLShinseisyaName','')
          // localStorage.setItem('aPLAddressYubinNo3','')
          // localStorage.setItem('aPLAddressYubinNo4','')
          // localStorage.setItem('aPLAddressTodofuken','')
          // localStorage.setItem('aPLAddressShikuchoson','')
          // localStorage.setItem('aPLAddressBanchi','')
          // localStorage.setItem('aPLAddressTodofukenKana','')
          // localStorage.setItem('aPLAddressShikuchosonKana','')
          // localStorage.setItem('aPLAddressBanchiKana','')
          // localStorage.setItem('aPLAddressManshon','')
          // localStorage.setItem('aPLDaihyoshaYakushoku','')
          // localStorage.setItem('aPLDaihyoshaName','')
          // localStorage.setItem('aPLHojinNo','')
          // localStorage.setItem('aPLTantoshaName','')
          // localStorage.setItem('region','')
          // localStorage.setItem('aPLCSTEL','')
          // localStorage.setItem('aPLCSFAX','')
          // localStorage.setItem('aPLCSTantoshaMail','')
          // localStorage.setItem('aPLCSKakuninyoMail','')
          this.$router.push({
            path:'/othertable134'
          })
        }
      })
      .catch(error=>{
        alert(error.message)
      })
    }
  }
}
</script>

<style>
#applicationconfirmtitle{
  display: inline-block;
  opacity: 0.9;
  background-color: #ffffff;
}
#table3{
  margin: auto;
  opacity: 0.9;
  background-color: #ffffff;
  padding: 0 50px 0 50px;
}
.table3tr{
  height: auto;
}
.table3td{
  text-align: left;
}
.btnconfirm{
  height: 20px;
  width: 120px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}

</style>