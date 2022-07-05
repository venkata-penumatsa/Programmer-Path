//React
import React from "react";
//Chakra
import { useColorModeValue, Button, Text, Link } from "@chakra-ui/react";
// Clerk
import { useUser } from "@clerk/nextjs";
//Components
import User_Loading from "./User_Loading";
//swr
import useSWR from "swr";
// Next JS
import NextLink from "next/link";

const fetcher = async (url, slug_in) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug_in,
    }),
  });

  const data = await response.json();
  return data;
};

const User_Sign_In = ({ is_free, slug }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  const { user } = useUser();

  const url = "/api/check_enrollment";
  const slug_in = slug;

  const { data, error, mutate } = useSWR([url, slug_in], fetcher);

  if (error) return "Error...";
  if (!data) {
    return <User_Loading />;
  }

  if (data) {
    console.log("data is", data.data);
  }

  const enrollz = async () => {
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
      console.log("error");
    }

    if (response.ok) {
      const data = await response.json();
      mutate();
    }
  };

  return (
    <>
      {data.data.length === 0 && (
        // <User_Enrolled_No
        //   user_fullname={user.fullName}
        //   is_free={is_free}
        //   slug={slug}
        //   rerender={rerender}
        //   setRerender={setRerender}
        // />

        <>
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={textColor}
            noOfLines={2}
            textAlign="center"
          >
            Hello, {user.fullName}. You have not yet registered for this course.
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
            onClick={enrollz}
          >
            Enroll Now...
          </Button>
        </>
      )}

      {data.data.length > 0 && (
        // <User_Enrolled_Yes
        //   slug={slug}
        //   user_fullname={user.fullName}
        //   enrollment_start_date={enrolled.enrollment_start_date}
        // />

        <>
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={textColor}
            noOfLines={2}
            textAlign="center"
          >
            {" "}
            Hi {user.fullName}, you are enrolled in this course. Click below to
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
      )}
    </>
  );
};

export default User_Sign_In;
