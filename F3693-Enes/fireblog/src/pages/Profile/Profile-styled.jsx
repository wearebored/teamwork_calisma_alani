import styled from "styled-components";

export const ProfileCon = styled.div`
  background-color: #5ef4ff;
  width: 40rem;
  height: 40rem;
  margin: auto;
  margin-top: 10rem;
  border-radius: 10px;
  border: solid 2px black;
`;
export const PhotoDiv = styled.div`
  background-color: red;
  width: 12rem;
  height: 12rem;
  margin: auto;
  border-radius: 50%;
  transform: translateY(-6rem);
  border: solid 5px white;
  outline-style: dotted;
  outline-color: #000000;
  background-image: url("https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg");
  background-size: cover;
  background-position: center;
`;
export const ProfileInfo = styled.div`
  margin: auto;
  padding-left: 5rem;
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
