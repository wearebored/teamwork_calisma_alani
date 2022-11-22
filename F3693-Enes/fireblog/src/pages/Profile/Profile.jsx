import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VeriOkuma from "../../helpers/VeriOkuma";
import {
  InfoList,
  PhotoDiv,
  ProfileCon,
  ProfileInfo,
  UpdataProf,
} from "./Profile-styled";

function Profile() {
  const [userdata, setUserdata] = useState("");
  const { login } = useSelector((s) => s.login);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [güncelleme, setGüncelleme] = useState(false);
  const data = { name, gender, email, age };
  console.log(userdata);
  console.log(güncelleme);
  // --------------------------------------------
  const [image, setImage] = useState(
    "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  );
  const url = "https://picsum.photos/1600/900";
  // ----------------------------------
  const güncelle = () => {
    userdata.fullname && setName(userdata?.fullname);
    userdata.gender && setGender(userdata?.gender);
    userdata.email && setEmail(userdata?.email);
    userdata.age && setAge(userdata?.age);
  };

  useEffect(() => {
    VeriOkuma("kullanici", login, setUserdata);
  }, [login]);

  console.log(userdata);
  return (
    <div>
      <ProfileCon>
        <PhotoDiv store={image ? image : url}></PhotoDiv>
        <ProfileInfo>
          <InfoList>
            <li>Name</li>
            <li>Gender</li>
            <li>Age</li>
            <li>Email </li>
          </InfoList>
          <InfoList>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={name}
                  placeholder="update your information..."
                  type="text"
                />
              ) : userdata.fullname ? (
                userdata.fullname
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setGender(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={gender}
                  placeholder="update your information..."
                  type="text"
                />
              ) : userdata.gender ? (
                userdata.gender
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={age}
                  placeholder="update your information..."
                  type="number"
                />
              ) : userdata.age ? (
                userdata.age
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={email}
                  placeholder="update your information..."
                  type="text"
                />
              ) : userdata.email ? (
                userdata.email
              ) : (
                <div>update your information...</div>
              )}
            </li>
          </InfoList>
        </ProfileInfo>
        <UpdataProf>
          <button
            onClick={() => {
              setUpdate(!update);
              update || güncelle();
              setGüncelleme(false);
            }}
          >
            {update ? "SAVE" : "UPDATE"}
          </button>
          {/* {update && (
            <button
              onClick={() => {
                setUpdate(!update);
              }}
            >
              CANCEL
            </button>
          )} */}
        </UpdataProf>
      </ProfileCon>
    </div>
  );
}

export default Profile;
