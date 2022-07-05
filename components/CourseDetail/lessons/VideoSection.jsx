import React, { useState, useEffect } from "react";
import { Flex, Stack, AspectRatio } from "@chakra-ui/react";
import LessonsSection from "./LessonsSection";
import { lessons } from "../../../data/courses";
import dynamic from "next/dynamic";
import CircularLoading from "../../Util/CircularLoading";

const VideoSection = ({ data }) => {
  const [current_video, setCurrent_Video] = useState(null);
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  useEffect(() => {
    let ignore = false;
    const first_video = data[0].ps_lessonsListUsingCategory2[0].video_url_main;
    console.log("first video", first_video);
    if (!ignore) {
      setCurrent_Video(first_video);
    }
    return () => {
      ignore = true;
    };
  }, []);

  console.log("state CurrentVideo", current_video);

  return (
    <Flex direction={{ base: "column", lg: "row" }} mb={{ base: 5, md: 1 }}>
      {/* Left Video Panel */}

      {current_video ? (
        <AspectRatio w={{ base: "100%", lg: "65%" }} ratio={18 / 9}>
          <ReactPlayer
            url={current_video}
            width="100%"
            height="100%"
            controls={true}
          />
        </AspectRatio>
      ) : (
        <CircularLoading />
      )}

      {/* Right Lessons List */}
      <Stack
        mt={{ base: 5, lg: 0 }}
        ml={{ base: 0, lg: 5 }}
        w={{ base: "100%", lg: "35%" }}
      >
        <LessonsSection lessons={data} setCurrent_Video={setCurrent_Video} />
      </Stack>
    </Flex>
  );
};

export default VideoSection;
