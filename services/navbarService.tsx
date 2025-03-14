// services/NavbarService.ts
import db from '../utils/firebase'; // Ajuste o caminho conforme necessário
import { getDoc, doc } from 'firebase/firestore';

export const fetchNavbarData = async () => {
  try {
    const docRef = doc(db, "navbarlinks_contabilidade", "links");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const links = Object.keys(docSnap.data()).map(key => ({
      id: key,
      ...docSnap.data()[key]
    }));

    const logoRef = doc(db, "navbarlinks_contabilidade", "logo");
    const logoSnap = await getDoc(logoRef);

    if (!logoSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const socialRef = doc(db, "navbarlinks_contabilidade", "bottons");
    const socialSnap = await getDoc(socialRef);

    if (!socialSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    return {
      links,
      logos: logoSnap.data(),
      buttons: socialSnap.data()
    };
  } catch (error) {
    console.error("Error fetching navbar data: ", error);
    return null;
  }
};
