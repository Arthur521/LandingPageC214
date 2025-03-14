import { Button, HStack, Box } from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingContactButton = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contato@atelco.com.br"; // Altere para o seu e-mail
  };

  return (
    <Box
      position="fixed"
      bottom="50px"
      right="10px"
      bg="white" // Cor de fundo da caixa
      borderRadius="full" // Deixa a caixa redonda
      boxShadow="md" // Adiciona sombra para destaque
      p={2} // Adiciona padding interno
    >
      <HStack spacing={4}>
        <Button
          as="a"
          href="https://wa.me/556239119962" // Altere para o seu número do WhatsApp
          target="_blank"
          aria-label="WhatsApp"
          borderRadius="full" // Deixa o botão circular
          size="50px" // Aumenta o tamanho do botão
          w="50px"
          h="50px"
          bg="green.400"
          color="white"
          _hover={{ bg: "green.500" }}
          _active={{ bg: "green.600" }}
          
        >
          <FaWhatsapp size="28px" /> {/* Ícone do WhatsApp */}
        </Button>
        <Button
          onClick={handleEmailClick}
          aria-label="Email"
          borderRadius="full" // Deixa o botão circular
          size="50px" // Aumenta o tamanho do botão
          w="50px"
          h="50px"
          bg="blue.400"
          color="white"
          _hover={{ bg: "blue.500" }}
          _active={{ bg: "blue.600" }}
        >
          <FaEnvelope size="28px" /> {/* Ícone do Gmail */}
        </Button>
      </HStack>
    </Box>
  );
};

export default FloatingContactButton;
