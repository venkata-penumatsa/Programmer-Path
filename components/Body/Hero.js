import { Box, Text, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box mb={{ base: 5, md: 10 }}>
      <Center>
        <Text fontSize="xl" fontWeight="black">
          Learn techskills at ease
        </Text>
      </Center>
    </Box>
  );
};

export default Hero;
