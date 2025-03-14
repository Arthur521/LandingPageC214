import db from '../utils/firebase'; // Ajuste o caminho conforme necessário
import { getDocs, collection } from 'firebase/firestore';

export const fetchTestimonialData = async () => {

  try {
    const testimonialsRef = collection(db, "testemunhos");
    const snapshot = await getDocs(testimonialsRef);

    if (snapshot.empty) {
      console.log("No testimonials found!");
      return [];
    }

    const testimonials = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));


    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials: ", error);
    return [];
  }
};
