import { doc, getDoc } from 'firebase/firestore';
import db from '../utils/firebase';

export const fetchFooterData = async () => {
  try {
    // Buscar dados do Firestore
    const docRef = doc(db, "footerData_contabilidade", "links");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const links = Object.keys(docSnap.data()).map(key => ({
      id: key,
      ...docSnap.data()[key]
    }));

    const socialRef = doc(db, "footerData_contabilidade", "socialButtons");
    const socialSnap = await getDoc(socialRef);

    if (!socialSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const socialButtons = Object.keys(socialSnap.data()).map(key => ({
      id: key,
      ...socialSnap.data()[key]
    }));

    const bigButtonRef = doc(db, "footerData_contabilidade", "bigButton");
    const bigButtonSnap = await getDoc(bigButtonRef);

    if (!bigButtonSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const dividerRef = doc(db, "footerData_contabilidade", "divider");
    const dividerSnap = await getDoc(dividerRef);

    if (!dividerSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    const logoRef = doc(db, "footerData_contabilidade", "logo");
    const logoSnap = await getDoc(logoRef);

    if (!logoSnap.exists()) {
      console.log("No such document!");
      return null;
    }

    return {
      links,
      socialButtons,
      logo: logoSnap.data(),
      bigButton: bigButtonSnap.data(),
      divider: dividerSnap.data()
    };
  } catch (error) {
    console.error("Error fetching footer data: ", error);
    return null;
  }
};
