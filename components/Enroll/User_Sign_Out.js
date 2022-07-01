import React, { useState } from "react";
//Chakra
import {
  Text,
  Button,
  useColorModeValue,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
// Next JS
import NextLink from "next/link";
// Components
import SignInModelComponent from "../Body/SignInModelComponent";

const User_Sign_Out = ({ is_free }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        fontWeight="medium"
        fontSize="sm"
        color={textColor}
        noOfLines={2}
        textAlign="center"
      >
        Click below to Enroll (Please note - you need to login to Enroll)
      </Text>

      {/* <NextLink
        href={{
          pathname: "/sign-in",
        }}
        passHref
      > */}
      <Button
        w={{ base: "100%", sm: "auto" }}
        h={12}
        px={6}
        size="lg"
        rounded="xs"
        mb={{ base: 2, sm: 0 }}
        zIndex={5}
        lineHeight={1}
        colorScheme="teal"
        onClick={onOpen}
      >
        {is_free ? (
          <div> Enroll Now (Free) </div>
        ) : (
          <div> Enroll Now (Premium) </div>
        )}
      </Button>
      {/* </NextLink> */}

      {isOpen && (
        <SignInModelComponent
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default User_Sign_Out;
