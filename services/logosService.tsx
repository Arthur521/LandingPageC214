// src/services/logosService.ts
import db from '../utils/firebase'; // Ajuste o caminho conforme necessário
import { getDoc, doc } from 'firebase/firestore';

interface LogoData {
  src: string;
  title: string;
  description: string;
  banner: string;
}

interface CardData {
  imageSrc: string;
  imageAlt: string;
  titleText: string;
  subtitleText: string;
  additionalText: string;
  buttonColor?: string;
  buttonHoverColor?: string;
}

export const fetchLogosData = async (): Promise<{ card: CardData; logos: (LogoData & { key: string })[] } | null> => {
  try {
    const cardRef = doc(db, "setores_contabilidade", "card");
    const cardSnap = await getDoc(cardRef);

    const logosRef = doc(db, "setores_contabilidade", "logos");
    const logosSnap = await getDoc(logosRef);

    if (cardSnap.exists() && logosSnap.exists()) {
      const cardData = cardSnap.data() as CardData;
      const logosData = logosSnap.data() as Record<string, LogoData>;

      return {
        card: {
          imageSrc: cardData.imageSrc,
          imageAlt: cardData.imageAlt,
          titleText: cardData.titleText,
          subtitleText: cardData.subtitleText,
          additionalText: cardData.additionalText,
          buttonColor: cardData.buttonColor,
          buttonHoverColor: cardData.buttonHoverColor,
        },
        logos: Object.keys(logosData).map(key => ({
          ...logosData[key],
          key // Adicionando a chave para mapear corretamente
        }))
      };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
};
