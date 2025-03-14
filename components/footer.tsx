import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
  Image,
  Divider,
  Button,
  HStack
} from '@chakra-ui/react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const iconMap = {
  Instagram: FaInstagram,
  Whatsapp: BsWhatsapp,
  Linkedin: FaLinkedin
};

const Logo = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    transition="height 0.3s ease, width 0.3s ease"
    boxSize={{ base: 'auto', md: 220 }}
    alignSelf={{ base: 'flex-start', md: 'center' }}
  />
);

const SocialButton = ({ label, href, Icon, bgColor, hoverBgColor }) => (
  <chakra.button
    rounded={'full'}
    w={8}
    h={8}
    cursor={'pointer'}
    as={'a'}
    href={href}
    display={'inline-flex'}
    alignItems={'center'}
    justifyContent={'center'}
    transition={'background 0.3s ease'}
    bg={bgColor}
    _hover={{
      bg: hoverBgColor,
    }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon />
  </chakra.button>
);

const Footer = ({
  logoSrc,
  logoAlt,
  links,
  socialButtons,
  buttonText,
  buttonColor,
  buttonHoverColor,
  buttonLink,
  dividerColorTop,
  dividerColorBottom
}) => {
  const chunkedLinks = links.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <Box py={10}>
      <Container as={Stack} maxW={'5xl'} align={'center'}>
        <HStack 
          spacing={{ base: 'column', md: 'row' }}
          justify={'center'} 
          align="center"
          flexDirection={{ base: 'column', md: 'row' }}
          width={{ base: '50%', md: '100%' }}
        >
          <Logo src={logoSrc} alt={logoAlt} />
          <Divider
            borderColor='transparent' 
            orientation="vertical" 
            height="125px"
            width="3px"
            bgGradient={`linear(to-b, ${dividerColorTop}, ${dividerColorBottom}, ${dividerColorTop})`}
            display={{ base: 'none', md: 'block' }}
          />
          <Stack direction={{ base: 'column', md: 'row' }} width="70%" align="center">
            {chunkedLinks.map((group, index) => (
              <VStack
                key={index}
                align={{ base: 'flex-start', md: 'center' }}
                spacing={1}
                width="100%"
              >
                {group.map((link, linkIndex) => (
                  <Box
                    as="a"
                    href={link.href}
                    fontSize="md"
                    fontWeight="normal"
                    color="#5B686C"
                    _hover={{ color: '#2db2a8' }}
                    key={linkIndex}
                  >
                    {link.label}
                  </Box>
                ))}
              </VStack>
            ))}
          </Stack>
          <Divider
            borderColor='transparent'  
            orientation="vertical" 
            height="125px"
            width="3px"
            bgGradient={`linear(to-b, ${dividerColorTop}, ${dividerColorBottom}, ${dividerColorTop})`}
            display={{ base: 'none', md: 'block' }}
          />
          <Stack align={{ base: 'flex-start', md: 'center' }} spacing={3} width={{ base: '70%', md: '40%' }}>
            <Text fontSize="md" fontWeight="normal" color="#5B686C"> CONHEÇA MAIS </Text>
            <HStack spacing={4}>
              {socialButtons.map((button, index) => {
                const Icon = iconMap[button.icon];
                if (!Icon) return null; // Verificação adicional
                return (
                  <SocialButton 
                    key={index} 
                    label={button.label} 
                    href={button.href} 
                    Icon={Icon} 
                    bgColor={button.bgColor} 
                    hoverBgColor={button.hoverBgColor}
                  />
                );
              })}
            </HStack>
            <Button
              color="white"
              width="145px"
              borderRadius="full"
              bg={buttonColor}
              _hover={{
                bg: buttonHoverColor,
              }}
              as="a"
              href={buttonLink}
            >
              {buttonText}
            </Button>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
