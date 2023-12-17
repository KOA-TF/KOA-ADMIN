import { SearchIcon } from "lucide-react";
import { useState } from "react";

export function SearchInput() {
  const [value, onChange] = useState("");

  return (
    <div className="max-w-xs">
      <input
        placeholder="검색하기"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon size={24} />
    </div>
  );
}
