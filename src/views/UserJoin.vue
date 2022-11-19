<template>
<div class="container">
		<a href="/" id="backBtn">◀</a>
		<div class="form-box">
			<h1>다나와 홈즈</h1>
			<form name="memberForm" action="/member" method="post">
				<input type="hidden" name="action" value="join">
				<p>
					<label for="userid">아이디</label> <br> <input type="text"
						v-model="user.userid" placeholder="아이디(8~20자)">
				</p>
        <div id="idValid"></div>
				<p>
					<label for="pw">비밀번호</label> <br> <input type="password"
						v-model="user.userpw" placeholder="비밀번호 (대문자, 소문자, 특수문자 8~20자리)">
				</p>
        <div id="pwValid"></div>
				
				<p>
					<label for="pwConfirm">비밀번호 확인</label> <br> <input
						type="password" v-model="user.userpw2"
						placeholder="비밀번호 확인">
            </p>
				<div id="pwConfirmValid"></div>
				
				<p>
					<label for="username">이름</label> <br> 
          <input type="text"
						name="username" v-model="user.username">
				</p>
				<div id="nameConfirmValid"></div>

				<p>
					<label for="userage">나이</label> <br> <input type="text"
						v-model="user.age" placeholder="나이">
				</p>
				<div id="ageConfirmValid"></div>

				<p>
					<label for="userphone">휴대전화</label> <br> <input type="text"
						v-model="user.phone" placeholder="휴대전화">
				</p>
				<div id="phoneConfirmValid"></div>

				<button type="submit" id="joinBtn" >회원가입</button>
			</form>
		</div>
</div>

</template>

<script>
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
  }
}
</script>

<style scope>
.container {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 1000px;
    background-color: white;
    margin: 0px auto;

}
.container a{
    text-decoration: none;
    font-size: 30px;
    color: black;
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
    color: rgb(255,127,0);
    font-size: 30px;
    font-weight: bold;
}
input {
    border: 0px;
    border-bottom: 1px solid black;
    width: 300px;
    height: 50px;
    
}
input:focus {
    outline: none;

    border-bottom: 1px solid black;
}
input:valid{
    background-color: white;
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
    color: rgb(255,127,0);
}

</style>