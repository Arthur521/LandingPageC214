import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebase";

export const fetchTextoComImagemById = async (id: string) => {
  const docRef = doc(db, "textoComImagem_contabilidade", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};
