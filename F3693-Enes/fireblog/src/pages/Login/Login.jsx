import { ImgDiv, LoginBloc, LoginCon, LoginInput } from "./login-stayled";

function Login() {
  return (
    <LoginCon>
      <LoginBloc>
        <ImgDiv>
          <img src="images/blok.png" alt="" />
        </ImgDiv>
        <h3>Login</h3>
        <LoginInput>
          <label htmlFor="email">Email</label>
          <input placeholder="Email" id="email" type="text" />
          <label htmlFor="password">Password</label>
          <input placeholder="Password" id="password" type="text" />
          <button id="google" >LOGIN</button>
          <button  >
            {"WITH"}
            <img src="images/google.png" alt="" />{" "}
          </button>
        </LoginInput>
      </LoginBloc>
    </LoginCon>
  );
}

export default Login;
