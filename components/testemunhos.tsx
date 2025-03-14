import {
  Box,
  Text,
  Stack,
  Container,
  Avatar,
  Center,
  IconButton,
  HStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { useState} from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useGesture } from 'react-use-gesture';

interface TestimonialProps {
  text: string;
  avatarSrc: string;
  name: string;
  title: string;
}

const Testimonial = ({ text, avatarSrc, name, title }: TestimonialProps) => {
  const boxBackgroundColor = 'rgba(26, 26, 26, 0.3)';

  return (
    <Box
      w="220px"
      h="310px"
      borderRadius="20px"
      backgroundColor={boxBackgroundColor}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      className="custom-background"
      position="relative"
      p={4}
      pt={8}
    >
      <Stack align={'center'} pos={'relative'} mt={5}>
        <Avatar
          src={avatarSrc}
          size={'xl'}
          border={`7px solid ${boxBackgroundColor}`}
          position="absolute"
          bottom="96%"
          backgroundColor="transparent" 
        />
        <Box textAlign="center">
          <Text fontWeight={'medium'} fontStyle={'italic'}>
            {name}
          </Text>
          <Text fontWeight={'italic'} fontSize={'sm'} fontStyle={'italic'} color={'white'}>
            {title}
          </Text>
        </Box>
        <Text textAlign={'center'} color={'white'} fontSize={'sm'} fontWeight={'italic'} fontStyle={'italic'}>
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

interface WithSpeechBubblesProps {
  testimonials: TestimonialProps[];
}

const WithSpeechBubbles: React.FC<WithSpeechBubblesProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction < 0 ? -300 : 300,
      y: 50,
      opacity: 0,
    }),
    center: {
      x: 20,
      y: 50,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      y: 50,
      opacity: 0,
    }),
  };

  const bind = useGesture({
    onDrag: ({ active }) => {
      setIsDragging(active);
    },
    onDragEnd: ({ offset: [x], direction: [dirX], velocity }) => {
      if (isDragging) {
        if (Math.abs(x) > 15 && velocity > 0.2) { 
          if (dirX > 0) {
            prevSlide();
          } else {
            nextSlide();
          }
        }
        setIsDragging(false);
      }
    },
  });

  const showNavigation = useBreakpointValue({ base: false, sm: true });

  return (
    <Center>
      <Container maxW="6xl" position="relative" h="100%">
        <HStack spacing={10} justifyContent="center" alignItems="center" h="100%">
          {showNavigation && (
            <IconButton
              rounded="full"
              aria-label="Previous testimonial"
              icon={<FaChevronLeft />}
              onClick={prevSlide}
              size="lg"
              colorScheme="whiteAlpha"
              bg="transparent"
            />
          )}
          <Box
            w="100%"
            maxW="1200px"
            h="420px"
            borderRadius="25px"
            boxShadow="0px 10px 24px rgba(0, 0, 0, 0.3)"
            backgroundImage="linear-gradient(to right, rgba(0, 119, 104, 0.92), rgba(0, 34, 90, 0.92)), url('/CrissCross.png')"
            backgroundBlendMode="multiply"
            backgroundSize="cover, 1440px 5409px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            className="custom-background"
            position="relative"
            overflow="hidden"
            {...bind()}
          >
            <Container maxW="7xl" position="relative" h="105%">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'keyframes', stiffness: 100, damping: 10 },
                    opacity: { duration: 0.25 },
                  }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <HStack spacing={12}>
                    {testimonials.map((testimonial, index) => {
                      const slideIndex = (currentIndex + index) % testimonials.length;
                      return (
                        <motion.div key={index} style={{ paddingLeft: '100px', height: '1px', width: '200px', display: 'inline-block', opacity: index === 0 ? 0.8 : 1 }}>
                          <Testimonial
                            text={testimonials[slideIndex].text}
                            avatarSrc={testimonials[slideIndex].avatarSrc}
                            name={testimonials[slideIndex].name}
                            title={testimonials[slideIndex].title}
                          />
                        </motion.div>
                      );
                    })}
                  </HStack>
                </motion.div>
              </AnimatePresence>
            </Container>
          </Box>
          {showNavigation && (
            <IconButton
              rounded="full"
              aria-label="Next testimonial"
              icon={<FaChevronRight />}
              onClick={nextSlide}
              size="lg"
              colorScheme="whiteAlpha"
              bg="transparent"
            />
          )}
        </HStack>
      </Container>
    </Center>
  );
};

export default WithSpeechBubbles;
