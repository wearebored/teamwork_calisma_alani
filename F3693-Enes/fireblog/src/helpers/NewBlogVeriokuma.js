import { getDatabase, ref, child, get } from "firebase/database";

 
 function NewBlogVeriokuma(container, userId, setCounter) {
   const dbRef = ref(getDatabase());
   get(child(dbRef, `${container}/${userId}`))
     .then((snapshot) => {
       if (snapshot.exists()) {
         setCounter(snapshot.val().length-1);
         // console.log(snapshot.val());
       } else {
         setCounter(-1);
         console.log("No data available");
       }
     })
     .catch((error) => {
       console.error(error);
     });
 }
 
 export default NewBlogVeriokuma