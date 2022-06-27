import * as React from "react";
import {
  Box,
  Image,
  Link,
  Icon,
  Flex,
  Stack,
  Text,
  Avatar,
  Button,
  HStack,
  Skeleton,
  AspectRatio,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaStar } from "react-icons/fa";
import { BsClock, BsBarChartLine } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import Badge from "../shared/Badge";
import VerticalDivider from "../shared/VerticalDivider";
import { convertMinsToHrsMins } from "../Util/Common";

const CourseCard = (props) => {
  const { course, rootProps } = props;
  const {
    slug,
    img_url,
    highlight,
    short_desc,
    price,
    trainer_name,
    trainer_avatar,
    rating,
    total_reviews,
    language,
    level,
    length_in_minutes,
  } = course;
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack
      spacing={3}
      {...rootProps}
      w={{ base: "auto", md: "17rem" }}
      h={{ base: "auto", md: "21.5rem" }}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 2}>
          <Image
            src={img_url}
            alt={"name"}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xs",
            })}
          />
        </AspectRatio>
        <Box
          position="absolute"
          top="1"
          left="1"
          p={1.5}
          bg="yellow.500"
          // rounded="md"
        >
          <Text fontSize="xs" lineHeight={1}>
            {highlight}
          </Text>
        </Box>
      </Box>

      {/* Course name and Price  */}
      <Stack spacing={2}>
        <Stack
          direction="row"
          justify="space-between"
          alignItems="center"
          height="2.6rem"
        >
          <Text
            fontWeight="medium"
            fontSize="sm"
            // color={textColor}
            noOfLines={2}
          >
            {short_desc}
          </Text>
        </Stack>
        <Stack spacing="2" direction="row" alignItems="center">
          <Avatar src={trainer_avatar} size="xs" />

          <Text fontWeight="medium" color={textColor}>
            {trainer_name}
          </Text>
        </Stack>

        {/* Star (total  Reviews) | Total enrollments */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <HStack>
            <Icon as={FaStar} color="yellow.400" />
            <Text fontSize="sm" color={textColor}>
              {rating} ({total_reviews} reviews)
            </Text>
          </HStack>
          <VerticalDivider
            height="15px"
            display={{ base: "none", sm: "block" }}
          />
          <Text fontSize="sm" color={textColor}>
            100 Enrollments
          </Text>
        </Stack>

        {/*  Badges */}
        <Flex direction="row" mt={0} flexWrap="wrap">
          <Badge icon={MdLanguage} data={language} size="sm" />
          <Badge icon={BsBarChartLine} data={level} size="sm" />
          <Badge
            icon={BsClock}
            data={convertMinsToHrsMins(length_in_minutes)}
            size="sm"
          />
        </Flex>
      </Stack>

      <NextLink
        href={{
          pathname: "/course/[slug]",
          query: {
            slug: slug,
          },
        }}
        passHref
      >
        <Button as={Link} size="md" colorScheme="teal" variant="solid">
          Start Learning...
        </Button>
      </NextLink>
    </Stack>
  );
};

export default CourseCard;
