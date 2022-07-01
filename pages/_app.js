// import "@fontsource/poppins";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import theme from "../components/layouts/Theme";
import ProgressBar from "../components/Util/ProgressBar";
import { useRouter } from "next/router";
// Clerk
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import "../clerk.css";
// -----------------------------------------------------------

const customThemeOptions = {
  // general: {
  //   /* Padding mod for selected Clerk elements */
  //   padding: "20em",
  //   /* Border radius for selected Clerk elements */
  //   borderRadius: "10px",
  // },
};

const publicPages = [
  "/",
  "/test",
  "/course/[slug]",
  "/sign-in/[[...index]]",
  "/sign-up/[[...index]]",
];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ChakraProvider theme={theme}>
      <ProgressBar />
      <ClerkProvider {...pageProps} theme={customThemeOptions}>
        <Header />
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
        <Footer />
      </ClerkProvider>
    </ChakraProvider>
  );
}

export default MyApp;
