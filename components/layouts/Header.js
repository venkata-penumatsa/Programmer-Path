import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Stack,
  Input,
  HStack,
  Collapse,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { GiFlowerPot } from "react-icons/gi";
// Clerk
import { SignedIn, SignedOut, UserButton, ClerkLoading } from "@clerk/nextjs";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.600", "white")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        align={"center"}
        justifyContent={"space-between"}
      >
        {/* Hamburger Icon */}
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* Logo */}
        {/* */}

        <Flex
          flex={{ base: 1, md: "inherit" }}
          justify={{ base: "center", md: "start" }}
        >
          <NextLink
            href={{
              pathname: "/",
            }}
            passHref
          >
            <HStack>
              <GiFlowerPot size={25} />
              <Text
                as={Link}
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                // fontFamily={"heading"}
                // color={useColorModeValue("gray.800", "white")}
                // color="#81E6D9"
                fontWeight="black"
                fontSize="xl"
              >
                Programmer Path
              </Text>
            </HStack>
          </NextLink>
        </Flex>

        {/* Search Input field */}
        {/* <Input
          placeholder="Search ..."
          bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          border={0}
          _focus={{
            bg: "whiteAlpha.300",
          }}
          display={{ base: "none", md: "block" }}
          w={"30%"}
        /> */}

        {/* Buttons */}

        <ClerkLoading>Loading...</ClerkLoading>

        <SignedOut>
          <Stack direction="row" spacing={2}>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={3}
            >
              <NextLink
                href={{
                  pathname: "/sign-in",
                }}
                passHref
              >
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  // colorScheme="teal"
                  variant="outline"
                  as={Link}
                >
                  Sign In
                </Button>
              </NextLink>

              <NextLink
                href={{
                  pathname: "/sign-up",
                }}
                passHref
              >
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  as={Link}
                  // colorScheme="teal"
                >
                  Sign Up
                </Button>
              </NextLink>
            </Stack>
            {/* <ColorModeSwitcher /> */}
          </Stack>
        </SignedOut>

        <SignedIn>
          <Stack direction="row" spacing={2}>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={3}
            >
              <NextLink
                href={{
                  pathname: "/my-enrollments",
                }}
                passHref
              >
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  // colorScheme="teal"
                  variant="solid"
                  as={Link}
                >
                  My Enrollments
                </Button>
              </NextLink>
            </Stack>
            <Stack>
              <UserButton userProfileUrl="/user" />
            </Stack>

            {/* <ColorModeSwitcher /> */}
          </Stack>
        </SignedIn>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <>
      <SignedOut>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ md: "none" }}
        >
          <NextLink
            href={{
              pathname: "/sign-in",
            }}
            passHref
          >
            <Button
              fontSize={"sm"}
              fontWeight={600}
              as={Link}
              w="100%"
              colorScheme="teal"
              variant="outline"
            >
              Sign In
            </Button>
          </NextLink>

          <NextLink
            href={{
              pathname: "/sign-up",
            }}
            passHref
          >
            <Button
              fontSize={"sm"}
              fontWeight={600}
              as={Link}
              colorScheme="teal"
              w="100%"
            >
              Sign Up
            </Button>
          </NextLink>
        </Stack>
      </SignedOut>

      <SignedIn>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ md: "none" }}
          spacing={3}
        >
          <Stack direction="row" spacing={2}>
            <NextLink
              href={{
                pathname: "/my-enrollments",
              }}
              passHref
            >
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                colorScheme="teal"
                variant="outline"
                as={Link}
              >
                My Enrollments
              </Button>
            </NextLink>
            {/* <UserButton /> */}
          </Stack>
        </Stack>
      </SignedIn>
    </>
  );
};
