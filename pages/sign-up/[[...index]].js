import { SignUp } from "@clerk/nextjs";
import { Center, Text } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <div>
      <br />
      <br />
      <Center>
        <Text fontWeight="black" fontSize="xl">
          Sign Up
        </Text>
      </Center>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
