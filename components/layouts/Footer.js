import {
  Box,
  chakra,
  Link,
  Stack,
  Text,
  Divider,
  Center,
  SimpleGrid,
  VisuallyHidden,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
// Icons
import { GiFlowerPot } from "react-icons/gi";
// Components
import FooterMessage from "./FooterMessage";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        py={{
          base: 4,
          md: 8,
        }}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={1}
        >
          <Stack spacing={6}>
            <HStack>
              <GiFlowerPot size={25} />
              <Text as={Link} fontWeight="black" fontSize="xl">
                Programmer Path
              </Text>
            </HStack>
            <Text fontSize={"xs"} pl={8}>
              {" "}
              {"   "} © 2022 All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>All Links</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>

            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>

            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Divider />
      <Center
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        py={{
          base: 4,
          md: 6,
        }}
      >
        <Stack direction="column" alignItems="center">
          <FooterMessage />
        </Stack>
      </Center>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
