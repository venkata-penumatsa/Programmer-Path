//React
import React from "react";
// Next JS
import NextLink from "next/link";
//Chakra
import { Text, Button, useColorModeValue, Link } from "@chakra-ui/react";
// Components
import { fDate } from "../Util/Common";

const User_Enrolled_Yes = ({ user_fullname, enrollment_start_date, slug }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <>
      <Text
        fontWeight="medium"
        fontSize="sm"
        color={textColor}
        noOfLines={2}
        textAlign="center"
      >
        {" "}
        Hi {user_fullname}, you are enrolled in this course. Click below to
        continue learning.
      </Text>

      <NextLink
        href={{
          pathname: "/course/[slug]/lessons",
          query: {
            slug: slug,
          },
        }}
        passHref
      >
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
          as={Link}
        >
          Resume Course
        </Button>
      </NextLink>
    </>
  );
};

export default User_Enrolled_Yes;
