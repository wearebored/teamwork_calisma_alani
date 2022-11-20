import { getDatabase, ref, set } from "firebase/database";

export function VeriEkleme(data, userId, container, navigate, counter) {
  const db = getDatabase();

  set(ref(db, `${container}/data/${counter + 1}`), {
    ...data,
    userId,
    date: "123213",
  });

  navigate("/");
}
