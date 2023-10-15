/* eslint-disable @typescript-eslint/ban-ts-comment */
import { VStack } from "@chakra-ui/react";
import "@silevis/reactgrid/styles.css";
import { MockGrid } from "../components/MockGrid";

export const AddMember = () => {
  return (
    <VStack as={"main"} p={9} alignItems={"center"} w={"full"}>
      <MockGrid />
    </VStack>
  );
};
