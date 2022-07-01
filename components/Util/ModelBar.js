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

const ModelBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div sx={{ backgroundcolor: "#1a202c" }}>
      <>
        <Button onClick={onOpen}> Sign-In</Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="lg"
          colorScheme={"#1a202c"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={10}>
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
                </VStack>
              </Center>
              <SignIn />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default ModelBar;
