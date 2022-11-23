import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Messageekleme from "../../helpers/Messageveri/Messageekleme";
import Card from "../Card/Card";
import Comment from "../Comment/Comment";
import { ModalClose, ModalDiv, Modals, Yorumlar } from "./Modal-styled";

function Modal() {
  const { modaldata } = useSelector((s) => s.modal);
  const [data, setData] = useState("");
  useEffect(() => {
    Messageekleme(modaldata, setData);
  }, []);

  console.log(modaldata);
  console.log(data);
  return (
    <ModalDiv>
      <Modals>
        <Card id={modaldata} veri={data} />
        <ModalClose></ModalClose>
        {/* <ModalClose onClick={() => dispatch(setModal())}>X</ModalClose> */}
        <Yorumlar>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </Yorumlar>
      </Modals>
    </ModalDiv>
  );
}

export default Modal;
