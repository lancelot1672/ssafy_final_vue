<template>
  <div class="join">
      <div class="form-box">
        <h1>다나와 홈즈</h1>
        <form name="memberForm" action="/member" method="post">
          <p>
            <label for="userid">아이디</label> <br> <v-text-field type="text"
              v-model="user.userid" placeholder="아이디(8~20자)" />
          </p>
          <div id="idValid"></div>
          <p>
            <label for="pw">비밀번호</label> <br>           
            <v-text-field type="password"
              v-model="user.userpw" placeholder="(대문자, 소문자, 특수문자 8~20자리)"/>
          </p>
          <div id="pwValid"></div>
          
          <p>
            <label for="pwConfirm">비밀번호 확인</label> <br> <v-text-field
              type="password" v-model="user.userpw2"
              placeholder="비밀번호 확인"/>
              </p>
          <div id="pwConfirmValid"></div>
          
          <p>
            <label for="username">이름</label> <br> 
            <v-text-field type="text"
              name="username" v-model="user.username"/>
          </p>
          <div id="nameConfirmValid"></div>
  
          <p>
            <label for="userage">나이</label> <br> <v-text-field type="text"
              v-model="user.age" placeholder="나이" />
          </p>
          <div id="ageConfirmValid"></div>
  
          <p>
            <label for="userphone">휴대전화</label> <br> <v-text-field type="text"
              v-model="user.phone" placeholder="휴대전화" />
          </p>
          <div id="phoneConfirmValid"></div>
  
          <button type="submit" id="joinBtn" >회원가입</button>
        </form>
      </div>
  </div>
  
  </template>
  
  <script>
  import { mapActions } from "vuex";
  export default {
    data(){
      return {
        user :{
          userid:null,
          userpw:null,
          userpw2:null,
          phone:null,
          age : null,
        }
      }
    },
    methods :{
      ...mapActions(["userConfirm","getUserInfo"]),
    }
  }
  </script>
  
  <style scope>
  .join {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 1000px;
      background-color: white;
      margin: 0px auto;
      -webkit-animation: fadein 1s;
  }
  @keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  .form-box {
      width: 300px;
      flex-direction: row;
      margin: 50px 80px;
  }
  .form-box h1{
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      color: rgb(229, 115, 115);
      font-size: 30px;
      font-weight: bold;
  }
  
  #joinBtn, #loginBtn{
      width: 300px;
      height: 50px;
      margin-top: 10px;
      font-size: 20px;
  }
  #joinLink {
      font-size: 18px;
      color: black;
      transition: all .2s;
      text-decoration: underline;
  }
  #joinLink:hover {
      font-size: 20px;
      font-weight: 500;
  }
  #backBtn {
      color: rgb(229, 115, 115);
  }
  
  </style>