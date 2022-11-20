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

function Card({e}) {
  console.log(e);
  return (
    <CardCon>
      <CardImage>
        <img
          src={e.url}
          alt={e.title}
        />
      </CardImage>
      <CardData>
        <h4>{e.title}</h4>
        <span>13.23.2022</span>
        <p>
         {e.content}
        </p>
      </CardData>
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
    </CardCon>
  );
}

export default Card;
