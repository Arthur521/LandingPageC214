import React, { Component, createRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  ChakraProvider,
  Image,
  Stack,
} from '@chakra-ui/react';
import theme from '../styles/theme';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface NavbarProps {
  links: { text: string; href: string }[];
  logoA: string;
  logoAtelco: string;
  contactButtonText: string;
  contactButtonLink: string;
  enterButtonText: string;
  enterButtonLink: string;
  buttonVariant?: string;
  buttonColorScheme?: string;
  buttonBorderColor?: string;
  buttonHoverBorderColor?: string;
  buttonHoverColor?: string;
  buttonBgColor?: string;
  buttonHoverBgColor?: string;
}

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

interface State {
  isOpen: boolean;
  scrolled: boolean;
}

const NavLink = (props: NavLinkProps) => {
  const { children, href } = props;
  return (
    <NextLink href={href} passHref>
      <Box
        as="a"
        px={{ base: '30px', md: '110px', lg: '12px' }}
        py={{ base: '8px', md: '8px', lg: '10px' }}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          textColor: '#21988F',
        }}
        fontSize={'lg'}
        fontWeight="normal"
        color={"#2CADA3"}
      >
        {children}
      </Box>
    </NextLink>
  );
};

class Navbar extends Component<NavbarProps, State> {
  private menuRef = createRef<HTMLDivElement>();

  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      isOpen: false,
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ scrolled: true});
    } else {
      this.setState({ scrolled: false});
    }
  };

  onToggle = () => {
    this.setState((prevState) => {
      const isOpen = !prevState.isOpen;
      return {
        isOpen
      };
    });
  };

  handleClickOutside = (event: MouseEvent) => {
    if (this.menuRef.current && !this.menuRef.current.contains(event.target as Node)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const {
      links,
      contactButtonText,
      contactButtonLink,
      enterButtonText,
      enterButtonLink,
      buttonVariant,
      buttonColorScheme,
      buttonBorderColor,
      buttonHoverBorderColor,
      buttonHoverColor,
      buttonBgColor,
      buttonHoverBgColor,
    } = this.props;
    const { isOpen, scrolled} = this.state;

    return (
      <ChakraProvider theme={theme}>
        <Box
          position="fixed"
          width="100%"
          zIndex="1000"
          bgColor={scrolled || isOpen ? 'rgba(255, 255, 250, 0.1)' : 'transparent'}
          backdropFilter={scrolled || isOpen ? 'blur(2px)' : 'none'}
          transition="background-color 0.3s ease, backdrop-filter 0.3s ease, height 0.3s ease"
          height={scrolled || isOpen ? '80px' : '120px'}
        >
          <Flex
            h={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            px={{ base: '20px', md: '100px', lg: '80px' }}
          >
            <NextLink href="/" passHref>
              <Box
                as="a"
                w={{ base: '120px', md: '160px' }}
                h={{ base: '120px', md: '160px' }}
                mx="2%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={scrolled || isOpen ? this.props.logoA : this.props.logoAtelco}
                  alt="atelco"
                  width={scrolled || isOpen ? '48px' : 'auto'}
                  height={scrolled || isOpen ? '48px' : 'auto'}
                  opacity={1}
                />
              </Box>
            </NextLink>
            <HStack
              spacing={{ base: '10px', md: '20px', lg: '20px' }}
              alignItems={'center'}
            >
              <HStack
                as={'nav'}
                spacing={{ base: '2px', md: '10px', lg: '10px' }}
                display={{ base: 'none', lg: 'flex' }}
              >
                {links.map((link) => (
                  <NavLink key={link.text} href={link.href}>{link.text} </NavLink>
                ))}
              </HStack>
                <Button
                  as="a"
                  href={contactButtonLink}
                  variant={buttonVariant || 'outline'}
                  colorScheme={buttonColorScheme || '#5B686C'}
                  color={"#2CADA3"}
                  borderColor={buttonBorderColor || '#5B686C'}
                  rounded={'full'}
                  height={{ base: '34px', md: '38px', lg: '38px' }}
                  width={{ base: '85px', md: '105px', lg: '105px' }}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="normal"
                  borderWidth={3}
                  _hover={{
                    bg: 'transparent',
                    borderColor: buttonHoverBorderColor || '#2db2a8',
                    color: buttonHoverColor || '#2db2a8',
                  }}
                >
                  {contactButtonText}
                </Button>
                <Button
                  as="a"
                  href={enterButtonLink}
                  rounded={'full'}
                  height={{ base: '34px', md: '38px', lg: '38px' }}
                  width={{ base: '85px', md: '105px', lg: '105px' }}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="normal"
                  bg={buttonBgColor || '#26968e'}
                  _hover={{
                    bg: buttonHoverBgColor || '#1d726c',
                  }}
                >
                  {enterButtonText}
                </Button>
              <IconButton
                minWidth="34px" // Define a largura mínima
                minHeight="34px" // Define a altura mínima
                width={{ base: '36px', md: '45px' }} // Ajuste conforme necessário
                height={{ base: '36px', md: '45px' }} // Ajuste conforme necessário
                border="2px solid #5B686C"
                color={"#5B686C"}
                colorScheme={'#26968e'}
                size={'md'}
                rounded={'xl'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ base: 'block', lg: 'none' }}
                onClick={this.onToggle}
                _hover={{
                  bg: 'transparent',
                  borderColor: buttonHoverBorderColor || '#2db2a8',
                  color: buttonHoverColor || '#2db2a8',
                }}
              />
            </HStack>
          </Flex>
        </Box>

        {isOpen ? (
          <Box
            ref={this.menuRef}
            position="fixed"
            top="0%"
            width="100%"
            zIndex="999"
            bgColor="rgba(255, 255, 250, 0.1)"
            backdropFilter="blur(4px)"
            transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
            height="100vh"
            display={{ base: 'block', lg: 'none' }}
            onClick={this.onToggle}
          >
            <Stack as={'nav'} spacing={{ base: '4px', md: '2px', lg: '10px' }} pt="80px">
              {links.map((link) => (
                <NavLink key={link.text} href={link.href}>{link.text} </NavLink>

              ))}
            </Stack>
          </Box>
        ) : null}

        <Box pt={'80px'}></Box>
      </ChakraProvider>
    );
  }
}

export default Navbar;
