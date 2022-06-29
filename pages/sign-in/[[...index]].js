import { SignIn } from "@clerk/nextjs";
import { Center, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  // console.log("current route", router.asPath);
  return (
    <div>
      <br />
      <br />
      {router.asPath == "/sign-in" && (
        <Center>
          <VStack>
            <Text fontWeight="black" fontSize="xl">
              Sign In
            </Text>

            <Text fontWeight="black" fontSize="sm">
              Welcome to the passwordless sign-In
            </Text>

            <Text fontWeight="black" fontSize="xs">
              If you are a first-time visitor, Create an account by clicking
              Sign-Up.
            </Text>
          </VStack>
        </Center>
      )}
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
