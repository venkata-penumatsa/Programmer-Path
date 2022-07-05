import React, { useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import TopBar from "./TopBar";
import VideoSection from "./VideoSection";
import TabsSection from "./TabsSection";
import CircularLoading from "../../Util/CircularLoading";

const Main = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;

    const load_data = async () => {
      console.log("Mainnn2");
      const response = await fetch("/api/get_lessons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const final_response = await response.data_json;
      // console.log("final response is", await response.json());

      if (!response.ok) {
        console.log("nasty error", response.status, "- ", response.statusText);
      }

      if (response.ok) {
        const data = await response.json();
        // console.log("final response 2", data);
        if (!ignore) {
          console.log("inside ignore");
          setData(data);
        }
      }
    };

    load_data();

    return () => {
      ignore = true;
    };
  }, []);

  console.log("lesson-data", data);

  return (
    <Container maxWidth={"6xl"}>
      {!data ? (
        <CircularLoading />
      ) : (
        <>
          <Box>
            <TopBar
              slug={data.data.slug}
              trainer_name={data.data.trainer_name}
              total_sections={data.data.ps_course_categoryList.length}
              total_lessons={10}
            />
            <VideoSection data={data.data.ps_course_categoryList} />
            <TabsSection />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Main;
