import styled from "styled-components";

export const HomeCon = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1rem 7rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;
export const Cards = styled.div`
  background-color: aqua;
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  div {
    background-color: red;
    width: 20rem;
    height: 20rem;
  }
`;
