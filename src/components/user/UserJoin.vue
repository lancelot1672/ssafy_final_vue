<template>
  <div class="join">
    <div class="form-box">
      <h1>다나와 홈즈</h1>
      <form name="memberForm" action="/member" method="post">
        <v-text-field type="text" v-model="user.userid" label="ID" placeholder="아이디(8~20자)" />

        <div id="idValid"></div>

        <v-text-field
          type="password"
          v-model="user.userpw"
          label="Password"
          placeholder="(대문자, 소문자, 특수문자 8~20자리)"
          autocomplete="new-password"
        />

        <div id="pwValid"></div>

        <v-text-field
          type="password"
          v-model="user.userpw2"
          label="Password Confirm"
          placeholder="(대문자, 소문자, 특수문자 8~20자리)"
          autocomplete="off"
        />

        <div id="pwConfirmValid"></div>

        <v-text-field type="text" v-model="user.username" label="Name" />

        <div id="nameConfirmValid"></div>

        <v-text-field type="text" v-model="user.age" label="Age" placeholder="나이" />

        <div id="ageConfirmValid"></div>

        <v-text-field type="text" v-model="user.phone" label="Phone" placeholder="010-0000-0000" />
        <div id="phoneConfirmValid"></div>

        <v-btn type="submit" id="joinBtn">회원가입</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        userid: null,
        userpw: null,
        userpw2: null,
        phone: null,
        age: null,
      },
    };
  },
  methods: {
    ...mapActions(["userConfirm", "getUserInfo"]),
  },
};
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
.form-box h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  color: rgb(229, 115, 115);
  font-size: 30px;
  font-weight: bold;
}

#joinBtn,
#loginBtn {
  width: 300px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
}
#joinLink {
  font-size: 18px;
  color: black;
  transition: all 0.2s;
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
