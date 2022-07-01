// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Model: {
      variants: {
        colorScheme: "#ffffff",
      },
    },
  },
});

export default theme;
