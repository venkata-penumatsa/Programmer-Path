import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Center,
  Text,
  ModalFooter,
} from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

const FormModal = ({ isOpen, onOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={20}>
          <div>
            <br />
            <br />

            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
