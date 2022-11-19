import Card from "../Card/Card";
import Comment from "../Comment/Comment";
import { ModalDiv, Modals, Yorumlar } from "./Modal-styled";

function Modal() {
  return (
    <ModalDiv>
      <Modals>
        <Card></Card>
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
