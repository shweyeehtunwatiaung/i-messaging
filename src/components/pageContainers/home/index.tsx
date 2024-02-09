"use client";

import { Box, Flex, Grid } from "@radix-ui/themes";
import React from "react";

interface Props {
  title?: any;
}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Grid columns="1">
        <Box className="fixed top-0 left-0 w-full h-full z-30">
          <Flex justify="center" align="center" width="100%" height="100%">
            <p className="text-sky-500">Welcome Home Component !!</p>
          </Flex>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
