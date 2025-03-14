import db from '../utils/firebase'; // Ajuste o caminho conforme necessário
import { getDoc, doc } from 'firebase/firestore';

export const fetchPricesData = async () => {

  try {
    const docRef = doc(db, "planos", "quadro");
    const quadroSnap = await getDoc(docRef);

    if (!quadroSnap.exists()) {
      console.log("No such document for quadro!");
      return null;
    }

    const quadroData = quadroSnap.data();

    const precosRef = doc(db, "planos", "precos");
    const precosSnap = await getDoc(precosRef);

    if (!precosSnap.exists()) {
      console.log("No such document for precos!");
      return null;
    }

    const precosData = precosSnap.data();

    const plans = Object.keys(precosData).map(key => ({
      ...precosData[key],
      features: Object.values(precosData[key].features)
    }));

    const result = {
      plans,
      ...quadroData
    };
    
    return result;
  } catch (error) {
    console.error("Error fetching pricing data: ", error);
    return null;
  }
};
