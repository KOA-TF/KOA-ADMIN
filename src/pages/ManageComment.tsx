import { VStack } from "@chakra-ui/react";
import { MockTable } from "../components/MockTable";
import { SearchInput } from "../components/SearchInput";

export const ManageComment = () => {
  const handleSearchSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <VStack as={"main"} p={9} alignItems={"center"} w={"full"}>
      <VStack gap={"10"} w={"full"} maxW={"container.xl"} alignItems={"end"}>
        <SearchInput onSubmit={handleSearchSubmit} />
        <MockTable />
      </VStack>
    </VStack>
  );
};
