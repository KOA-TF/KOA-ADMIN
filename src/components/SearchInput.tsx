import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { StringParam, useQueryParam, withDefault } from "use-query-params";

export function SearchInput() {
  const [value, setValue] = useState("");

  const [, setSearchParam] = useQueryParam(
    "search",
    withDefault(StringParam, ""),
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParam(value);
    }
  };

  useEffect(() => {
    if (value === "") {
      setSearchParam("");
    }
  }, [setSearchParam, value]);

  return (
    <div className="relative flex w-full max-w-sm items-center">
      <input
        className="w-full rounded-lg bg-gray-100 px-5 py-4 pl-14 text-lg outline-blue-600 placeholder:text-gray-400"
        placeholder="검색하기"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon className="absolute left-5" size={24} />
    </div>
  );
}
