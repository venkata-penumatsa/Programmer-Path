import React, { useState } from "react";
import {
  chakra,
  Box,
  Icon,
  Text,
  Flex,
  Stack,
  HStack,
  Progress,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import VerticalDivider from "../../Util/VerticalDivider";
import { FaRegHandPointRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

const LessonsSection = ({ lessons, setCurrent_Video }) => {
  console.log("lessons-", lessons);

  const [selectedId, setSelectedId] = useState(0);

  return (
    <Box>
      <Box mb={3}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Heading icon={FaRegHandPointRight} text="Current Lesson - 1" />
          {/* <VerticalDivider />
          <Heading icon={TiTickOutline} text="Completed Lessons - 2/2" /> */}
        </Stack>
        {/* <Stack direction="row" alignItems="center" spacing={2}>
          <Progress value={20} size="xs" colorScheme="yellow" w="90%" />
          <chakra.span>20%</chakra.span>
        </Stack> */}
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple h="22rem" overflowY="scroll">
        {lessons.map((lesson, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="sm">
                  {lesson.category}
                </Box>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  alignItems="center"
                  fontSize="sm"
                >
                  <chakra.span>
                    {/* {lesson.content.length}{" "}
                    {`Lesson${lesson.content.length > 1 ? "s" : ""}`} */}
                    2 Lessons
                  </chakra.span>
                  <VerticalDivider
                    height="15px"
                    display={{ base: "none", sm: "block" }}
                  />{" "}
                  <chakra.span>10 min</chakra.span>
                </Stack>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack direction="column" spacing={2}>
                {lesson.ps_lessonsListUsingCategory2.map((content, index) => (
                  <Flex
                    key={index}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <HStack
                      bg={
                        selectedId === content.id ? "teal.400" : "transparent"
                      }
                      w="90%"
                      p={3}
                      cursor="pointer"
                      onClick={() => {
                        setSelectedId(content.id);
                        setCurrent_Video(content.video_url_main);
                      }}
                    >
                      <chakra.h2 fontSize="md" fontWeight="500">
                        {/* {index + 1}) {content.title} */}
                        Hi
                      </chakra.h2>
                    </HStack>
                    {/* <Checkbox colorScheme="teal" /> */}
                  </Flex>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

const Heading = ({ icon, text }) => {
  return (
    <Flex alignItems="center">
      <Icon as={icon} w={4} h={4} />
      <Text fontSize="xs" fontWeight="500" textTransform="uppercase" ml={1}>
        {text}
      </Text>
    </Flex>
  );
};

export default LessonsSection;
