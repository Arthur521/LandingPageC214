import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bg="rgba(255, 255, 255, 0.1)" // fundo branco com leve opacidade
    >
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
      />
      <Text
        mt={4}
        fontSize="lg"
        fontFamily="body" // usa a fonte padrão do tema
      >
        Carregando...
      </Text>
    </Box>
  );
};

export default Loading;
