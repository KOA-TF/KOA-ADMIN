import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir={"column"} h={"100vh"}>
      <Header />
      <Flex flex={1}>
        <Sidebar />
        <Box as="main" overflow={"scroll"}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
