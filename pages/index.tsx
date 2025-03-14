import React from 'react';
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../styles/theme";

import { GetStaticProps } from 'next';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import CardComLogos from '../components/card1';
import Loading from '../components/loading';
import BarraDeContatos from '../components/barraDeContatos';
import TituloTextoSemImagem from '../components/tituloGeralSemImagem';
import TituloTexto from '../components/tituloTextoCurto';
import TextoComImagem from '../components/textoComImagem';
import ImageComponent from '../components/imageButton';
import Contato from '../components/contact';
import WhatsAppButton from '../components/whatsAppButton';

import { fetchFooterData } from '../services/footerService';
import { fetchNavbarData } from '../services/navbarService';
import { fetchLogosData } from '../services/logosService';
import { fetchTextoCurtoDataById } from '../services/textoCurtoService';
import { fetchTextoComImagemById } from '../services/textoComImagemService';
import { fetchImageButtonById } from '../services/imageButtonService';
import { fetchContatoById } from '../services/contatoService';
import { fetchTituloTextoImagemById } from '../services/tituloTextoImagemService';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [navbarData, footerData, logosData, textoCurtoData1, textoCurtoData2, textoCurtoData3, textoComImagem1, textoComImagem2, imageButton1, imageButton2, contato1, tituloTextoImagem1] = await Promise.all([
      fetchNavbarData(),
      fetchFooterData(),
      fetchLogosData(),
      fetchTextoCurtoDataById("1"),
      fetchTextoCurtoDataById("2"),
      fetchTextoCurtoDataById("3"),
      fetchTextoComImagemById("1"),
      fetchTextoComImagemById("2"),
      fetchImageButtonById("1"),
      fetchImageButtonById("2"),
      fetchContatoById("1"),
      fetchTituloTextoImagemById("1"),
    ]);

    return {
      props: {
        navbarData,
        footerData,
        logosData,
        textoCurtoData1,
        textoCurtoData2,
        textoCurtoData3,
        textoComImagem1,
        textoComImagem2,
        imageButton1,
        imageButton2,
        contato1,
        tituloTextoImagem1
      },
      revalidate: 36000,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        navbarData: null,
        footerData: null,
        logosData: null,
        textoCurtoData1: null,
        textoCurtoData2: null,
        textoCurtoData3: null,
        textoComImagem1: null,
        textoComImagem2: null,
        imageButton1: null,
        imageButton2: null,
        contato1: null,
        tituloTextoImagem1: null
      }
    };
  }
};

type Props = {
  navbarData: any;
  footerData: any;
  logosData: any;
  textoCurtoData1: any;
  textoCurtoData2: any;
  textoCurtoData3: any;
  textoComImagem1: any;
  textoComImagem2: any;
  imageButton1: any;
  imageButton2: any;
  contato1: any;
  tituloTextoImagem1: any;
};

const Home: React.FC<Props> = ({
  
  navbarData,
  footerData,
  logosData,
  // testimonialData,
  // pricingData,
  textoCurtoData1,
  textoCurtoData2,
  textoCurtoData3,
  textoComImagem1,
  textoComImagem2,
  imageButton1,
  imageButton2,
  contato1,
  tituloTextoImagem1
}) => {

  //|| !pricingData || !testimonialData
  if (!footerData || !navbarData || !logosData || !textoCurtoData1 || !textoCurtoData2 || !textoCurtoData3 || !textoComImagem1 || !textoComImagem2 || !imageButton1 || !imageButton2 || !contato1 || !tituloTextoImagem1) {
    return <Loading />;
  }

  return (
    <ChakraProvider theme={theme}>
      <Navbar
        links={Object.values(navbarData.links)}
        logoA={navbarData.logos.logoA}
        logoAtelco={navbarData.logos.logoAtelco}
        contactButtonText={navbarData.buttons.contactButtonText}
        contactButtonLink={navbarData.buttons.contactButtonLink}
        enterButtonText={navbarData.buttons.enterButtonText}
        enterButtonLink={navbarData.buttons.enterButtonLink}
        buttonVariant={navbarData.buttons.buttonVariant}
        buttonColorScheme={navbarData.buttons.buttonColorScheme}
        buttonBorderColor={navbarData.buttons.buttonBorderColor}
        buttonHoverBorderColor={navbarData.buttons.buttonHoverBorderColor}
        buttonHoverColor={navbarData.buttons.buttonHoverColor}
        buttonBgColor={navbarData.buttons.buttonBgColor}
        buttonHoverBgColor={navbarData.buttons.buttonHoverBgColor}
      />
      <section id="home"></section>
      <Box 
        mt={{ base: '10%', md: '7%', lg: '3%' }}
        bgImage="url('/ondinha_colorida.png')" // Imagem de fundo
        bgRepeat="no-repeat"
        bgSize={{base:"400px", md:"500px"}}
        bgPos={{ base: "bottom -5px right -280px",  md: "bottom 20px right -200px",}}
        w="auto"
        h="auto"
        display="flex"
        justifyContent="center" 
        alignItems="center"
        flexDirection="column"
      >
        <TituloTextoSemImagem/>
        <BarraDeContatos/>
      </Box>
      <section id="sobre-nos"></section>
      <Box mt={{ base: '8%', md: '10%', lg: '6%' }}
          bgImage="url('/ondinha_colorida2.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"400px", md:"500px"}}
          bgPos={{ base: "top 260px left -180px",  md: "bottom 140px left -200px"}}
          w="auto"
          h="auto"
          display="flex"
          justifyContent="center" 
          alignItems="center"
        >
        <TextoComImagem
          imageSrc={textoComImagem1.image}
          titleText={textoComImagem1.title}
          subtitleText={textoComImagem1.subTitle}
          descriptionText={textoComImagem1.text}          
          buttonText={textoComImagem1.buttonText}
          buttonLink={textoComImagem1.buttonLink}
        />
      </Box>

      <Box mt={{ base: '10%', md: '-2%', lg: '0%' }}
          bgImage="url('/pontinhos_coloridos.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"560px", md:"600px", lg:"800px"}}
          bgPos={{ base: "bottom 0% left 0%",  md: "bottom 0% left 50%"}}
          w={{base:"auto", md:"auto"}}
          h="300px"
          display="flex"
          justifyContent="center" 
          alignItems={{base:"left", md:"center"}}
        >
        <TituloTexto
            titulo1={textoCurtoData1.title}
            titulo2={textoCurtoData1.subTitle}
            texto={textoCurtoData1.text}
          />
      </Box>
      <Box mt={{ base: '10%', md: '8%', lg: '3%' }}>
        <section id="setores"></section>
        <CardComLogos data={logosData}/>
      </Box>
      <Box mt={{ base: '100%', md: '24%', lg: '18%' }}
          bgImage="url('/ondinha_colorida.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"400px", md:"500px"}}
          bgPos={{ base: "bottom 0px left -200px",  md: "bottom 140px right -180px"}}
        >
        <section id="vantagens"></section>
        <ImageComponent
          bgImage={imageButton1.initialBgImage} // Caminho da imagem inicial

          titleText={imageButton1.titleText} // Título que aparece na imagem inicial
          descriptionTitle={imageButton1.descriptionTitle} // Título que aparece após o clique
          descriptionSubtitle={imageButton1.descriptionSubtitle} // Subtítulo exibido após o clique
          topics={imageButton1.topics}
        />
      </Box> 
      <Box mt={{ base: '10%', md: '-2%', lg: '0%' }}
          bgImage="url('/pontinhos_coloridos.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"560px", md:"600px", lg:"800px"}}
          bgPos={{ base: "bottom 0% left 0%",  md: "bottom 0% left 50%"}}
          w={{base:"auto", md:"auto"}}
          h="280px"
          display="flex"
          justifyContent="center" 
          alignItems={{base:"left", md:"center"}}
        >
        <TituloTexto
            titulo1={textoCurtoData2.title}
            titulo2={textoCurtoData2.subTitle}
            texto={textoCurtoData2.text}
          />
      </Box>
      <section id="services"></section>
      <Box mt={{ base: '10%', md: '10%', lg: '6%' }}
          bgImage="url('/ondinha_colorida2.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"400px", md:"500px"}}
          bgPos={{ base: "top 260px left -180px",  md: "bottom 140px left -200px"}}
          w="auto"
          h="auto"
          display="flex"
          justifyContent="center" 
          alignItems="center"
        >
        <TextoComImagem
          imageSrc={textoComImagem2.image}
          titleText={textoComImagem2.title}
          subtitleText={textoComImagem2.subTitle}
          descriptionText={textoComImagem2.text}          
          buttonText={textoComImagem2.buttonText}
          buttonLink={textoComImagem2.buttonLink}
        />
      </Box>
      
      <Box mt={{ base: '10%', md: '4%', lg: '4%' }}>
        <TituloTexto
            titulo1={textoCurtoData3.title}
            titulo2={textoCurtoData3.subTitle}
            texto={textoCurtoData3.text}
          />
      </Box>
      <Box mt={{ base: '10%', md: '6%', lg: '2%' }}
          bgImage="url('/ondinha_colorida.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"400px", md:"500px"}}
          bgPos={{ base: "top 0px right -180px",  md: "bottom 140px right -180px"}}
        >
        <ImageComponent
          bgImage={imageButton2.initialBgImage} // Caminho da imagem inicial
          titleText={imageButton2.titleText} // Título que aparece na imagem inicial
          descriptionTitle={imageButton2.descriptionTitle} // Título que aparece após o clique
          descriptionSubtitle={imageButton2.descriptionSubtitle} // Subtítulo exibido após o clique
          topics={imageButton2.topics}
        />
      </Box>
      <section id="contact"></section>
      <Box mt={{ base: '10%', md: '10%', lg: '5%' }}
          bgImage="url('/ondinha_colorida2.png')" // Imagem de fundo
          bgRepeat="no-repeat"
          bgSize={{base:"400px", md:"500px"}}
          bgPos={{ base: "top 0px left -180px",  md: "bottom 140px left -180px"}}
        >
        <Contato
          headingText={contato1.headingText}
          subheadingText={contato1.subheadingText}
          namePlaceholder={contato1.namePlaceholder}
          lastnamePlaceholder={contato1.lastnamePlaceholder}
          emailPlaceholder={contato1.emailPlaceholder}
          phonePlaceholder={contato1.phonePlaceholder}
          subjectPlaceholder={contato1.subjectPlaceholder}
          messagePlaceholder={contato1.messagePlaceholder}
          submitButtonText={contato1.submitButtonText}
          backgroundColor={contato1.backgroundColor}
          buttonColor={contato1.buttonColor}
          buttonHoverColor={contato1.buttonHoverColor}
          dividerGradientColors={[contato1.dividerGradientColors.A1, contato1.dividerGradientColors.A2, contato1.dividerGradientColors.A3, contato1.dividerGradientColors.A4]}
        />
      </Box>
      <Box mt={{ base: '10%', md: '14%', lg: '6%' }}>
        <Footer
          logoSrc={footerData.logo.logoSrc}
          logoAlt={footerData.logo.logoAlt}
          links={footerData.links}
          socialButtons={footerData.socialButtons}
          buttonText={footerData.bigButton.buttonText}
          buttonColor={footerData.bigButton.buttonColor}
          buttonHoverColor={footerData.bigButton.buttonHoverColor}
          buttonLink={footerData.bigButton.buttonLink}
          dividerColorTop={footerData.divider.dividerColorTop}
          dividerColorBottom={footerData.divider.dividerColorBottom}
        />
      </Box>
      <WhatsAppButton/>
    </ChakraProvider>
  );
}

export default Home;
