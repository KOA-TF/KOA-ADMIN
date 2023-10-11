import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const displayLogout = true;
  const handleLogout = () => {};

  const navigate = useNavigate();
  const handleRedirectToHome = () => {
    navigate("/");
  };

  return (
    <Flex
      as="header"
      w={"full"}
      h={"16"}
      px={"4"}
      alignItems={"center"}
      borderBottom={"1px"}
      borderColor={"gray.200"}
    >
      <Flex gap={"6"} alignItems={"center"}>
        <Button variant={"unstyled"} onClick={handleRedirectToHome}>
          <Text>KUSITMS +</Text>
        </Button>
        <Text fontWeight={"bold"}>ADMIN</Text>
      </Flex>
      <Box flex={1}></Box>
      {displayLogout ? (
        <Button w={"40"} variant={"ghost"} onClick={handleLogout}>
          Logout
        </Button>
      ) : null}
    </Flex>
  );
};
