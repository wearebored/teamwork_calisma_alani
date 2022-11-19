import {
  ImgDiv,
  LoginBloc,
  LoginCon,
  LoginInput,
} from "../Login/login-stayled";


function Register() {
  return (
    <LoginCon>
      <LoginBloc>
        <ImgDiv>
          <img src="images/blok.png" alt="" />
        </ImgDiv>
        <h3>Register</h3>

        <LoginInput>
          <label htmlFor="fullname">Fullname</label>
          <input placeholder="Fullname" id="fullname" type="text" />
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="famale">Famale</option>
          </select>
          <label htmlFor="age">Age</label>
          <input placeholder="Age" id="age" type="number" />
          <label htmlFor="email">Email</label>
          <input placeholder="Email" id="email" type="text" />
          <label htmlFor="password">Password</label>
          <input placeholder="Password" id="password" type="text" />

          <button id="google">REGISTER</button>
          <button>
            {"WITH"}
            <img src="images/google.png" alt="" />{" "}
          </button>
          <button>LOGIN</button>
        </LoginInput>
      </LoginBloc>
    </LoginCon>
  );
}

export default Register;
