
function App() {
  const num1= 0
  const num2 = 100
  let asal=[]
  let perfect=[]
  for(let i =59;i<=num2;i++){
    let sayac=0
    for(let a=2;a<i;a++){
      
      if(i%a==0){
        sayac++
      }

    }
    if(sayac==0){
      asal.push(i)
    }


  }
  console.log(asal)

  // return (
  //   <div className="App">
      
  //   </div>
  // );
}

export default App;
