import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Flex, Stack, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageComponentProps {
  bgImage: string;         // A mesma imagem para ambos os estados
  titleText: string;       // Texto que aparece na primeira imagem
  descriptionTitle: string; // Título exibido após clique
  descriptionSubtitle: string; // Subtítulo exibido após clique
  topics: string[]; // Lista de tópicos com textos
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  bgImage,
  titleText,
  descriptionTitle,
  descriptionSubtitle,
  topics = [],
}) => {
  const [showInitial, setShowInitial] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  // Lógica de digitação
  useEffect(() => {
    let currentText = '';
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < titleText.length) {
        currentText += titleText.charAt(charIndex);
        setTypedText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    let typingInterval: NodeJS.Timeout;

    if (isVisible) {
      typingInterval = setInterval(typeText, 100);
    }

    return () => clearInterval(typingInterval);
  }, [isVisible, titleText]);

  // Observador de interseção
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const toggleContent = () => {
    setShowInitial(prevState => !prevState);
  };

  const pageTransitionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };

  return (
    <Flex alignItems="center" justifyContent="center" position="relative" p={[4, 8]}>
      <Box 
        ref={componentRef}
        position="relative"
        width={["100%", "600px", "65%"]}
        height={["700px", "500px", "500px"]}
        borderRadius={"70px"}
        overflow="hidden"
        onClick={toggleContent}
        cursor="pointer"
        maxWidth="960px"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key="image"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransitionVariants}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            <Image
              src={bgImage}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="filter 0.5s"
              filter={showInitial ? 'brightness(1)' : 'brightness(0.4)'} // Efeito de escurecimento
            />
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {showInitial ? (
                <Text
                  fontWeight="bold"
                  fontSize={['40px', '28px', '32px', '52px']}
                  lineHeight={'98%'}
                  color="white"
                  textAlign="center"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                >
                  {typedText}
                </Text>
              ) : (
                <Stack spacing={4} align="start" textAlign="center" ml={[8, 14, 14]} w={'80%'}>
                  <Stack spacing={0} align="start" textAlign="start">
                    <Text fontWeight="bold" fontSize={['34px', '32px', '36px']} lineHeight={['100%', '100%', '100%']}>
                      {descriptionTitle}
                    </Text>
                    <Text fontSize={['21px', '20px', '22px']} fontStyle="italic" lineHeight={['100%', '100%', '100%']}>
                      {descriptionSubtitle}
                    </Text>
                  </Stack>
                  <Stack spacing={-1} align="start" textAlign="start">
                    {topics.map((topic, index) => (
                      <Text key={index} fontSize={['16px', '18px', '18px']} px={2}>
                        {topic}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Flex>
  );
};

export default ImageComponent;
