function Perfect(a, b) {
  const num1 = a;
  const num2 = b;
  let asal = [];
  let perfect = [];
  let cikti = [];
  for (let i = 2; i <= num2; i++) {
    let sayac = 0;
    for (let a = 2; a < i; a++) {
      if (i % a == 0) {
        sayac++;
      }
    }
    if (sayac == 0) {
      asal.push(i);
    }
    if (asal.length == num2.toString().length) {
      break;
    }
  }
  for (let i of asal) {
    const formul = 2 ** (i - 1) * (2 ** i - 1);
    perfect.push(formul);
  }
  for (let i of perfect) {
    if (i >= num1 && i <= num2) {
      cikti.push(i);
      cikti.push("\n");
    }
  }
  cikti.pop();
  return cikti;
}
export default Perfect;
