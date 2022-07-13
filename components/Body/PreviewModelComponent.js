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
  AspectRatio,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const PreviewModelComponent = ({
  isOpen,
  onOpen,
  onClose,
  slug,
  course_preview,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  return (
    <div sx={{ backgroundcolor: "#1a202c" }}>
      <>
        {/* <Button onClick={onOpen}> Sign-In</Button> */}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent bg="#1a202c">
            <ModalCloseButton />
            <ModalHeader>Preview</ModalHeader>

            <ModalBody>
              <AspectRatio maxHeight={315} maxWidth={560}>
                <ReactPlayer
                  url={course_preview}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default PreviewModelComponent;
