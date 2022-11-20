import { getDatabase, ref, set } from "firebase/database";

const database = getDatabase();

export function writeUserData(data, userId, container) {
  const db = getDatabase();
  console.log("object");
  set(ref(db, `${container}/` + userId), {
    ...data,
  });
}

function LiveData() {}

export default LiveData;
