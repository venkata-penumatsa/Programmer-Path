import Hero from "./Hero";
import CardLayout from "../Card/CardLayout";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Main = ({ data }) => {
  return (
    <Box>
      <NextSeo
        title="Learn techskills at ease | Programmer Path"
        description="Programmer Path is a learning management system (LMS) that will provide technical courses."
      />
      <Hero />
      <CardLayout data={data} />
    </Box>
  );
};

export default Main;
