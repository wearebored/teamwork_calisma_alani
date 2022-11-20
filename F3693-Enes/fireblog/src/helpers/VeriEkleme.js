import { getDatabase, ref, set } from "firebase/database";



export function VeriEkleme(data, userId, container, navigate, counter) {
  const db = getDatabase();

  set(ref(db, `${container}/${userId}/${counter + 1}`), {
    ...data,
  });

  navigate("/");
}
