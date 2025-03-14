import React from 'react';
import {
  Button,
  Container,
  Text,
  ChakraProvider,
  SlideFade,
  Stack,
  Image,
  Link
} from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import theme from '../styles/theme';

interface TituloComImagemProps {
  imageSrc: string;
  imageAlt?: string;
  titleText: string;
  subtitleText: string;
  descriptionText: string;
  buttonText: string;
  buttonLink: string; // Adicionando o link do botão como prop
}

export default class TituloComImagem extends React.Component<TituloComImagemProps> {
  render() {
    const {
      imageSrc,
      imageAlt = 'imagem',
      titleText,
      subtitleText,
      descriptionText,
      buttonText,
      buttonLink // Adicionando o link do botão como prop
    } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Container maxW={{ base: '90%', md: '760px', lg: '1100px' }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 2, lg: 2 }} align='center'>
            <InView triggerOnce={true} threshold={0.5}>
              {({ inView, ref }) => (
                <SlideFade in={inView} offsetY='20px'>
                  <div ref={ref} style={{ alignSelf: 'center', marginTop: '10px' }}>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      objectFit='cover'
                    />
                  </div>
                </SlideFade>
              )}
            </InView>
            <Stack spacing={{ base: 5, md: 6, lg: 8 }} align='left'>
              <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                  <SlideFade in={inView} offsetY='20px'>
                    <div ref={ref}>
                      <Text
                        maxW={{ base: '400px', md: '500px', lg: '1250px' }}
                        fontWeight={'normal'}
                        fontSize={{ base: '42px', md: '40px', lg: '52px' }}
                        lineHeight={'100%'}
                        ml={{ base: '24px', md: '18px', lg: '25px' }}
                        color={'#3F4A4D'}>
                        {titleText}<br/>
                      </Text>
                      <Text
                        fontWeight={'italic'}
                        fontSize={{ base: '32px', md: '33px', lg: '34px' }}
                        lineHeight={'110%'}
                        ml={{ base: '24px', md: '20px', lg: '25px' }}
                        color={'#3F4A4D'}>
                        {subtitleText}<br/>
                      </Text>
                    </div>
                  </SlideFade>
                )}
              </InView>
              <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                  <SlideFade in={inView} offsetY='20px'>
                    <div ref={ref}>
                      <Text
                        ml={{ base: '24px', md: '24px', lg: '30px' }}
                        maxW={{ base: '300px', md: '500px', lg: '570px' }}
                        fontWeight={'italic'}
                        fontSize={{ base: '15px', md: '16px', lg: '18px' }}
                        lineHeight={'120%'}
                        color={'#3F4A4D'}>
                        {descriptionText}
                      </Text>
                    </div>
                  </SlideFade>
                )}
              </InView>
              <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                  <SlideFade in={inView} offsetY='20px'>
                    <div ref={ref}>
                      <Stack direction={'row'} spacing={2}>
                        <Link href={buttonLink}>
                          <Button
                            rounded={'full'}
                            height={{ base: '38px', md: '45px', lg: '38px' }}
                            width={{ base: '130px', md: '150px', lg: '150px' }}
                            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                            fontWeight="normal"
                            ml={{ base: '200px', md: '300px', lg: '420px' }}
                            bg={'#26968e'}
                            _hover={{
                              bg: '#1d726c',
                            }}>
                            {buttonText}
                          </Button>
                        </Link>
                      </Stack>
                    </div>
                  </SlideFade>
                )}
              </InView>
            </Stack>
          </Stack>
        </Container>
      </ChakraProvider>
    );
  }
}
