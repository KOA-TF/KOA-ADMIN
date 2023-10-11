import { VStack } from "@chakra-ui/react";
import { SearchInput } from "../components/SearchInput";
import { MockTable } from "../components/MockTable";

export const ManageMemberPage = () => {
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
