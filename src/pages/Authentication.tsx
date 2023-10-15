import { Text, Card, Flex, HStack, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../configs/routes";

export const Authentication = () => {
  return (
    <Flex
      as={"main"}
      bg={"gray.100"}
      h={"100vh"}
      justify={"center"}
      align={"center"}
    >
      <Card
        shadow={"sm"}
        h={"340"}
        p={"12"}
        display={"flex"}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
        gap={"10"}
      >
        <Title />
        <Form />
      </Card>
    </Flex>
  );
};

const Title = () => {
  return (
    <Text fontWeight={"bold"} fontSize={"xl"} as="h1">
      관리자용 비밀번호를 입력해주세요
    </Text>
  );
};

const Form = () => {
  // TODO: implement login
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <HStack>
      <Input
        variant={"filled"}
        w={"335px"}
        size={"lg"}
        placeholder={"비밀번호 입력하기"}
        type={"password"}
      />
      <Button
        variant={"solid"}
        colorScheme={"blue"}
        size={"lg"}
        onClick={handleSubmit}
      >
        로그인
      </Button>
    </HStack>
  );
};
