import React, { useState } from 'react';
import { Box, Image, Text, IconButton, VStack, Grid, Icon } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface Logo {
  src: string;
  title: string;
  description: string;
  banner: string;
  key: string;
}

interface CardData {
  card: {
    imageSrc: string;
    imageAlt: string;
    titleText: string;
    subtitleText: string;
    additionalText: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
  logos: Logo[];
}

interface CardComFundoProps {
  data: CardData;
}

const CardComFundo: React.FC<CardComFundoProps> = ({ data }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(data.logos[0]);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleLogoClick = (logo: Logo) => {
    setSelectedLogo(logo);
  };

  const buttonColor = data.card.buttonColor || '#25958d';
  const buttonHoverColor = data.card.buttonHoverColor || '#066b68';

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width={["100%", "auto"]}>
      <Box position="relative" width={["100%", "600px", "65%"]} height={["150px", "33%"]} borderRadius={["none", "full", "full"]} maxWidth="960px">
        <Image
          src={isTextVisible ? selectedLogo?.banner : data.card.imageSrc}
          alt={data.card.imageAlt}
          width="100%"
          height="100%"
          objectFit="cover"
          filter={isTextVisible ? 'grayscale(40%)' : 'none'}
          transition="filter 0.5s"
          borderRadius={["none", "full", "full"]}
        />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          color="white"
          spacing={-3}
          width="90%"
          transition="transform 0.5s, opacity 0.5s"
          transform={`translate(-50%, ${isTextVisible ? '-100%' : '-50%'})`}
          opacity={isTextVisible ? 0 : 1}
        >
          <Text fontSize={["3xl", "4xl", "4xl"]} fontWeight="bold">
            {data.card.titleText}
          </Text>
          <Text fontSize={["lg", "2xl", "2xl"]} fontStyle="italic">
            {data.card.subtitleText}
          </Text>
        </VStack>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          color="white"
          bg="rgba(0, 0, 0, 0.5)"
          width={["90%", "80%", "65%"]}
          transition="transform 0.5s, opacity 0.5s"
          transform={`translate(-50%, ${isTextVisible ? '-50%' : '100%'})`}
          opacity={isTextVisible ? 1 : 0}
          borderRadius={"xl"}
        >
          <Text fontSize={["sm", "sm", "md"]}>{selectedLogo?.description || ''}</Text>
        </Box>
        <IconButton
          position="absolute"
          bottom="7%"
          right="5%"
          transform="translateX(-50%)"
          onClick={handleButtonClick}
          icon={<Icon as={isTextVisible ? FaArrowDown : FaArrowUp} />}
          bgGradient={`linear(to-r, ${buttonColor}, #1f738c)`}
          borderRadius="full"
          boxShadow="0 0 8px rgba(0, 0, 0, 0.5)"
          _hover={{ bgGradient: `linear(to-r, ${buttonHoverColor}, #015067)` }}
          aria-label={isTextVisible ? 'Título' : 'Texto'}
          color="white"
          border="4px rgba(0, 0, 0, 10)"
          transition="transform 0.5s, background-color 0.5s"
        />
        <Box
          position="absolute"
          bottom={isTextVisible ? { base: "-230%", md: "-120%", lg: "-90%" } : { base: "-180%", md: "-100%", lg: "-50%" }}
          left="50%"
          transform="translateX(-50%)"
          transition="bottom 0.5s ease, opacity 0.5s ease"
          opacity={isTextVisible ? 1 : 0}
          width={["65%", "60%", "100%", "80%"]}
          pointerEvents={isTextVisible ? 'auto' : 'none'}
        >
          <Grid
            templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            gap={8}
            width="100%"
          >
            {data.logos.map((logo, index) => (
              <Box
                key={logo.key}
                onClick={() => handleLogoClick(logo)}
                _hover={{ transform: "scale(1.1)", opacity: 1, filter: "saturate(1)" }}
                transition="transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease"
                cursor="pointer"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                filter="saturate(0.6)"
                opacity={0.6}
                textAlign="center"
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={["120px", "100px", "120px"]}
                  height="auto"
                  borderRadius="full"
                  transition="transform 0.3s ease"
                />
                <Text fontSize={["sm", "md", "lg"]} color="#3F4A4D" mt={2}>{logo.title}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComFundo;
