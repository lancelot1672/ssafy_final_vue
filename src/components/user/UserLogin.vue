<template>
<!-- 로그인폼 시작 -->
	<div class="login-wrapper">
		<div class="login_content">
			<div class="logo-section">
				<a class="logo" href="/">
					<span style="color : rgb(255,127,0); font-size: 30px; font-weight: bold;"> 구해줘 홈즈!! </span>
				</a>
			</div>

			<form class="loginFrm" name="loginFrm" action="/"
				method="post">
				<div>
					<h3 class="login_title">
						<label for="memberId">아이디</label>
					</h3>
					<input type="text" id="memberId" name="memberId" placeholder="아이디" />

				</div>

				<div>
					<h3 class="login_title">
						<label for="password">비밀번호</label>
					</h3>
					<input type="password" id="password" name="password"
						placeholder="비밀번호" />
				</div>

				<div class="login_btn_area">
					<button type="submit" class="login">로그인</button>
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
export default {

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