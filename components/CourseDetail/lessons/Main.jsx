import React, { useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import TopBar from "./TopBar";
import VideoSection from "./VideoSection";
import TabsSection from "./TabsSection";
import CircularLoading from "../../Util/CircularLoading";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url, slug) => {
  console.log(url, slug);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
    }),
  });

  const data = await response.json();
  return data;
};

const Main = () => {
  const router = useRouter();
  console.log("router is", router.query.slug);

  const url = "/api/get_lessons";
  const slug = router.query.slug;

  const { data, error } = useSWR([url, slug], fetcher);

  if (error) return `"Error is" ${error.message}"`;
  if (!data) return "Loading...";

  return (
    <Container maxWidth={"6xl"}>
      <>
        <Box>
          <TopBar
            slug={data.data.slug}
            trainer_name={data.data.trainer_name}
            total_sections={data.data.ps_course_categoryList.length}
            total_lessons={10}
          />
          <VideoSection data={data.data.ps_course_categoryList} />
          <TabsSection overview={data.data.overview} />
        </Box>
      </>
    </Container>
  );
};

export default Main;
