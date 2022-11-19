import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFireBase from "../../helpers/RegisterFireBase";
import {
  ImgDiv,
  LoginBloc,
  LoginCon,
  LoginInput,
} from "../Login/login-stayled";


function Register() {
  const [fullname,setFullname]=useState("")
  const [gender, setGender] = useState("gender")
  const [age,setAge]= useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()
  const data = [fullname,gender,age]
  console.log(data);
  return (
    <LoginCon>
      <LoginBloc>
        <ImgDiv>
          <img src="images/blok.png" alt="" />
        </ImgDiv>
        <h3>Register</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <LoginInput>
          <label htmlFor="fullname">Fullname</label>
          <input
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullname}
            placeholder="Fullname"
            id="fullname"
            type="text"
          />
          <label htmlFor="gender">Gender</label>
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
            name="gender"
            id="gender"
          >
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="famale">Famale</option>
          </select>
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
            placeholder="Age"
            id="age"
            type="number"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            id="email"
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            id="password"
            type="text"
          />

          <button
            disabled={!fullname ? true : gender === "gender"?true:!age?true:!email?true:password.length>=6?false:true}
            onClick={() => {
              RegisterFireBase(email, password, data, setError, navigate);
            }}
            id="google"
          >
            REGISTER
          </button>
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
