import { SignIn, ClerkLoading } from "@clerk/nextjs";
import { Center, Text, VStack } from "@chakra-ui/react";

const SignInPage = () => {
  return (
    <div>
      <br />
      <br />

      <Center>
        <VStack>
          <Text fontWeight="black" fontSize="xl">
            Sign In
          </Text>

          <Text fontWeight="black" fontSize="md">
            Welcome to the passwordless sign-In
          </Text>
        </VStack>
      </Center>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
