import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Titulo: React.FC = () => {
  const [subtitulo, setSubtitulo] = useState<string>(""); // Definindo o tipo do estado
  const textoSubtitulo: string =
    "O plano de contas da Anatel possui mais de 1700 contas contábeis! E se você ainda não conhece esse plano de contas, é provável que sua empresa não esteja aproveitando os créditos adequadamente!";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= textoSubtitulo.length) {
        setSubtitulo(textoSubtitulo.slice(0, index)); // Atualiza o subtítulo cortando a string corretamente
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 48);

    return () => clearInterval(intervalId);
  }, [textoSubtitulo]);

  return (
    <Box 
      w="100%" 
      h={{ base: '75%', md: '54%', lg: '54%' }}
      display="flex" 
      justifyContent="center" 
      alignItems="center"
    >
      <Box 
        w={{ base: 'auto', md: '760px', lg: '900px' }}
        h="600px" 
        p={2} 
        position="relative" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
        alignItems="center"
      >
        <Heading 
          as="h1" 
          fontSize={{ base: "42px", md: "5xl", lg: "5xl" }} 
          textAlign={{ base: "left", md: "center" }} // Alinhamento à esquerda em telas pequenas
          ml={{ base: 4, md: 0 }} // Margem esquerda para telas pequenas
          mb={5}
          lineHeight={{ base: "44px", md: "55px" }}
          textColor="#3F4A4D"
          fontWeight="medium"
        >
          <Text as="span" color="#17B09A">Você saberia</Text> dizer a diferença entre um plano de contas <Text as="span" color="#1285A5">comum</Text> e um plano de contas da <Text as="span" color="#17B09A">Anatel?</Text>
        </Heading>
        
        {/* Definindo o tamanho fixo do subtítulo para evitar movimento */}
        <Text 
          fontSize={{ base: "md", md: "lg" }} 
          textAlign={{ base: "left", md: "center" }} // Alinhamento à esquerda em telas pequenas
          ml={{ base: 4, md: 0 }} // Margem esquerda para telas pequenas
          maxW="670px" 
          mb={10}
          lineHeight={{ base: "20px", md: "25px" }} 
          textColor="#3F4A4D"
          fontWeight="italic"
          h={{ base: "120px", md: "55px" }}  // Tamanho fixo do subtítulo
        >
          {subtitulo} {/* Exibe o subtítulo animado */}
        </Text>

          <Button 
            bgGradient="linear(to-r, #2C9888, #38BBB2)" // Gradiente do botão
            color="white" // Cor do texto
            size="lg" 
            borderRadius="full" // Bordas mais arredondadas
            rightIcon={<ArrowForwardIcon boxSize={7} />} // Seta aumentada
            _hover={{ bgGradient: "linear(to-r, #27887A, #33A8A0)" }} // Efeito hover
          >
            COMECE AGORA
          </Button>
      </Box>
    </Box>
  );
};

export default Titulo;
