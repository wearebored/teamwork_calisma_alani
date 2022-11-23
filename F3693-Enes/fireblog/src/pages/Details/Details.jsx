import { CardLike, EmailDiv, LikeIcon, Messagdiv, MessageIcon, UserIcon } from "../../components/Card/Card-styled";
import { DetailsCom, DetailsInfo, Kapsayici } from "./Details-styled"


function Details() {
  return (
    <DetailsCom>
      <h2>Details</h2>
      <Kapsayici>
        <img
          src="https://www.ahtapotyazilim.com/wp-content/uploads/2021/10/react-js.jpg"
          alt=""
        />
        <DetailsInfo>
          <h5>NodeJS</h5>
          <span>05.3.2022</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, doloribus quas? Odit deserunt quos ratione quasi, hic
            qui. Odio dolor temporibus, a repellendus illo nemo quo sit ab
            placeat officiis, neque ipsa. Excepturi, dignissimos quos odio quasi
            dolores animi provident!
          </p>
        </DetailsInfo>
        <CardLike>
          <EmailDiv>
            <UserIcon />
            <p>enes@gmail.com</p>
          </EmailDiv>
          <Messagdiv>
            <LikeIcon />
            <p>
              {" "}
              <sup>5</sup>{" "}
            </p>
            <MessageIcon />
            <p>
              <sup>6</sup>
            </p>
          </Messagdiv>
        </CardLike>
      </Kapsayici>
      <div className="buttoncon" >
       <button>UPDATE</button>
       <button className="delete">DELETE</button>

      </div>
    </DetailsCom>
  );
}

export default Details