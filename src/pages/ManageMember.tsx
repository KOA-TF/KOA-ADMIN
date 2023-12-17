import { SearchInput } from "../components/SearchInput";
import * as DTO from "../models";

export function ManageMember() {
  return (
    <div className="flex w-full flex-col items-center p-9">
      <div className="w-full max-w-4xl items-end gap-10">
        <SearchInput />
        <div className="w-full">
          <table>
            <TableHeader />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <thead className="bg-gray-100">
      <tr>
        {[
          "ID",
          "기수",
          "이름",
          "전화번호",
          "생년월일",
          "이메일",
          "운영진",
          "관리",
        ].map((header) => {
          return (
            <th className="text-center" key={header}>
              {header}
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
        <tr key={member.id}>
          <td>{member.id}</td>
          <td>{member.gisu}</td>
          <td>{member.name}</td>
          <td>{member.phoneNumber}</td>
          <td>{member.birthDate}</td>
          <td>{member.email}</td>
          <td>{member.isAdmin ? "Y" : "N"}</td>
          <td className="flex justify-center">
            <button>수정</button>
            <button>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
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
