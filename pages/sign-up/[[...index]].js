import { SignUp } from "@clerk/nextjs";
import { Center, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const router = useRouter();
  // console.log("current route", router.asPath);
  return (
    <div>
      <br />
      {router.asPath == "/sign-up" && (
        <Center>
          <VStack>
            <Text fontWeight="black" fontSize="xl">
              Sign Up
            </Text>
            <Text fontWeight="black" fontSize="sm">
              You&apos;ve arrived to the Programmer Path. A world of knowledge
            </Text>
          </VStack>
        </Center>
      )}

      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
