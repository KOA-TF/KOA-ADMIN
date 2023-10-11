import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Flex flexDir={"column"} h={"100vh"}>
      <Header />
      <Flex flex={1}>
        <Sidebar />
        <Box as={"main"} overflow={"scroll"} flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};
