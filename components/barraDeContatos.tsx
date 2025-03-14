import React from 'react';
import {
  Box,
  Text,
  Container,
  Stack,
  HStack,
  Divider,
  ChakraProvider,
  Link,
  Icon,
  Button
} from '@chakra-ui/react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importando ícones
import theme from '../styles/theme';

const BarraDeContatos: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ base: '100%', md: '760px', lg: '960px' }} centerContent>
        <Box
          h={{ base: 'auto', md: '80px', lg: '90px' }}
          display={{ base: 'none', md: 'flex' }} // Ocultar no base, mostrar apenas em md e lg
          alignItems="center"
          justifyContent="center"
          w="100%"
          p={{ base: 4, md: 0 }}
          bgSize="cover"
          borderRadius="3xl"
          borderColor="#13BD9B"
          borderWidth="2px"  // Defina a espessura da borda
          borderStyle="solid"  // Defina o estilo da borda
        >
          <Stack
            direction="row"
            spacing={{ base: 4, md: 6 }}
            maxW="100%"
            justifyContent="center"
            alignItems="center"
          >
            {/* Contato 1 */}
            <Box
              p={2}
              width={{ base: '260px', md: '254px', lg: '320px' }}
              height={{ base: '67px', md: '67px', lg: '68px' }}
              bgSize="cover"
              borderRadius="2xl"
              bg={'transparent'}
            >
              <Link href="https://wa.me/556239119962" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                    p={2}
                    borderRadius="md"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Icon as={FaWhatsapp} color="#13BD9B" boxSize={{ md: '24px', lg: '34px' }} />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ md: '13px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Envie uma mensagem
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="italic"
                fontSize={{ base: '12px', md: '9px', lg: '13px' }}
                textAlign="left"
                lineHeight="0%"
                mt={{ base: 0, md: -1, lg: 0 }}
                px={{ base: 0, md: "50px", lg: "58px" }}
                color="#13BD9B"
              >
                +55 62 3911-9962
              </Text>

            </Box>

            <Divider display={{ base: 'none', md: 'block' }} orientation="vertical" height="60px" borderColor="#13BD9B" />

            {/* Contato 2 */}
            <Box
              p={2}
              width={{ base: '260px', md: '254px', lg: '320px' }}
              height={{ base: '67px', md: '67px', lg: '68px' }}
              bgSize="cover"
              borderRadius="2xl"
              bg={'transparent'}
            >
              <Link href="tel:+556239119962" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                    p={2}
                    borderRadius="md"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Icon as={FaPhoneAlt} color="#13BD9B" boxSize="24px" />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: '16px', md: '13px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Faça uma ligação
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="italic"
                fontSize={{ base: '12px', md: '9px', lg: '13px' }}
                textAlign="left"
                lineHeight="0%"
                mt={{ base: 0, md: -1, lg: 0 }}
                px={"48px"}
                color="#13BD9B"
              >
                +55 62 3911-9962
              </Text>

            </Box>

            <Divider display={{ base: 'none', md: 'block' }} orientation="vertical" height="60px" borderColor="#13BD9B" />

            {/* Contato 3 */}
            <Box
              p={2}
              width={{ base: '260px', md: '254px', lg: '320px' }}
              height={{ base: '67px', md: '67px', lg: '68px' }}
              bgSize="cover"
              borderRadius="2xl"
              bg={'transparent'}
            >
              <Link href="mailto:contato@atelco.com.br" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                      p={2}
                      borderRadius="md"
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                    <Icon as={FaEnvelope} color="#13BD9B" boxSize="24px" />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: '16px', md: '13px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Envie um e-mail
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="italic"
                fontSize={{ base: '12px', md: '10px', lg: '13px' }}
                textAlign="left"
                lineHeight="0%"
                mt={{ base: 0, md: -1, lg: 0 }}
                px={"50px"}
                color="#13BD9B"
              >
                contato@atelco.com.br
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* Fundo separado visível apenas em base */}
        <Box
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          alignItems="center"
          w="100%"
          p={4}
          mb={5}
        >
          <Box
              p={2}
              width={{ base: '256px', md: 'block' }}
              height={{ base: '67px'}}
              bgSize="cover"
              borderRadius="2xl"
              mb={3}
              borderColor="#13BD9B"
              borderWidth="2px"  // Defina a espessura da borda
              borderStyle="solid"  // Defina o estilo da borda
            >
              <Link href="https://wa.me/556239119962" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                    p={2}
                    borderRadius="md"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Icon as={FaWhatsapp} color="#13BD9B" boxSize="24px" />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: '16px', md: '17px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Envie uma mensagem
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="normal"
                fontSize={{ base: '12px', md: '12px', lg: '13px' }}
                textAlign="left"
                lineHeight="0%"
                mt={0}
                px={12}
                color="#13BD9B"
              >
                +55 62 3911-9962
              </Text>
            </Box>


          <Box
              p={2}
              width={{ base: '256px', md: 'block' }}
              height={{ base: '67px', md: 'block' }}
              bgSize="cover"
              borderRadius="2xl"
              mb={3}
              borderColor="#13BD9B"
              borderWidth="2px"  // Defina a espessura da borda
              borderStyle="solid"  // Defina o estilo da borda
            >
              <Link href="tel:+556239119962" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                    p={2}
                    borderRadius="md"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Icon as={FaPhoneAlt} color="#13BD9B" boxSize="24px" />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: '16px', md: '17px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Faça uma ligação
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="normal"
                fontSize={{ base: '12px', md: '12px', lg: '13px' }}
                textAlign="left"
                lineHeight="0%"
                mt={0}
                px={12}
                color="#13BD9B"
              >
                +55 62 3911-9962
              </Text>
            </Box>

          <Box
              p={2}
              width={{ base: '256px', md: 'block' }}
              height={{ base: '67px', md: 'block' }}
              bgSize="cover"
              borderRadius="2xl"
              borderColor="#13BD9B"
              borderWidth="2px"  // Defina a espessura da borda
              borderStyle="solid"  // Defina o estilo da borda
            >
              <Link href="mailto:contato@atelco.com.br" style={{ textDecoration: 'none' }}>
                <HStack spacing={2} alignItems="center">
                  <Button
                    p={2}
                    borderRadius="md"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <Icon as={FaEnvelope} color="#13BD9B" boxSize="24px" />
                  </Button>
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: '16px', md: '17px', lg: '19px' }}
                    lineHeight="180%"
                    textAlign="left"
                    color="#13BD9B"
                  >
                    Envie um e-mail
                  </Text>
                </HStack>
              </Link>
              <Text
                fontWeight="normal"
                fontSize={{ base: '12px', md: '12px', lg: '13px' }}
                textAlign="left"
                lineHeight="30%"
                px={12}
                color="#13BD9B"
              >
                contato@atelco.com.br
              </Text>
            </Box>

        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default BarraDeContatos;
