<template>
  <div :style="background">
    <h2 id="newapplytitle">個人情報申請</h2>
    <br>
    <table id="table2">
      <thead>
      <tr class="table2tr">
        <th colspan="2">申請者情報</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table2tr">
        <td class="title table2td">申請情報登録日</td>
        <td class="title table2td">{{Now}}</td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">申請者名</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLShinseisyaName">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">郵便番号（3桁）</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressYubinNo3" ref="aPLAddressYubinNo3Input">
          <br>
          <span class="error">{{aPLAddressYubinNo3Error}}</span>
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">郵便番号（4桁）</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressYubinNo4" ref="aPLAddressYubinNo4Input">
          <br>
          <span class="error">{{aPLAddressYubinNo4Error}}</span>
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">都道府県</td>
        <td class="table2td">
          <select class="input" v-model="aPLAddressTodofuken">
            <option value="">選択してください</option>
            <option value="東京都">東京都</option>
            <option value="北海道">北海道</option>
            <option value="大阪府">大阪府</option>
            <option value="京都府">京都府</option>
            <option value="青森県">青森県</option>
            <option value="岩手県">岩手県</option>
            <option value="宮城県">宮城県</option>
            <option value="秋田県">秋田県</option>
            <option value="山形県">山形県</option>
            <option value="福島県">福島県</option>
            <option value="茨城県">茨城県</option>
            <option value="栃木県">栃木県</option>
            <option value="群馬県">群馬県</option>
            <option value="埼玉県">埼玉県</option>
            <option value="千葉県">千葉県</option>
            <option value="神奈川県">神奈川県</option>
            <option value="新潟県">新潟県</option>
            <option value="富山県">富山県</option>
            <option value="石川県">石川県</option>
            <option value="福井県">福井県</option>
            <option value="山梨県">山梨県</option>
            <option value="長野県">長野県</option>
            <option value="岐阜県">岐阜県</option>
            <option value="静岡県">静岡県</option>
            <option value="愛知県">愛知県</option>
            <option value="三重県">三重県</option>
            <option value="滋賀県">滋賀県</option>
            <option value="兵庫県">兵庫県</option>
            <option value="奈良県">奈良県</option>
            <option value="和歌山県">和歌山県</option>
            <option value="鳥取県">鳥取県</option>
            <option value="島根県">島根県</option>
            <option value="岡山県">岡山県</option>
            <option value="広島県">広島県</option>
            <option value="山口県">山口県</option>
            <option value="徳島県">徳島県</option>
            <option value="香川県">香川県</option>
            <option value="愛媛県">愛媛県</option>
            <option value="高知県">高知県</option>
            <option value="福岡県">福岡県</option>
            <option value="佐賀県">佐賀県</option>
            <option value="長崎県">長崎県</option>
            <option value="熊本県">熊本県</option>
            <option value="大分県">大分県</option>
            <option value="宮崎県">宮崎県</option>
            <option value="鹿児島県">鹿児島県</option>
            <option value="沖縄県">沖縄県</option>
          </select>
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">市区町村</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressShikuchoson">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">字・番地等</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressBanchi">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">都道府県カナ</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressTodofukenKana">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">市区町村カナ</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressShikuchosonKana">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">字・番地等カナ</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressBanchiKana">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">マンション名等</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLAddressManshon">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">代表者の役職</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLDaihyoshaYakushoku">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">代表者の氏名</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLDaihyoshaName">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">法人番号</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLHojinNo">
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">担当者の氏名</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLTantoshaName">
        </td>
      </tr>
      <tr id="aPLCSTELRow" class="table2tr">
        <td class="title table2td">電話番号</td>
        <td class="table2td">
          <select class="input" v-model="region">
            <option value="">選択してください</option>
            <option value="+86" selected>+86</option>
            <option value="+81">+81</option>
          </select>
          <input class="input" type="text" v-model="aPLCSTEL">
          <span class="error">{{aPLCSTELError}}</span>
        </td>
      </tr>
      <tr class="table2tr">
        <td class="title table2td">FAX番号</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLCSFAX">
          <span class="error">{{aPLCSFAXError}}</span>
        </td>
      </tr>
      <tr id="aPLCSTantoshaMailRow" class="table2tr">
        <td class="title table2td">担当者メールアドレス</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLCSTantoshaMail">
          <span class="error">{{aPLCSTantoshaMailError}}</span>
        </td>
      </tr>
      <tr id="aPLCSKakuninyoMailRow" class="table2tr">
        <td class="title table2td">確認用メールアドレス</td>
        <td class="table2td">
          <input class="input" type="text" v-model="aPLCSKakuninyoMail">
          <span class="error">{{aPLCSKakuninyoMailError}}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="btn1" @click="tempsave">一時保存</button>
    <br><br>
    <button class="btn1" @click="reset">リセット</button>
    <br><br>
    <button class="btn1" @click="beforeconfirm">内容確認</button>
    <br><br>
    <button class="btn1" @click="$router.push({path:'/applier'})">戻る</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewApply",
  data(){
    return{
      background:{
        backgroundImage:'url('+require('../views/background2.jpg')+')',
        backgroundSize:'20%'
      },
      Now:'',
      aPLShinseisyaName:'',
      aPLAddressTodofuken:'',
      aPLAddressShikuchoson:'',
      aPLAddressBanchi:'',
      aPLAddressTodofukenKana:'',
      aPLAddressShikuchosonKana:'',
      aPLAddressBanchiKana:'',
      aPLAddressManshon:'',
      aPLDaihyoshaYakushoku:'',
      aPLDaihyoshaName:'',
      aPLHojinNo:'',
      aPLTantoshaName:'',
      aPLAddressYubinNo3:'',
      aPLAddressYubinNo3Error:'',
      aPLAddressYubinNo4:'',
      aPLAddressYubinNo4Error:'',
      alladdress:'',
      region:'',
      aPLCSTEL:'',
      aPLCSTELError:'',
      aPLCSFAX:'',
      aPLCSFAXError:'',
      aPLCSTantoshaMail:'',
      aPLCSTantoshaMailError:'',
      aPLCSKakuninyoMail:'',
      aPLCSKakuninyoMailError:''
    }
  },
  created() {
    this.Now = this.getdate()
    setInterval( ()=>{this.Now = this.getdate(); },1000)
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
    //获取日期
    getdate(n){
      let dd = new Date();
      if (n){
        dd.setDate(dd.getDate()-n);
      }
      let year = dd.getFullYear();
      let month = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth()+1):dd.getMonth()+1;
      let day = dd.getDate()<10 ? "0" + dd.getDate():dd.getDate();
      let time = dd.toString().split('GMT')[0].trim().slice(-8);
      return year + "-" +month + "-" +day +' '+ time;
    },
    getaddress(){
      if (/^\d{3}$/.test(this.aPLAddressYubinNo3) && /^\d{4}$/.test(this.aPLAddressYubinNo4)){
        axios.get('/postcode'+'?search='+this.aPLAddressYubinNo3+this.aPLAddressYubinNo4)
            .then(res=>{
                this.alladdress=res.data.toString().split('table')[3];
              if(this.alladdress!=undefined){
                this.aPLAddressTodofuken = this.alladdress.split('class')[3].replace(/[A-Za-z0-9<>%=\/\"]/g,'').trim()
                this.aPLAddressTodofukenKana = this.alladdress.split('class')[4].replace(/[A-Za-z<>%=\/\"]/g,'').trim()
                this.aPLAddressShikuchoson = this.alladdress.split('class')[5].replace(/[A-Za-z0-9<>%=\/\"]/g,'').trim()
                this.aPLAddressShikuchosonKana = this.alladdress.split('class')[6].replace(/[A-Za-z<>%=\/\"]/g,'').trim()
                this.aPLAddressBanchi = this.alladdress.split('class')[7].replace(/[A-Za-z0-9<>%=\/\"]/g,'').trim()
                this.aPLAddressBanchiKana = this.alladdress.split('class')[8].replace(/[A-Za-z<>%=\/\"]/g,'').trim()
              }else {
                alert('間違った郵便番号')
                this.aPLAddressYubinNo3=''
                this.aPLAddressYubinNo4=''
                this.aPLAddressTodofuken=''
                this.aPLAddressTodofukenKana=''
                this.aPLAddressShikuchoson=''
                this.aPLAddressShikuchosonKana=''
                this.aPLAddressBanchi=''
                this.aPLAddressBanchiKana=''
              }
            })
            .catch(error=>{console.log(error)})
      }
      return this.alladdress
    },
    mailcheck(){
      if (this.aPLCSKakuninyoMail!=this.aPLCSTantoshaMail&& this.aPLCSKakuninyoMailError.includes('確認用メールアドレスは一致するように設定してください。')==false){
        this.aPLCSKakuninyoMailError+='確認用メールアドレスは一致するように設定してください。'
        this.aPLCSTantoshaMailError+='確認用メールアドレスは一致するように設定してください。'
      }else if (this.aPLCSKakuninyoMail==this.aPLCSTantoshaMail){
        this.aPLCSKakuninyoMailError = this.aPLCSKakuninyoMailError.replace('確認用メールアドレスは一致するように設定してください。','')
        this.aPLCSTantoshaMailError = this.aPLCSTantoshaMailError.replace('確認用メールアドレスは一致するように設定してください。','')
      }
    },
    //重置
    reset(){
      this.aPLShinseisyaName = ''
      this.aPLAddressYubinNo3 = ''
      this.aPLAddressYubinNo4 = ''
      this.aPLAddressTodofuken = ''
      this.aPLAddressShikuchoson = ''
      this.aPLAddressBanchi = ''
      this.aPLAddressTodofukenKana = ''
      this.aPLAddressShikuchosonKana = ''
      this.aPLAddressBanchiKana = ''
      this.aPLAddressManshon = ''
      this.aPLDaihyoshaYakushoku = ''
      this.aPLDaihyoshaName = ''
      this.aPLHojinNo = ''
      this.aPLTantoshaName = ''
      this.region = ''
      this.aPLCSTEL = ''
      this.aPLCSFAX = ''
      this.aPLCSTantoshaMail = ''
      this.aPLCSKakuninyoMail = ''
    },
    //一时保存
    tempsave(){
      localStorage.setItem('Now',this.Now)
      localStorage.setItem('aPLShinseisyaName',this.aPLShinseisyaName)
      localStorage.setItem('aPLAddressYubinNo3',this.aPLAddressYubinNo3)
      localStorage.setItem('aPLAddressYubinNo4',this.aPLAddressYubinNo4)
      localStorage.setItem('aPLAddressTodofuken',this.aPLAddressTodofuken)
      localStorage.setItem('aPLAddressShikuchoson',this.aPLAddressShikuchoson)
      localStorage.setItem('aPLAddressBanchi',this.aPLAddressBanchi)
      localStorage.setItem('aPLAddressTodofukenKana',this.aPLAddressTodofukenKana)
      localStorage.setItem('aPLAddressShikuchosonKana',this.aPLAddressShikuchosonKana)
      localStorage.setItem('aPLAddressBanchiKana',this.aPLAddressBanchiKana)
      localStorage.setItem('aPLAddressManshon',this.aPLAddressManshon)
      localStorage.setItem('aPLDaihyoshaYakushoku',this.aPLDaihyoshaYakushoku)
      localStorage.setItem('aPLDaihyoshaName',this.aPLDaihyoshaName)
      localStorage.setItem('aPLHojinNo',this.aPLHojinNo)
      localStorage.setItem('aPLTantoshaName',this.aPLTantoshaName)
      localStorage.setItem('region',this.region)
      localStorage.setItem('aPLCSTEL',this.aPLCSTEL)
      localStorage.setItem('aPLCSFAX',this.aPLCSFAX)
      localStorage.setItem('aPLCSTantoshaMail',this.aPLCSTantoshaMail)
      localStorage.setItem('aPLCSKakuninyoMail',this.aPLCSKakuninyoMail)
      alert('一時保存に成功しました。')
    },
    beforeconfirm(){
      //输入检查
      if (this.aPLShinseisyaName==''){
        alert('申請者名内容を入力してください。')
        return
      }
      if (this.aPLAddressYubinNo3==''){
        alert('郵便番号（3桁）内容を入力してください。')
        return
      }
      if (/[^0-9]/g.test(this.aPLAddressYubinNo3)){
        alert('半角数字で入力してください。')
        return
      }
      if (this.aPLAddressYubinNo3.length != 3){
        alert('3桁の数字を入力してください。')
        return
      }
      if (this.aPLAddressYubinNo4==''){
        alert('郵便番号（4桁）内容を入力してください。')
        return
      }
      if (/[^0-9]/g.test(this.aPLAddressYubinNo4)){
        alert('半角数字で入力してください。')
        return
      }
      if (this.aPLAddressYubinNo4.length != 4){
        alert('4桁の数字を入力してください。')
        return
      }
      if (this.aPLAddressTodofuken==''){
        alert('都道府県内容を入力してください。')
        return
      }
      if (this.aPLAddressShikuchoson==''){
        alert('市区町村内容を入力してください。')
        return
      }
      if (this.aPLAddressBanchi==''){
        alert('字・番地等内容を入力してください。')
        return
      }
      if (this.aPLAddressTodofukenKana==''){
        alert('都道府県カナ内容を入力してください。')
        return
      }
      if (this.aPLAddressShikuchosonKana==''){
        alert('市区町村カナ内容を入力してください。')
        return
      }
      if (this.aPLAddressBanchiKana==''){
        alert('字・番地等カナ内容を入力してください。')
        return
      }
      if (this.aPLAddressManshon==''){
        alert('マンション名等内容を入力してください。')
        return
      }
      if (this.aPLDaihyoshaYakushoku==''){
        alert('代表者の役職内容を入力してください。')
        return
      }
      if (this.aPLDaihyoshaName==''){
        alert('代表者の氏名内容を入力してください。')
        return
      }
      if (this.region==''){
        alert('セクション番号を選択してください。')
        return
      }
      if (this.aPLCSTEL==''){
        alert('電話番号内容を入力してください。')
        return
      }
      if (this.aPLCSTEL.length != 13){
        alert('電話番号は11桁のはずです。')
        return
      }
      if (this.region=='+86'){
        if (/^1\d{2}-\d{4}-\d{4}$/.test(this.aPLCSTEL)==false){
          alert('正しい形式の電話番号を入力してください。')
          return;
        }
      }
      if (this.region=='+81'){
        if (/^0\d{2}-\d{4}-\d{4}$/.test(this.aPLCSTEL)==false){
          alert('正しい形式の電話番号を入力してください。')
          return;
        }
      }
      if (this.aPLCSFAX==''){
        alert('FAX番号内容を入力してください。')
        return
      }
      if (/^\d{3}-\d{4}-\d{4}$/.test(this.aPLCSFAX)==false){
        alert('FAX番号は11桁数字のはずです。')
        return
      }
      if (this.aPLCSTantoshaMail==''){
        alert('担当者メールアドレス内容を入力してください。')
        return
      }
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.aPLCSTantoshaMail)==false){
        alert('正しい形式のメールアドレスを入力してください。')
        return
      }
      if (this.aPLCSKakuninyoMail==''){
        alert('確認用メールアドレス内容を入力してください。')
        return
      }
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.aPLCSKakuninyoMail)==false){
        alert('正しい形式のメールアドレスを入力してください。')
        return
      }
      if (this.aPLCSKakuninyoMail!=this.aPLCSTantoshaMail){
        alert('確認用メールアドレスは一致するように設定してください。')
        return
      }
      localStorage.setItem('Now',this.Now)
      localStorage.setItem('aPLShinseisyaName',this.aPLShinseisyaName)
      localStorage.setItem('aPLAddressYubinNo3',this.aPLAddressYubinNo3)
      localStorage.setItem('aPLAddressYubinNo4',this.aPLAddressYubinNo4)
      localStorage.setItem('aPLAddressTodofuken',this.aPLAddressTodofuken)
      localStorage.setItem('aPLAddressShikuchoson',this.aPLAddressShikuchoson)
      localStorage.setItem('aPLAddressBanchi',this.aPLAddressBanchi)
      localStorage.setItem('aPLAddressTodofukenKana',this.aPLAddressTodofukenKana)
      localStorage.setItem('aPLAddressShikuchosonKana',this.aPLAddressShikuchosonKana)
      localStorage.setItem('aPLAddressBanchiKana',this.aPLAddressBanchiKana)
      localStorage.setItem('aPLAddressManshon',this.aPLAddressManshon)
      localStorage.setItem('aPLDaihyoshaYakushoku',this.aPLDaihyoshaYakushoku)
      localStorage.setItem('aPLDaihyoshaName',this.aPLDaihyoshaName)
      localStorage.setItem('aPLHojinNo',this.aPLHojinNo)
      localStorage.setItem('aPLTantoshaName',this.aPLTantoshaName)
      localStorage.setItem('region',this.region)
      localStorage.setItem('aPLCSTEL',this.aPLCSTEL)
      localStorage.setItem('aPLCSFAX',this.aPLCSFAX)
      localStorage.setItem('aPLCSTantoshaMail',this.aPLCSTantoshaMail)
      localStorage.setItem('aPLCSKakuninyoMail',this.aPLCSKakuninyoMail)
      sessionStorage.setItem('Now',this.Now)
      sessionStorage.setItem('aPLShinseisyaName',this.aPLShinseisyaName)
      sessionStorage.setItem('aPLAddressYubinNo3',this.aPLAddressYubinNo3)
      sessionStorage.setItem('aPLAddressYubinNo4',this.aPLAddressYubinNo4)
      sessionStorage.setItem('aPLAddressTodofuken',this.aPLAddressTodofuken)
      sessionStorage.setItem('aPLAddressShikuchoson',this.aPLAddressShikuchoson)
      sessionStorage.setItem('aPLAddressBanchi',this.aPLAddressBanchi)
      sessionStorage.setItem('aPLAddressTodofukenKana',this.aPLAddressTodofukenKana)
      sessionStorage.setItem('aPLAddressShikuchosonKana',this.aPLAddressShikuchosonKana)
      sessionStorage.setItem('aPLAddressBanchiKana',this.aPLAddressBanchiKana)
      sessionStorage.setItem('aPLAddressManshon',this.aPLAddressManshon)
      sessionStorage.setItem('aPLDaihyoshaYakushoku',this.aPLDaihyoshaYakushoku)
      sessionStorage.setItem('aPLDaihyoshaName',this.aPLDaihyoshaName)
      sessionStorage.setItem('aPLHojinNo',this.aPLHojinNo)
      sessionStorage.setItem('aPLTantoshaName',this.aPLTantoshaName)
      sessionStorage.setItem('region',this.region)
      sessionStorage.setItem('aPLCSTEL',this.aPLCSTEL)
      sessionStorage.setItem('aPLCSFAX',this.aPLCSFAX)
      sessionStorage.setItem('aPLCSTantoshaMail',this.aPLCSTantoshaMail)
      sessionStorage.setItem('aPLCSKakuninyoMail',this.aPLCSKakuninyoMail)
      //跳转到确认
      this.$router.push({path:'/applicationconfirm'});
    }
  },
  watch:{
    aPLAddressYubinNo3(newValue){
      this.getaddress()
      if (newValue.trim().length != 3 && this.aPLAddressYubinNo3Error.includes('3桁の数字を入力してください。')==false){
        this.aPLAddressYubinNo3Error += '3桁の数字を入力してください。'
      }else if(newValue.trim().length == 3){
        this.aPLAddressYubinNo3Error = this.aPLAddressYubinNo3Error.replace('3桁の数字を入力してください。','')
      }
      if (/[^0-9]/g.test(newValue)&& this.aPLAddressYubinNo3Error.includes('半角数字で入力してください。')==false ){
        this.aPLAddressYubinNo3Error += '半角数字で入力してください。'
      }else if (/[^0-9]/g.test(newValue)==false){
        this.aPLAddressYubinNo3Error = this.aPLAddressYubinNo3Error.replace('半角数字で入力してください。','')
      }
    },
    aPLAddressYubinNo4(newValue){
      this.getaddress()
      if (newValue.trim().length != 4 && this.aPLAddressYubinNo4Error.includes('4桁の数字を入力してください。')==false){
        this.aPLAddressYubinNo4Error += '4桁の数字を入力してください。'
      }else if(newValue.trim().length == 4){
        this.aPLAddressYubinNo4Error = this.aPLAddressYubinNo4Error.replace('4桁の数字を入力してください。','')
      }
      if (/[^0-9]/g.test(newValue)&& this.aPLAddressYubinNo4Error.includes('半角数字で入力してください。')==false ){
        this.aPLAddressYubinNo4Error += '半角数字で入力してください。'
      }else if (/[^0-9]/g.test(newValue)==false){
        this.aPLAddressYubinNo4Error = this.aPLAddressYubinNo4Error.replace('半角数字で入力してください。','')
      }
    },
    aPLCSTEL(newValue){
      if (this.region=='' && this.aPLCSTELError.includes('セクション番号を選択してください。')==false){
        this.aPLCSTELError+='セクション番号を選択してください。'
      }else if (this.region!=''){
        this.aPLCSTELError = this.aPLCSTELError.replace('セクション番号を選択してください。','')
      }
      if (newValue.trim().length != 13 && this.aPLCSTELError.includes('電話番号は11桁のはずです。')==false){
        this.aPLCSTELError += '電話番号は11桁のはずです。'
      }else if(newValue.trim().length == 13){
        this.aPLCSTELError = this.aPLCSTELError.replace('電話番号は11桁のはずです。','')
      }
      if (this.region=='+86'){
        if (/^1\d{2}-\d{4}-\d{4}$/.test(newValue)==false&& this.aPLCSTELError.includes('正しい形式の電話番号を入力してください。')==false ){
          this.aPLCSTELError += '正しい形式の電話番号を入力してください。'
        }else if (/^1\d{2}-\d{4}-\d{4}$/.test(newValue)){
          this.aPLCSTELError = this.aPLCSTELError.replace('正しい形式の電話番号を入力してください。','')
        }
      }
      if (this.region=='+81'){
        if (/^0\d{2}-\d{4}-\d{4}$/.test(newValue)==false&& this.aPLCSTELError.includes('正しい形式の電話番号を入力してください。')==false ){
          this.aPLCSTELError += '正しい形式の電話番号を入力してください。'
        }else if (/^0\d{2}-\d{4}-\d{4}$/.test(newValue)){
          this.aPLCSTELError = this.aPLCSTELError.replace('正しい形式の電話番号を入力してください。','')
        }
      }
      if (newValue.length==4 && newValue[3]!='-'){
        this.aPLCSTEL = newValue.slice(0,3)+'-'+newValue[3]
      }else if (newValue.length==4 && newValue[3]=='-'){
        this.aPLCSTEL = newValue.slice(0,3)
      }
      if (newValue.length==9 && newValue[8]!='-'){
        this.aPLCSTEL = newValue.slice(0,8)+'-'+newValue[8]
      }else if (newValue.length==9 && newValue[8]=='-'){
        this.aPLCSTEL = newValue.slice(0,8)
      }
    },
    region(){
      if (this.region=='' && this.aPLCSTELError.includes('セクション番号を選択してください。')==false){
        this.aPLCSTELError+='セクション番号を選択してください。'
      }else if (this.region!=''){
        this.aPLCSTELError = this.aPLCSTELError.replace('セクション番号を選択してください。','')
      }
    },
    aPLCSFAX(newValue){
      if (/^\d{3}-\d{4}-\d{4}$/.test(newValue)==false && this.aPLCSFAXError.includes('FAX番号は11桁数字のはずです。')==false){
        this.aPLCSFAXError += 'FAX番号は11桁数字のはずです。'
      }else if(/^\d{3}-\d{4}-\d{4}$/.test(newValue)){
        this.aPLCSFAXError = this.aPLCSFAXError.replace('FAX番号は11桁数字のはずです。','')
      }
      if (newValue.length==4 && newValue[3]!='-'){
        this.aPLCSFAX = newValue.slice(0,3)+'-'+newValue[3]
      }else if (newValue.length==4 && newValue[3]=='-'){
        this.aPLCSFAX = newValue.slice(0,3)
      }
      if (newValue.length==9 && newValue[8]!='-'){
        this.aPLCSFAX = newValue.slice(0,8)+'-'+newValue[8]
      }else if (newValue.length==9 && newValue[8]=='-'){
        this.aPLCSFAX = newValue.slice(0,8)
      }
    },
    aPLCSTantoshaMail(newValue){
      this.mailcheck()
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newValue)==false && this.aPLCSTantoshaMailError.includes('正しい形式のメールアドレスを入力してください。')==false){
        this.aPLCSTantoshaMailError += '正しい形式のメールアドレスを入力してください。'
      }else if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newValue)){
        this.aPLCSTantoshaMailError = this.aPLCSTantoshaMailError.replace('正しい形式のメールアドレスを入力してください。','')
      }
    },
    aPLCSKakuninyoMail(newValue){
      this.mailcheck()
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newValue)==false && this.aPLCSKakuninyoMailError.includes('正しい形式のメールアドレスを入力してください。')==false){
        this.aPLCSKakuninyoMailError += '正しい形式のメールアドレスを入力してください。'
      }else if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newValue)){
        this.aPLCSKakuninyoMailError = this.aPLCSKakuninyoMailError.replace('正しい形式のメールアドレスを入力してください。','')
      }
    }
  }
}
</script>

<style>
#newapplytitle{
  display: inline-block;
  opacity: 0.9;
  background-color: #ffffff;
}
#table2{
  opacity: 0.9;
  background-color: #ffffff;
  margin: auto;
  table-layout: fixed;
  word-break: break-all;
  padding:0 50px 0 50px;
}
.table2tr{
  height: 60px;
}
.table2td{
  text-align: left;
  width: 180px;
  vertical-align: top;
}
.input{
  width: 180px;
}
.error{
  color: red;
  font-size: 5px;
}
#aPLCSTELRow{
  height: 120px;
}
#aPLCSTantoshaMailRow{
  height: 100px;
}
#aPLCSKakuninyoMailRow{
  height: 100px;
}
.btn1{
  height: 20px;
  width: 120px;
  background: #2e82ff;
  color: #ffffff;
  font-size: 13px;
  border-radius: 2px;
  border: none;
}

</style>