import { TableContainer, VStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../components/DataTable";
import { SearchInput } from "../components/SearchInput";
import * as DTO from "../models";

interface Data extends DTO.Member {}

const columnHelper = createColumnHelper<Data>();
const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("gisu", {
    header: "기수",
  }),
  columnHelper.accessor("name", {
    header: "이름",
  }),
  columnHelper.accessor("phoneNumber", {
    header: "전화번호",
  }),
  columnHelper.accessor("birthDate", {
    header: "생년월일",
  }),
  columnHelper.accessor("email", {
    header: "이메일",
  }),
  columnHelper.accessor("isAdmin", {
    header: "운영진",
    cell: (value) => (value ? "Y" : "N"),
  }),
];

export const ManageMember = () => {
  const handleSearchSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <VStack as={"main"} p={9} alignItems={"center"} w={"full"}>
      <VStack gap={"10"} w={"full"} maxW={"container.xl"} alignItems={"end"}>
        <SearchInput onSubmit={handleSearchSubmit} />
        <TableContainer w={"full"}>
          <DataTable columns={columns} data={data} />
        </TableContainer>
      </VStack>
    </VStack>
  );
};

const data: Data[] = [
  {
    id: 1,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 2,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 3,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 4,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 5,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 6,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 7,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 8,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 9,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
  {
    id: 10,
    gisu: 28,
    name: "김철수",
    phoneNumber: "010-1234-5678",
    birthDate: "990101",
    email: "fake@gmail.com",
    isAdmin: false,
  },
];
