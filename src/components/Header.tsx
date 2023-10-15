import { Image, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../configs/routes";

export const Header = () => {
  return (
    <Flex
      as="header"
      w={"full"}
      h={"16"}
      flexShrink={0}
      px={"4"}
      alignItems={"center"}
      borderBottom={"1px"}
      borderColor={"gray.200"}
    >
      <Flex gap={"5"} alignItems={"center"}>
        <HomeButton />
        <AdminName />
      </Flex>
      <Box flex={1}></Box>
      <LogoutButton />
    </Flex>
  );
};

const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Button variant={"unstyled"} onClick={handleClick}>
      <Image src={"logo.svg"}></Image>
    </Button>
  );
};

const AdminName = () => {
  return <Text fontWeight={"bold"}>ADMIN</Text>;
};

const LogoutButton = () => {
  const displayLogout = true;
  // TODO: implement logout
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate(ROUTES.AUTHENTICATION);
  };

  return (
    <>
      {displayLogout ? (
        <Button w={"40"} variant={"ghost"} onClick={handleLogout}>
          Logout
        </Button>
      ) : null}
    </>
  );
};
