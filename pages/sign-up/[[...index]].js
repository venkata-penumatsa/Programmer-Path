import { SignUp } from "@clerk/nextjs";
import { Center, Text, VStack } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <div>
      <br />

      <Center>
        <VStack>
          <Text fontWeight="black" fontSize="xl">
            Sign Up
          </Text>
          <Text fontWeight="black" fontSize="md">
            Welcome to the passwordless sign-In
          </Text>
        </VStack>
      </Center>

      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
