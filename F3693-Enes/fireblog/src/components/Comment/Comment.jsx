import { UserIcon } from "../Card/Card-styled";
import {
  MeDiv,
  OptionContainer,
  OptionIcon,
  OptionListe,
  YorumCon,
  YorumEmail,
} from "./Comment-styled";
function Comment() {
  return (
    <YorumCon>
      <YorumEmail>
        <UserIcon />
        <p></p>

        <OptionContainer
          // onMouseOut={() => {
          //   setOption(false);
          // }}
          // onMouseOver={() => {
          //   setOption(true);
          // }}
        >
          <OptionIcon />

          <OptionListe>
            <li>Edit</li>
            <li>Delete</li>
          </OptionListe>
        </OptionContainer>
      </YorumEmail>
      <MeDiv>
        <div>
          <textarea type="text" />
          <div className="buttons">
            <button>SEND</button>
            <button className="cancel">CANCEL</button>
          </div>
        </div>

        <p></p>
      </MeDiv>
    </YorumCon>
  );
}

export default Comment;
