import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebase";

export const fetchImageButtonById = async (id: string) => {
  const docRef = doc(db, "imageButton_contabilidade", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    data.topics = Object.values(data.topics); 

    return data;
  } else {
    console.log("No such document! image");
    return null;
  }
};
