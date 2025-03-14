import React from 'react';
import {
  Container,
  Text,
  ChakraProvider,
  SlideFade,
  Stack
} from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import theme from '../styles/theme';

export default function TituloTextoCurto({ titulo1, titulo2, texto }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ base: '80%', md: '760px', lg: '980px' }}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 2, md: 10, lg: 10 }} align='center'>
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <SlideFade in={inView} offsetY='20px'>
                <div ref={ref}>
                  <Text
                    align={{ base: 'start', md: 'center', lg: 'center' }}
                    fontWeight={'normal'}
                    fontSize={{ base: '42px', md: '150%', lg: '240%' }}
                    lineHeight={'100%'}
                    color={'#3F4A4D'}>
                    {titulo1}
                  </Text>
                  <Text
                    align={{ base: 'start', md: 'center', lg: 'center' }}
                    fontWeight={'italic'}
                    fontSize={{ base: '28px', md: '135%', lg: '180%' }}
                    lineHeight={'110%'}
                    color={'#3F4A4D'}>
                    {titulo2}
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
                    maxW={{ base: '330px', md: '430px', lg: '500px' }}
                    fontWeight={'italic'}
                    fontSize={{ base: '15px', md: '12px', lg: '15px' }}
                    lineHeight={'120%'}
                    color={'#3F4A4D'}>
                    {texto}
                  </Text>
                </div>
              </SlideFade>
            )}
          </InView>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
