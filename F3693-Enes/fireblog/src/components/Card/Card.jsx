import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Likeveri from "../../helpers/Cardveri/Likeveri";
import {
  CardCon,
  CardData,
  CardImage,
  CardLike,
  EmailDiv,
  LikeIcon,
  Messagdiv,
  MessageIcon,
  UserIcon,
} from "./Card-styled";

function Card({ id, veri }) {
  const { email } = useSelector((s) => s.login);
  const [like, setLike] = useState(false);
  const [keyler, setKeyler] = useState("");

  const likegüncel = () => {
    if (veri.like.likes) {
      let sayac = 0;
      Object.keys(veri.like.likes).map((e) => {
        veri.like.likes[e].indexOf(email) > -1 && sayac++;
        veri.like.likes[e].indexOf(email) > -1 && setKeyler(e);
      });
      console.log(sayac);
      sayac > 0 ? setLike(true) : setLike(false);
    } else {
      setLike(false);
    }
  };

  useEffect(() => {
    likegüncel();
  }, [veri]);

  // console.log(id);
  console.log(veri);

  return (
    <CardCon>
      <CardImage>
        <img src={veri.url} alt={veri.title} />
      </CardImage>
      <CardData>
        <h4>{veri.title}</h4>
        <span>{veri.date.slice(0, 10)}</span>
        <p>{veri.content}</p>
      </CardData>
      <CardLike>
        <EmailDiv>
          <UserIcon />
          <p>{veri.email}</p>
        </EmailDiv>
        <Messagdiv>
          <LikeIcon
            onClick={() => {
              setLike(!like);
              Likeveri({ id, email, like, keyler,likesayac:veri.like.likesayac });
            }}
            state={like ? "#ff0000" : "#6e6e6e"}
          />
          <p>
            <sup>{veri.like.likesayac}</sup>
          </p>
          <MessageIcon />
          <p>
            <sup>{veri.yorum.yorumsayac}</sup>
          </p>
        </Messagdiv>
      </CardLike>
    </CardCon>
  );
}

export default Card;
