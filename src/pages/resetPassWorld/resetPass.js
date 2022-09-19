import "./style.css";
import img from "./img1/img.png";
export let resetPass =
  /*html*/
  `<div class="reset_form_dangnhap">
<img class="reset_logo" src="${img}" alt="">
<div class="reset_big_font">Reset your password</div>
<form id="reset-password" class="reset_box">
  
    <div class="email-address">Email address</div>
    <input name ="resetEmail"type="email" class="reset_box_email"class="reset_box_email_password" placeholder="Please enter your email"></input>
    <div id="err-resetEmail"></div>
    <button  class="reset_btn_login reset_box_email">Reset Password</button>


</form>
<button id="login-from__reset"class="reset_box_creat_account">Arearly haver an account? Login here</button>



</div>
`;
// <button  class="reset_btn_login reset_box_email">Reset Password</button>
