import { Palindrom1 } from "../palindrom/Palindrom";
import Perfect from "../perfect/Perfect";
function Buton() {
  function button1() {
    const deger1 = document.querySelector("#input1").value;
    const deger2 = document.querySelector("#input2").value;
    console.log(Palindrom1(deger1, deger2).reverse());
    for (let i of Palindrom1(deger1, deger2).reverse()) {
      document.querySelector("#text1").value += i;
    }
  }
  function button2() {
    const deger1 = document.querySelector("#input1").value;
    const deger2 = document.querySelector("#input2").value;
    for (let i of Perfect(deger1, deger2).reverse()) {
      document.querySelector("#text2").value += i;
    }
  }

  return (
    <div>
      <button onClick={button1}>List palindrome</button>
      <button onClick={button2}>List perfect</button>
    </div>
  );
}
export default Buton;
