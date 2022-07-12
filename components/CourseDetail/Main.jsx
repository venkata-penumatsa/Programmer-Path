import React from "react";
import { Text, Box, Link, Stack, Icon, HStack } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import HeroSection from "./HeroSection";
import LessonsSection from "./LessonsSection";
import FeaturesSection from "./FeaturesSection";
import SkillsSection from "./SkillsSection";
import OverviewSection from "./OverviewSection";
import ReviewsSection from "./ReviewSection";
import NextLink from "next/link";
import {
  courses,
  lessons,
  features,
  skills,
  reviewData,
  ratingSummary,
  overviewDescription,
} from "../../data/courses";
import TrainerProfile from "./TrainerProfile";
import { NextSeo } from "next-seo";

const Main = ({ data }) => {
  console.log("single page data", data);

  const {
    slug,
    short_desc,
    long_desc,
    overview,
    trainer_name,
    trainer_avatar,
    total_reviews,
    rating,
    price,
    length_in_minutes,
    language,
    level,
    is_free,
    number_of_enrollments,
    img_url,
    ps_course_categoryList,
    ps_seoList,
    ps_what_you_will_learnList,
    ps_skills_you_will_gainList,
  } = data.getPs_course;

  return (
    <Box>
      <NextSeo title={ps_seoList[0].title} description={ps_seoList[0].desc} />
      <BreadcrumbSection />
      <HeroSection
        slug={slug}
        short_desc={short_desc}
        long_desc={long_desc}
        trainer_name={trainer_name}
        trainer_avatar={trainer_avatar}
        rating={rating}
        total_reviews={total_reviews}
        language={language}
        level={level}
        length_in_minutes={length_in_minutes}
        price={price}
        is_free={is_free}
        number_of_enrollments={number_of_enrollments}
        img_url={img_url}
      />
      <Stack spacing={10} maxW="3xl">
        <LessonsSection lessons={ps_course_categoryList} />
        <FeaturesSection features={ps_what_you_will_learnList} />
        <SkillsSection skills={ps_skills_you_will_gainList} />
        <OverviewSection description={overview} />
        <TrainerProfile />
        <ReviewsSection reviewData={reviewData} ratingSummary={ratingSummary} />
      </Stack>
    </Box>
  );
};

const BreadcrumbSection = () => {
  return (
    <HStack alignItems="center">
      <NextLink
        href={{
          pathname: "/",
        }}
        passHref
      >
        <Link>Home</Link>
      </NextLink>
      <Icon as={BiChevronRight} mt="2px !important" />
      <Text>react_js</Text>
    </HStack>
  );
};

export default Main;
