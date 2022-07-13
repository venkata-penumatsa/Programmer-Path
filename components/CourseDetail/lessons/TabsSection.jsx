import React from "react";
import {
  chakra,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import {
  AiOutlineStar,
  AiOutlineQuestionCircle,
  AiOutlineUnorderedList,
  AiOutlineInfoCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import TrainerProfile from "../TrainerProfile";

const TabsSection = ({ overview }) => {
  const tabsList = [
    {
      heading: "Overview",
      data: overview,
      icon: AiOutlineUnorderedList,
    },
    {
      heading: "About Trainer",
      data: "About Trainer Data",
      icon: AiOutlineInfoCircle,
    },
  ];

  return (
    <Tabs>
      <TabList overflowY={{ base: "scroll", md: "inherit" }}>
        {tabsList.map((tab, index) => (
          <Tab key={index}>
            <Icon as={tab.icon} w={4} h={4} />
            <chakra.span ml={2} whiteSpace="nowrap">
              {tab.heading}
            </chakra.span>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabsList.map((tab, index) => (
          <TabPanel key={index}>
            <p>{tab.data}</p>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsSection;
