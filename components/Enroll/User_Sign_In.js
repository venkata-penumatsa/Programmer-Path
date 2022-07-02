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
import User_Loading from "./User_Loading";

const User_Sign_In = ({ is_free, slug }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  const { user } = useUser();
  const [isLoading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState();
  const [enrolled_error, setEnrolledError] = useState();
  const [rerender, setRerender] = useState(false);

  console.log("render", rerender);

  useEffect(() => {
    fetch("/api/check_enrollment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: slug,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setEnrolled(
            data.data.getPs_course_enrollmentsUsingSlugAndUser.length
          );
          setLoading(false);
        }
      })
      .catch((err) => setEnrolledError(err.message));
  }, [rerender]);

  console.log("enrolled", enrolled);

  return (
    <>
      {isLoading ? <User_Loading /> : ""}

      {enrolled === 0 && (
        <User_Enrolled_No
          user_fullname={user.fullName}
          is_free={is_free}
          slug={slug}
          rerender={rerender}
          setRerender={setRerender}
        />
      )}

      {enrolled > 0 && (
        <User_Enrolled_Yes
          slug={slug}
          user_fullname={user.fullName}
          enrollment_start_date={enrolled.enrollment_start_date}
        />
      )}

      {enrolled_error && <ErrorAlert />}
    </>
  );
};

export default User_Sign_In;
