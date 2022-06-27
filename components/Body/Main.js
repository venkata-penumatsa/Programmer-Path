import Hero from "./Hero";
import CardLayout from "../Card/CardLayout";
import { Box } from "@chakra-ui/react";

const Main = ({ data }) => {
  return (
    <Box>
      <Hero />
      <CardLayout data={data} />
    </Box>
  );
};

export default Main;
