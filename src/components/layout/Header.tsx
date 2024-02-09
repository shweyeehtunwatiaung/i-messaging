"use client";
import React from "react";
import { Box, Flex, Grid } from "@radix-ui/themes";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <>
      <Grid columns="1">
        <Box className="fixed top-0 left-0 w-full h-full z-30">
          <Flex>{title}</Flex>
        </Box>
      </Grid>
    </>
  );
};

export default Header;
