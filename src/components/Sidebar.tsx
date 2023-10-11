import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";
import { ROUTES } from "../configs/routes";

const SIDEBAR_ITEMS: SidebarItemProps[] = [
  { label: "학회원 관리", href: ROUTES.MANAGE_MEMBER },
  { label: "학회원 추가", href: ROUTES.ADD_MEMBER },
  { label: "커리큘럼 등록", href: ROUTES.ADD_CURRICULUM },
  { label: "댓글 신고접수", href: ROUTES.MANAGE_COMMENT },
];

export const Sidebar = () => {
  return (
    <Flex flexDir={"column"} as="aside" bg={"gray.100"} w="48" pt="16">
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem key={item.href} {...item} />
      ))}
    </Flex>
  );
};

interface SidebarItemProps {
  label: string;
  href: string;
}

const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const shouldMatchForRoot = href === ROUTES.MANAGE_MEMBER;
  const isMatch = window.location.pathname.endsWith(href);
  const isActive =
    isMatch ||
    (shouldMatchForRoot && window.location.pathname.endsWith(ROUTES.BASE));

  return (
    <ChakraLink
      as={ReactRouterLink}
      to={href}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"full"}
      fontSize={"xl"}
      fontWeight={"semibold"}
      _hover={{ textDecoration: "none" }}
      h={"16"}
      bg={isActive ? "blue.500" : "transparent"}
      color={isActive ? "white" : "black"}
    >
      {label}
    </ChakraLink>
  );
};
