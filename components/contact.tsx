import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Text,
  Stack,
  Textarea,
  VStack,
  Divider,
  useToast,
} from '@chakra-ui/react';

interface RecadoButtonsProps {
  headingText?: string;
  subheadingText?: string;
  namePlaceholder?: string;
  lastnamePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  subjectPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  dividerGradientColors?: [string, string, string, string];
}

const RecadoButtons: React.FC<RecadoButtonsProps> = ({
  headingText = 'DEIXE UMA MENSAGEM',
  subheadingText = 'E VAMOS ENTRAR EM CONTATO',
  namePlaceholder = 'Nome',
  lastnamePlaceholder = 'Sobrenome',
  emailPlaceholder = 'Email',
  phonePlaceholder = 'Telefone',
  subjectPlaceholder = 'Assunto',
  messagePlaceholder = 'Descreva seu problema',
  submitButtonText = 'ENVIAR',
  backgroundColor = 'rgba(0, 0, 0, 0.15)',
  buttonColor = '#26968e',
  buttonHoverColor = '#1d726c',
  dividerGradientColors = ['#002b32', '#6ddcd4', '#6ddcd4', '#002b32']
}) => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const formElements = form.current?.elements as any;
    const email = formElements.email.value;
    const phone = formElements.phone.value;

    if (!isValidEmail(email)) {
      toast({
        title: "Email inválido.",
        description: "Por favor, insira um email válido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!isValidPhone(phone)) {
      toast({
        title: "Telefone inválido.",
        description: "Por favor, insira um telefone válido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    emailjs.sendForm('service_f1ukznx', 'template_0xy16ls', form.current!, 'C9Wer78W-aWBZNMj_')
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Mensagem enviada.",
          description: "Sua mensagem foi enviado com sucesso!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, (error) => {
        console.log(error.text);
        toast({
          title: "Erro ao enviar email.",
          description: "Houve um erro ao enviar seu email. Tente novamente mais tarde.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="64px"
        p={{ base: 8, md: 10, lg: 10 }}
        width={{ base: "400px", md: "500px", lg: "550px" }}
        height={{ base: "550px", md: "570px", lg: "570px" }}
        bg={backgroundColor}
        borderColor={"#6fb4aa"}
        borderWidth={2}
      >
        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={{ base: 4, md: 2, lg: 4 }}>
            <VStack spacing={{ base: 1, md: 2, lg: 1 }}>
              <Heading fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }} fontWeight="normal" color={'#3F4A4D'}>
                {headingText}
              </Heading>
              <Divider
                height="1px"
                width="90%"
                borderColor='transparent'
                bgGradient={`linear(to-l, ${dividerGradientColors.join(', ')})`}
              />
              <Text fontSize={{ base: 'lg', md: '2xl', lg: '2xl' }} fontWeight="italic" color={'#3F4A4D'}>
                {subheadingText}
              </Text>
            </VStack>
            <Stack spacing={{ base: 3, md: 8, lg: 6 }} direction={{ base: 'column', md: 'row' }}>
              <Box width="full">
                <VStack spacing={5}>
                  <Stack direction={{ base: 'row', md: 'row' }} spacing={4} justify="space-between">
                    <FormControl isRequired>
                      <InputGroup>
                        <Input type="text" name="name" placeholder={namePlaceholder} borderRadius="full" autoComplete="off" borderColor={"#0C8B71"} borderWidth={1} color={'#3F4A4D'}/>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <InputGroup>
                        <Input type="text" name="lastname" placeholder={lastnamePlaceholder} borderRadius="full" autoComplete="off" borderColor={"#0C8B71"} borderWidth={1} color={'#3F4A4D'}/>
                      </InputGroup>
                    </FormControl>
                  </Stack>

                  <Stack direction={{ base: 'row', md: 'row' }} spacing={4} justify="space-between">
                    <FormControl isRequired>
                      <InputGroup>
                        <Input type="email" name="email" placeholder={emailPlaceholder} borderRadius="full" autoComplete="off" borderColor={"#0C8B71"} borderWidth={1} color={'#3F4A4D'}/>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <InputGroup>
                        <Input type="tel" name="phone" placeholder={phonePlaceholder} borderRadius="full" autoComplete="off" borderColor={"#0C8B71"} borderWidth={1} color={'#3F4A4D'}/>
                      </InputGroup>
                    </FormControl>
                  </Stack>

                  <FormControl isRequired>
                    <InputGroup>
                      <Input type="text" name="subject" placeholder={subjectPlaceholder} borderRadius="full" autoComplete="off" borderColor={"#0C8B71"} borderWidth={1} color={'#3F4A4D'}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <Textarea
                      name="message"
                      placeholder={messagePlaceholder}
                      rows={6}
                      resize="none"
                      borderRadius="16px"
                      borderColor={"#0C8B71"} 
                      borderWidth={1}
                      color={'#3F4A4D'}/>
                  </FormControl>

                  <Button
                    color="white"
                    width="180px"
                    borderRadius="full"
                    bg={buttonColor}
                    _hover={{
                      bg: buttonHoverColor,
                    }}
                    type="submit">
                    {submitButtonText}
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default RecadoButtons;
