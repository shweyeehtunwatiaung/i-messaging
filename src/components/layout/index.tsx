import { Box, Section } from "@radix-ui/themes";
import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const PageLayout: React.FC<Props> = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <>
      <Section className="relative max-w-[400px] m-auto" p="0">
        <Header {...props} />

        <Box className={className}>{children}</Box>
      </Section>
    </>
  );
};

export default PageLayout;
