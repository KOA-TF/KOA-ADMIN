import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";

interface SearchInputProps {
  onSubmit: (value: string) => void;
}

export const SearchInput = ({ onSubmit }: SearchInputProps) => {
  const [value, onChange] = useState("");

  return (
    <InputGroup maxW={"container.sm"}>
      <InputLeftElement h={"full"} pl={"4"}>
        <SearchIcon />
      </InputLeftElement>
      <Input
        size={"lg"}
        variant={"filled"}
        placeholder="검색하기"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && onSubmit(value);
        }}
      ></Input>
    </InputGroup>
  );
};
