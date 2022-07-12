// Chakra
import {
  chakra,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
// Icons
import { FaTwitter } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//swr
import useSWR from "swr";
// loader
import CircularLoading from "../Util/CircularLoading";

const fetcher = async (...args) => {
  const response = await fetch(...args, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

const FooterMessage = () => {
  console.log("footer message");

  const { data, error } = useSWR("/api/get_motivational_message", fetcher);

  if (error) return "Error...";
  if (!data) {
    return <CircularLoading />;
  }

  // if (data) {
  //   console.log("data is", data);
  // }

  return (
    <>
      <SocialButton label={"Twitter"}>
        <Link href="https://twitter.com/VenkatPenumatsa" isExternal>
          <FaTwitter />
        </Link>
      </SocialButton>
      <Text textAlign="center">
        {data.data.message} - {data.data.author}{" "}
      </Text>
    </>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default FooterMessage;
