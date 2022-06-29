import React from "react";
//Chakra
import { Text, Button, useColorModeValue } from "@chakra-ui/react";

const User_Sign_In = ({ is_free }) => {
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
        Hi You are not yet enrolled into the course. Click below to enroll into
        the course{" "}
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
        {is_free ? (
          <div> Enroll Now (Free) </div>
        ) : (
          <div> Enroll Now (Premium) </div>
        )}
      </Button>
    </>
  );
};

export default User_Sign_In;
