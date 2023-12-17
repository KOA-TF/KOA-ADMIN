import { ChevronLeft, ChevronRight } from "lucide-react";
import { SearchInput } from "../components/SearchInput";
import * as DTO from "../models";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export function ManageMember() {
  return (
    <div className="flex w-full flex-col items-center p-9 pb-4">
      <div className="flex w-full max-w-5xl flex-col gap-8">
        <div className="flex justify-between">
          <SearchInput />
          <Pagination />
        </div>
        <div className="w-full">
          <table className="w-full min-w-[800px] text-center text-gray-800">
            <TableHeader />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  const columns = [
    "ID",
    "기수",
    "이름",
    "전화번호",
    "생년월일",
    "이메일",
    "운영진",
    "관리",
  ];

  return (
    <thead className="h-[76px] bg-gray-200">
      <tr>
        {columns.map((column) => {
          return (
            <th className="font-semibold" key={column}>
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function TableBody() {
  const members = data;

  return (
    <tbody>
      {members.map((member) => (
        <TableRow member={member} key={member.id} />
      ))}
    </tbody>
  );
}

function TableRow({ member }: { member: DTO.Member }) {
  return (
    <tr className="h-[64px] border-b" key={member.id}>
      <td className="w-20">{member.id}</td>
      <td>{member.gisu}</td>
      <td>{member.name}</td>
      <td>{member.phoneNumber}</td>
      <td>{member.birthDate}</td>
      <td>{member.email}</td>
      <td>{member.isAdmin ? "Y" : "N"}</td>
      <td className="flex h-[64px] items-center justify-center">
        <button className="rounded px-3 py-2 hover:bg-gray-100 active:bg-gray-200">
          수정
        </button>
        <button className="ml-2 rounded px-3 py-2 text-red-500 hover:bg-gray-100 active:bg-gray-200">
          삭제
        </button>
      </td>
    </tr>
  );
}

function Pagination() {
  // TODO: remove hardcoded totalPage
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useQueryParam(
    "page",
    withDefault(NumberParam, 1),
  );

  const handleDecrease = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleIncrease = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-gray-100 active:bg-gray-200"
        onClick={handleDecrease}
      >
        <ChevronLeft />
      </button>
      <select
        className="h-10 w-20 appearance-none rounded-lg border px-4 text-left outline-blue-500 hover:cursor-pointer hover:bg-gray-100"
        onChange={(e) => setCurrentPage(Number(e.target.value))}
        value={currentPage}
      >
        {Array.from({ length: totalPage }, (_, index) => {
          return (
            <option value={index + 1} key={index + 1}>
              {index + 1}
            </option>
          );
        })}
      </select>
      <div className="w-8"> / {totalPage}</div>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-gray-100 active:bg-gray-200"
        onClick={handleIncrease}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

const data: DTO.Member[] = [
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
