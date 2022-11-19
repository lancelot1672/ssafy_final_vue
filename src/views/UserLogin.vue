<template>
<!-- 로그인폼 시작 -->
	<div class="login-wrapper">
		<div class="login_content">
			<div class="logo-section">
				<a class="logo" href="/">
					<span style="color : rgb(255,127,0); font-size: 30px; font-weight: bold;"> 다나와 홈즈 </span>
				</a>
			</div>

			<form class="loginFrm" v-on:submit.prevent>
				<div>
					<h3 class="login_title">
						<label for="memberId">아이디</label>
					</h3>
					<input type="text" v-model="user.userid" @keyup.enter="confirm" placeholder="아이디" />

				</div>

				<div>
					<h3 class="login_title">
						<label for="password">비밀번호</label>
					</h3>
					<input type="password" v-model="user.userpw" @keyup.enter="confirm"
						placeholder="비밀번호" />
				</div>

				<div class="login_btn_area">
					<button type="submit" class="login" @click="confirm">로그인</button>
				</div>
			</form>
			<div class="service">
				<ul>
					<li><a href="/member?action=join"> 회원가입 </a></li>
					<li><a href="/member?action=findId">아이디 찾기</a></li>
					<li><a href="/member?action=findPw">비밀번호 찾기</a></li>
				</ul>
			</div>

		</div>
	</div>

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
	
	data(){
		return {
			user:{
				userid : null,
				userpw : null,
			}
		}
	},
	computed: {
    ...mapState(["isLogin", "isLoginError", "userInfo"]),
},
	methods:{
		...mapActions(["userConfirm", "getUserInfo"]),
		async confirm(){
			//로그인 버튼 클릭시 이벤트
			//비동기 호출
			await this.userConfirm(this.user);

			//토큰 가져오기
			let token = sessionStorage.getItem("access-token");
			console.log(token);

			//발급 받은 토큰을 통해 비동기로 데이터 요청
			if(this.isLogin){
				await this.getUserInfo(token);
				this.$router.push({ name: "main" });
			}
			
		}
	}
}
</script>

<style scope>
form {
	margin-bottom: 0px;
}

#logo {
	width: 220px;
	height: 100px;
	cursor: pointer;
}

#header {
	padding-top: 70px;
	padding-bottom: 15px;
	text-align: center;
}

.login-wrapper {
	margin-top: 100px;
	position: relative;
	height: 100%;
}

.login_content {
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	width: 360px;
}

h3 {
	margin: 30px 0 10px;
	font-size: 16px;
	font-weight: 700;
}

input {
	width: 100%;
	height: 50px;
	padding: 10px 14px 10px 14px;
	box-sizing: border-box;
	position: relative;
	font-size: 15px;
	border-radius: 5px;
	border: 2px solid rgb(224, 224, 224);
}

input ::placeholder {
	color: rgb(94, 94, 94);
}

.login_btn_area {
	margin: 30px 0 0px;
}

.login {
	width: 100%;
	padding: 21px 0 17px;
	border: 0;
	border-radius: 5px;
	cursor: pointer;
	color: black;
	background-color: rgb(224, 224, 224);
	font-size: 20px;
	font-weight: 400;
}

.service {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 15px;
}

a {
	text-decoration: none;
	color: black;
	margin: 0px 10px;
}

.service>ul {
	padding: 0px;
}

.service>ul>li {
	display: inline-block;
}

.service>ul>li::after {
	color: rgb(224, 224, 224);
	content: "|";
	font-weight: 600;
}

.service>ul>li:last-child::after {
	content: "";
}

.logo-section {
	text-align: center;
}

</style>