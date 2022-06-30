//React
import React from "react";
//Chakra
import { Text, Button, useColorModeValue } from "@chakra-ui/react";
// Components
import { fDate } from "../Util/Common";

const User_Enrolled_Yes = ({ user_fullname, enrollment_start_date }) => {
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
        Hi {user_fullname} As of {enrollment_start_date}, you are enrolled in
        this course. Click here to continue learning.
      </Text>
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
        // onClick={enroll}
      >
        Resume Course
      </Button>
    </>
  );
};

export default User_Enrolled_Yes;
