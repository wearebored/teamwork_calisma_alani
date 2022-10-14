export function Palindrom1(a, b) {
  const num1 = a;
  const num2 = b;
  let sayılar = [];
  let palindrom = [];
  for (let i = num1; i <= num2; i++) {
    sayılar.push(i);
  }
  for (let i of sayılar) {
    if (i == i.toString().split("").reverse().join("")) {
      palindrom.push(i);
      palindrom.push("\n");
    }
  }
  palindrom.pop()
  return palindrom;
}
export function Palindrom2(a, b) {
  const num1 = a;
  const num2 = b;
  let sayılar = [];
  let palindrom = [];
  for (let i = num1; i <= num2; i++) {
    sayılar.push(i);
  }

  for (let i of sayılar) {
    if (i.toString()[0] == i % 10) {
      palindrom.push(i);
      palindrom.push("\n");
    }
  }
  return palindrom;
}
