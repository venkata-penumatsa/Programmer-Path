import React, { useState } from "react";
import {
  chakra,
  Box,
  Icon,
  Text,
  Button,
  Flex,
  Stack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import VerticalDivider from "../Util/VerticalDivider";
import NextLink from "next/link";
import { convertMinsToHrsMins } from "../Util/Common";
import PreviewModelComponent from "../Body/PreviewModelComponent";

const LessonsSection = ({ lessons }) => {
  // console.log("lessons", lessons);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [video, setVideo] = useState();
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Lessons
      </chakra.h1>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <chakra.h3
          fontSize="lg"
          fontWeight="bold"
          display={{ base: "none", md: "block" }}
        >
          Course Content
        </chakra.h3>
        <VerticalDivider display={{ base: "none", md: "block" }} />
        <chakra.h3 fontSize="lg" fontWeight="bold">
          {lessons.length} Sections
        </chakra.h3>
        <VerticalDivider />
        <chakra.h3 fontSize="lg" fontWeight="bold">
          02H:30M
        </chakra.h3>
      </Stack>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        borderWidth="0 1px 0 1px"
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
      >
        {/* Section Header */}

        {lessons.map((lesson, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {lesson.category}
                </Box>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  alignItems="center"
                >
                  <chakra.span>
                    {/* {lesson.content.length}{" "}
                    {`Lesson${lesson.content.length > 1 ? "s" : ""}`} */}
                    {lesson.total_lessons}{" "}
                    {`Lesson${lesson.total_lessons > 1 ? "s" : ""}`}
                  </chakra.span>
                  <VerticalDivider
                    height="15px"
                    display={{ base: "none", sm: "block" }}
                  />{" "}
                  <chakra.span>10 min</chakra.span>
                </Stack>
              </AccordionButton>
            </h2>

            {/* Lessons */}

            <AccordionPanel pb={4}>
              <Stack direction="column" spacing={4}>
                {lesson.ps_lessonsListUsingCat_id.map((content, index) => (
                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ base: "flex-start", sm: "center" }}
                    key={index}
                  >
                    <HStack>
                      <Icon
                        as={BsFillPlayCircleFill}
                        w={5}
                        h={5}
                        color="teal"
                      />
                      <chakra.h2 fontSize="lg" fontWeight="500">
                        {index + 1}) {content.lesson_desc}
                      </chakra.h2>
                    </HStack>
                    <HStack mt={{ base: 2, sm: 0 }} spacing="1">
                      {/* <Button colorScheme="teal" size="xs">
                       Preview 
                      </Button> */}
                      {/* <VerticalDivider height="15px" /> */}
                      <Text>
                        {content.video_length_in_minutes} min
                        {/* {convertMinsToHrsMins(content.video_length_in_minutes)} */}
                        {/* {content.video_length_in_minutes >= 60 ? (
                          <>
                            {" "}
                            {convertMinsToHrsMins(
                              content.video_length_in_minutes
                            )}{" "}
                          </>
                        ) : (
                          <> {content.video_length_in_minutes} min</>
                        )} */}
                      </Text>
                    </HStack>
                  </Flex>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {isOpen && (
        <PreviewModelComponent
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          course_preview={course_preview}
        />
      )}
    </Box>
  );
};

export default LessonsSection;
