import React, { Fragment } from "react";
import {
  chakra,
  Text,
  Box,
  Image,
  Button,
  HStack,
  Stack,
  Flex,
  Icon,
  Avatar,
  Divider,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Badge from "../shared/Badge";
import { BsClock, BsBarChartLine } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { FaPlay, FaStar } from "react-icons/fa";
import FormModal from "./FormModal";
import VerticalDivider from "../shared/VerticalDivider";
import { convertMinsToHrsMins } from "../Util/Common";

const HeroSection = ({
  short_desc,
  long_desc,
  trainer_name,
  trainer_avatar,
  rating,
  total_reviews,
  language,
  level,
  length_in_minutes,
  price,
  is_free,
  number_of_enrollments,
  img_url,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.400");

  const previewlesson = () => {
    alert("hello");
  };

  return (
    <Fragment>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        justifyContent="space-between"
        mb={10}
        w="100%"
      >
        {/* Left Panel */}
        <Stack spacing={5} mt={5} w={{ base: "100%", md: "60%" }}>
          <chakra.h1 fontSize="3xl" fontWeight="bold">
            {short_desc}
          </chakra.h1>
          <Text fontWeight="medium" color={textColor} noOfLines={2}>
            {long_desc}
          </Text>
          <Stack spacing="2" direction="row" alignItems="center">
            <Avatar src={trainer_avatar} size="sm" />

            <Text fontWeight="medium" color={textColor}>
              {trainer_name}
            </Text>
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "flex-start", sm: "center" }}
          >
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontSize="sm" color={textColor}>
                {rating} ({total_reviews})
              </Text>
            </HStack>
            <VerticalDivider
              height="15px"
              display={{ base: "none", sm: "block" }}
            />
            <Text fontSize="sm" color={textColor}>
              {number_of_enrollments} Enrollments
            </Text>
          </Stack>
          <Divider />
          <Flex direction="row" mt={2} flexWrap="wrap">
            <Badge icon={MdLanguage} data={language} size="md" />
            <Badge icon={BsBarChartLine} data={level} size="md" />
            <Badge
              icon={BsClock}
              data={convertMinsToHrsMins(length_in_minutes)}
              size="md"
            />
            <Badge icon={BsClock} data={price} size="md" />
            <Badge icon={BsClock} data="TAG" size="md" />
          </Flex>
        </Stack>

        {/* Right Panel */}
        <Stack spacing={2} w={{ base: "100%", md: "40%" }}>
          <Box
            position="relative"
            height="200px"
            // rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
            _after={{
              content: '""',
              // bg: "black",
              filter: "blur(5px)",
              position: "absolute",
              w: "100%",
              bottom: "0",
              height: "70",
              borderRadius: "5px",
            }}
          >
            <IconButton
              aria-label="Play Button"
              colorScheme="teal"
              icon={<FaPlay />}
              rounded="full"
              size="lg"
              color="white"
              position="absolute"
              left="50%"
              top="50%"
              _hover={{ shadow: "md" }}
              transform="translateX(-50%) translateY(-50%)"
              onClick={previewlesson}
            />
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src={img_url}
            />
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "lg" }}
              position="absolute"
              left="50%"
              bottom={{ base: "5%", sm: "2%" }}
              zIndex={55}
              transform="translateX(-46%) translateY(-50%)"
              color="white"
            >
              Preview the Course
            </Text>
          </Box>

          <Text
            fontWeight="medium"
            fontSize="sm"
            color={textColor}
            noOfLines={2}
            textAlign="center"
          >
            Hi, test you are enrolled on 29-May-2022 this will expire on
            28-Jun-2022 click below to resume learning.
          </Text>
          <Button
            w={{ base: "100%", sm: "auto" }}
            h={12}
            px={6}
            size="lg"
            rounded="xs"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            colorScheme="teal"
            onClick={onOpen}
          >
            {is_free ? (
              <div> Enroll Now (Free) </div>
            ) : (
              <div> Enroll Now (Premium) </div>
            )}
          </Button>
        </Stack>
      </Stack>
      {isOpen && (
        <FormModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </Fragment>
  );
};

export default HeroSection;
