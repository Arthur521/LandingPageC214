import { AppProps } from 'next/app';
import { ChakraProvider} from "@chakra-ui/react";
import theme from "../styles/theme";
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
