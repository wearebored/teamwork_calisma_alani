import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #00000075;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`;
export const Modals = styled.div`
  background-color: #fdff91;
  width: 50rem;
  height: max-content;
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* gap: 1rem; */
  border-radius: 10px;
`;
export const Yorumlar = styled.div`
  width: 100%;
  /* height: max-content; */
  /* background-color: red; */
  margin: 2rem;
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;
export const ModalClose = styled.button`
  background-color: red;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px gray;
`;
