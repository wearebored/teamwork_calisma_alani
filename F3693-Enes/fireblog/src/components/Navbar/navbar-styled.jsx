import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
export const NavbarCon = styled.div`
  background-color: #017a8f;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 3rem;
    margin-left: 1rem;
  }
  h1 {
    color: white;
  }
`;
export const IconDiv = styled(FaUserCircle)`
  font-size: 1.8rem;
  margin-right: 1rem;
  color: white;
`;
