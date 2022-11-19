import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VeriOkuma from "../../helpers/VeriOkuma";
import { PhotoDiv, ProfileCon, ProfileInfo } from "./Profile-styled";

function Profile() {
  const [userdata, setUserdata] = useState("");
  const { login } = useSelector((s) => s.login);
  useEffect(() => {
    VeriOkuma("kullanici", login, setUserdata);
  }, [login]);
  console.log(userdata);
  return (
    <div>
      <ProfileCon>
        <PhotoDiv></PhotoDiv>
        <ProfileInfo>
          <p>name={userdata.fullname}</p>
          <p>gender={userdata.gender}</p>
          <p>age={userdata.age}</p>
          <p>address ={userdata.email}</p>
        </ProfileInfo>
      </ProfileCon>
    </div>
  );
}

export default Profile;
