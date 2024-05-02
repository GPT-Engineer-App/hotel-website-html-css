import { Box, Heading, Image, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaBed, FaSwimmingPool, FaUtensils, FaSpa } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxW="1200px" mx="auto" px={4} py={6}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Добро пожаловать в нашу гостиницу!
      </Heading>
      <Image src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwwfHx8fDE3MTQ2Nzk4Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

      <Text fontSize="lg" mt={4}>
        Наслаждайтесь непревзойденным комфортом и роскошью в лучшей гостинице города. Мы предлагаем высококлассное обслуживание и удобства для наших гостей.
      </Text>

      <Flex mt={6} direction={{ base: "column", md: "row" }} align="center">
        <Feature icon={FaBed} text="Комфортные номера" />
        <Spacer />
        <Feature icon={FaUtensils} text="Рестораны мирового класса" />
        <Spacer />
        <Feature icon={FaSwimmingPool} text="Бассейны" />
        <Spacer />
        <Feature icon={FaSpa} text="Спа-центр" />
      </Flex>

      <Button colorScheme="blue" mt={10} size="lg">
        Забронировать номер
      </Button>
    </Box>
  );
};

const Feature = ({ icon: Icon, text }) => (
  <Flex direction="column" align="center" flex="1" p={4}>
    <Icon size="3em" />
    <Text mt={2}>{text}</Text>
  </Flex>
);

export default Index;
