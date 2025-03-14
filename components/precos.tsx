import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
  Divider
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

interface PricePlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
}

interface Props {
  plans: PricePlan[];
  headingText?: string;
  subheadingText?: string;
  backgroundColor?: string;
  borderColor?: string;
  buttonColor?: string;
  buttonBorderColor?: string;
}

const PriceWrapper: React.FC<{ children: React.ReactNode; borderColor: string; backgroundColor: string; }> = ({ children, borderColor, backgroundColor }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={borderColor}
      bgColor={backgroundColor}
      borderRadius="40px"
    >
      {children}
    </Box>
  );
};

export default function ThreeTierPricing({
  plans,
  headingText = "NOSSOS PLANOS",
  subheadingText = "Teste gratuito de 14 dias. Cancele a qualquer momento!",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
  borderColor = "transparent",
  buttonColor = "#30cbab",
  buttonBorderColor = "#30cbab"
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="40%"
      maxWidth="1100px"
      w={{ base: '88%', md: '98%', lg: '90%' }}
      mx="auto"
      borderRadius="32px"
      boxShadow="0px 10px 24px rgba(0, 0, 0, 0.3)"
      backgroundImage="linear-gradient(to right, rgba(0, 119, 104, 0.92), rgba(0, 34, 90, 0.92)), url('/CrissCross.png')"
      backgroundBlendMode="multiply"
      backgroundSize="cover, 1440px 5409px"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      overflow={'hidden'}
    >
      <VStack w="full" textAlign="center" p={8}>
        <Heading as="h1" fontSize="5xl" textShadow="2px 2px 6px rgba(0, 0, 0, 0.6)" lineHeight={"100%"}>
          {headingText}
        </Heading>
        <Divider
          height="1px"
          width="70%"
          borderColor="transparent"
          bgGradient="linear(to-l, #002b32, #6ddcd4, #6ddcd4, #002b32)"
        />
        <Text fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }} color="gray.200" fontWeight="italic" lineHeight={"120%"}>
          {subheadingText}
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={10}
          py={6}
          w="full"
        >
          {plans.map((plan, index) => (
            <PriceWrapper
              key={index}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            >
              <Box position="relative">
                {plan.isPopular && (
                  <Box position="absolute" top="-16px" left="50%" style={{ transform: 'translate(-50%)' }}>
                    <Text
                      bg={buttonColor}
                      px={3}
                      py={1}
                      color={'white'}
                      fontSize="sm"
                      fontWeight="600"
                      rounded="xl"
                    >
                      Mais Popular
                    </Text>
                  </Box>
                )}
                <Box py={4} px={8}>
                  <Text fontWeight="semibold" fontSize="2xl">
                    {plan.title}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="4xl" fontWeight="semibold">
                      R$
                    </Text>
                    <Text fontSize="4xl" fontWeight="semibold">
                      {plan.price}
                    </Text>
                    <Text fontSize="xl" color="gray.400">
                      /mês
                    </Text>
                  </HStack>
                </Box>
                <VStack bgColor="transparent" py={4}>
                  <List spacing={3} textAlign="start" px={8}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i}>
                        <ListIcon as={FaCheckCircle} color={buttonColor} />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  <Box w="80%" pt={7}>
                    <Button
                      w="full"
                      textColor={buttonColor}
                      borderColor={buttonBorderColor}
                      variant="outline"
                      borderRadius="full"
                      as="a"
                      href={plan.buttonLink}
                    >
                      {plan.buttonText}
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
}
