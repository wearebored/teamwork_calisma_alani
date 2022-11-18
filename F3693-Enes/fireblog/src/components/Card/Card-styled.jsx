import styled from "styled-components";

export const CardCon = styled.div`
  /* background-color: red; */
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
`;
export const CardImage = styled.div`
  background-color: green;
  overflow: hidden;
  height: 45%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
  }
`;
export const CardData = styled.div`
  background-color: #cbffff;
  height: 30%;
  padding: 0.5rem;
  width: 25rem;
  

  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;

  h3 {
    color: #009ad6;
  }
  p {
    text-overflow: ellipsis;
  }
`;
export const CardLike = styled.div`
  background-color: black;
  height: 25%;
`;
