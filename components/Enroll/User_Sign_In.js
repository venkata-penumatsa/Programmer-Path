//React
import React, { Fragment, useEffect, useState } from "react";
//Chakra
import { useColorModeValue } from "@chakra-ui/react";
// Clerk
import { useUser } from "@clerk/nextjs";
//Components
import User_Enrolled_Yes from "./User_Enrolled_Yes";
import User_Enrolled_No from "./User_Enrolled_No";
import ErrorAlert from "../Util/ErrorAlert";

const User_Sign_In = ({ is_free, slug }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  const { user } = useUser();
  const [enrolled, setEnrolled] = useState(null);
  const [enrolled_error, setEnrolledError] = useState(null);
  const [rerender, setRerender] = useState(false);

  console.log("render", rerender);

  useEffect(() => {
    let ignore = false;

    const check_enrollment = async () => {
      const response = await fetch("/api/check_enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: slug,
        }),
      });

      if (!response.ok) {
        console.log("check enrollment error", response);
        setEnrolledError("Network error");
      }

      if (response.ok) {
        console.log("raw response", response);
        const client_response = await response.json();
        console.log("client response", client_response);

        if (client_response.data) {
          setEnrolled(
            client_response.data.getPs_course_enrollmentsUsingSlugAndUser.length
          );
        } else {
          setEnrolledError("there is an error in getting data");
        }
      }
    };

    check_enrollment();
  }, [rerender]);

  console.log("enrolled", enrolled);

  return (
    <>
      {enrolled === 0 && (
        <User_Enrolled_No
          user_fullname={user.fullName}
          is_free={is_free}
          slug={slug}
          rerender={rerender}
          setRerender={setRerender}
        />
      )}

      {enrolled === 1 && (
        <User_Enrolled_Yes
          user_fullname={user.fullName}
          enrollment_start_date={enrolled.enrollment_start_date}
        />
      )}

      {enrolled_error && <ErrorAlert />}
    </>
  );
};

export default User_Sign_In;
