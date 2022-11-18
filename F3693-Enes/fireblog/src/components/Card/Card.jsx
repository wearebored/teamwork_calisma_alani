import { CardCon, CardData, CardImage, CardLike } from "./Card-styled"


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
        <h3>PostgreSQL</h3>
        <span>13.23.2022</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores aliquam ipsam molestias minima suscipit!</p>
      </CardData>
      <CardLike></CardLike>
    </CardCon>
  );
}

export default Card