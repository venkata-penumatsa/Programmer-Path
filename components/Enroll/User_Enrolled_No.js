import React, { useState } from "react";
//Chakra
import { Text, Button, useColorModeValue } from "@chakra-ui/react";
import User_Loading from "./User_Loading";

const User_Enrolled_No = ({
  user_fullname,
  slug,
  is_free,
  rerender,
  setRerender,
}) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  const enroll = async () => {
    console.log("inside enroll function ");

    const response = await fetch("/api/insert_enrollment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: slug,
      }),
    });

    if (!response.ok) {
      console.log("error", error.message);
    }

    if (response.ok) {
      const response_formatted = await response.json();
      // console.log(response_formatted);
      // const id = response_formatted.data.insertPs_course_enrollments.id;
      // console.log("id", id);
      if (response_formatted.data) {
        setRerender(true);
      }
    }
  };

  return (
    <>
      <Text
        fontWeight="medium"
        fontSize="sm"
        color={textColor}
        noOfLines={2}
        textAlign="center"
      >
        Hello, {user_fullname}. You have not yet registered for this course.
        Enroll in the course by clicking the button below.
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
        onClick={enroll}
      >
        Enroll Now...
      </Button>
    </>
  );
};

export default User_Enrolled_No;
