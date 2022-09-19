import "./style.css";
// import img from "./img1/img.png"
export let loginPage = /*html*/ `
<div class="form_dangnhap">
<img class="logo" src="https://tuyendung.rikkeisoft.com/assets/front/images/logoRikkeisoft.png" alt="">
<div class="big_font">Sign in to Rikkei Chat</div>
<form class="box" id = "login-form">
  <div class="box_email_password">
    <div class="">Email address</div>
    <input style="color:black" name="email" type="email" class="box_email" placeholder="Please enter your email">
    <div id="errLogin"></div>
    <div class="">Password</div>
    

    <input style="color:black"class="box_password box_email" placeholder="Please enter your password" type="passwold" name="password">
    <div id="errLogin1"></div>
  </div>
  <button class="btn_login box_email">Login</button>
  
</form>
<button  id="create-accout_from_login"class="box_creat_account">New to Rikkei Chat?Create an account</button>

<div id="reset-password__from_login" class="forget_passwold">
  <p id="reset-hover" href="">Forget your passwold? Click here</p>
</div>
</div>`;
