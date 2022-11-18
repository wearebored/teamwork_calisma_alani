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

function Card() {
  return (
    <CardCon>
      <CardImage>
        <img
          src="https://lh3.googleusercontent.com/-v5LSZJbYI7E/YFdIchHdrnI/AAAAAAAAml0/hAwPRbMOpmEtd-0VA27zB4GS9O0a2kUzQCLcBGAsYHQ/image.png"
          alt=""
        />
      </CardImage>
      <CardData>
        <h4>PostgreSQL</h4>
        <span>13.23.2022</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores
          aliquam ipsam molestias minima suscipifeeeeeeeeeefesfsf
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
