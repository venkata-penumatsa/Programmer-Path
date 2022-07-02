import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

const SignInModelComponent = ({ isOpen, onOpen, onClose, slug }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div sx={{ backgroundcolor: "#1a202c" }}>
      <>
        {/* <Button onClick={onOpen}> Sign-In</Button> */}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="lg"
        >
          <ModalOverlay />
          <ModalContent bg="#1a202c">
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <VStack>
                  <Text fontWeight="black" fontSize="xl">
                    Sign In
                  </Text>

                  <Text fontWeight="black" fontSize="sm">
                    Welcome to the passwordless sign-In
                  </Text>

                  <Text fontWeight="black" fontSize="xs">
                    If you are a first-time visitor, Create an account by
                    clicking Sign-Up.
                  </Text>

                  <SignIn afterSignInUrl={`/course/${slug}`} />
                </VStack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default SignInModelComponent;
