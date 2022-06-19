import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../API/firebaseconfig";

const addUserToDB = async (username, uid) => {
  const isFoundUser = doc(db, "Users", uid);
  const userDoc = await getDoc(isFoundUser);
  if (userDoc.exists()) return;

  try {
    await setDoc(doc(db, "Users", uid), {
      Username: username,
      invoiceList: [],
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default addUserToDB;
