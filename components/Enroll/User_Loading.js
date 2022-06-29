import React from "react";
import { Text, Button, useColorModeValue } from "@chakra-ui/react";

const User_Loading = () => {
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
        Loading...
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
        isLoading
      >
        Loading...
      </Button>
    </>
  );
};

export default User_Loading;
