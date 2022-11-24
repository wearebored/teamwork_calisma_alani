import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CardLike,
  EmailDiv,
  LikeIcon,
  Messagdiv,
  MessageIcon,
  UserIcon,
} from "../../components/Card/Card-styled";
import Messageekleme from "../../helpers/Messageveri/Messageekleme";
import { DetailsCom, DetailsInfo, Kapsayici } from "./Details-styled";

function Details() {
  const { state } = useLocation();
  const [data, setData] = useState("");

  useEffect(() => {
    Messageekleme(state, setData);
  }, [state]);
  console.log(data);

  return (
    <DetailsCom>
      <h2>Details</h2>
      <Kapsayici>
        <img
          src={data.url}
          alt={data.url}
        />
        <DetailsInfo>
          <h5>{data.title}</h5>
          <span>{data.date.slice(0,10)}</span>
          <p>
            {data.content}
          </p>
        </DetailsInfo>
        <CardLike>
          <EmailDiv>
            <UserIcon />
            <p>{data.email}</p>
          </EmailDiv>
          <Messagdiv>
            <LikeIcon />
            <p>
             
              <sup>{data.like.likesayac}</sup>
            </p>
            <MessageIcon />
            <p>
              <sup>{data.yorum.yorumsayac}</sup>
            </p>
          </Messagdiv>
        </CardLike>
      </Kapsayici>
      <div className="buttoncon">
        <button>UPDATE</button>
        <button className="delete">DELETE</button>
      </div>
    </DetailsCom>
  );
}

export default Details;
