import React from "react";
import { chakra, Stack, Icon, HStack } from "@chakra-ui/react";
import VerticalDivider from "../../Util/VerticalDivider";
import {
  FaReact,
  FaChalkboardTeacher,
  FaAlignJustify,
  FaBars,
} from "react-icons/fa";
import { BsClock } from "react-icons/bs";

const TopBar = ({ slug, trainer_name, total_sections, total_lessons }) => {
  console.log("props received", slug, trainer_name);

  const data = [
    { text: slug, icon: FaReact },
    { text: trainer_name, icon: FaChalkboardTeacher },
    { text: `Total sections - ${total_sections}`, icon: FaBars },
    { text: `Total lessons - ${total_lessons}`, icon: FaBars },
  ];

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", sm: "center" }}
      justifyContent="flex-start"
      mb={5}
      flexWrap="wrap"
      divider={<VerticalDivider display={{ base: "none", sm: "block" }} />}
    >
      {data.map((item, index) => (
        <BarItem key={index} icon={item.icon} text={item.text} />
      ))}
    </Stack>
  );
};

const BarItem = ({ icon, text }) => {
  return (
    <HStack spacing={3}>
      <Icon as={icon} w={5} h={5} />
      <chakra.h3 fontSize="xs" fontWeight="medium">
        {text}
      </chakra.h3>
    </HStack>
  );
};

export default TopBar;
