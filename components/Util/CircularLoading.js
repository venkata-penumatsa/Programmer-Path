import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

import React from "react";

const CircularLoading = () => {
  return (
    <div>
      <CircularProgress isIndeterminate color="teal" size="30px" />
    </div>
  );
};

export default CircularLoading;
