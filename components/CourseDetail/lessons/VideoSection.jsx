import React from "react";
import { Flex, Stack, AspectRatio } from "@chakra-ui/react";
import LessonsSection from "./LessonsSection";
import { lessons } from "../../../data/courses";
import dynamic from "next/dynamic";

const VideoSection = ({ data }) => {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  console.log("video data", data);
  return (
    <Flex direction={{ base: "column", lg: "row" }} mb={{ base: 5, md: 1 }}>
      {/* Left Video Panel */}
      <AspectRatio w={{ base: "100%", lg: "65%" }} ratio={18 / 9}>
        <ReactPlayer
          url="https://vz-1f67a773-3cd.b-cdn.net/9c3dee84-cab1-41fa-b777-9baabb050f88/playlist.m3u8"
          width="100%"
          height="100%"
          controls={true}
        />
      </AspectRatio>

      {/* Right Lessons List */}
      <Stack
        mt={{ base: 5, lg: 0 }}
        ml={{ base: 0, lg: 5 }}
        w={{ base: "100%", lg: "35%" }}
      >
        <LessonsSection lessons={lessons} />
      </Stack>
    </Flex>
  );
};

export default VideoSection;
