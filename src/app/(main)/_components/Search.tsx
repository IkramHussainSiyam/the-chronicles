"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Show from "~/components/helpers/Show";
import { Input } from "~/components/ui/input";
import routes from "~/lib/routes";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const route = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const clearSearch = () => {
    setSearchText("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`${routes.explore_stories}?search=${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 size-5 stroke-primary/40" />
      <Input
        value={searchText}
        onChange={handleSearch}
        className="rounded-full bg-muted/90 border-none px-9"
        placeholder="Search..."
      />
      <Show when={searchText.length > 0}>
        <X
          onClick={clearSearch}
          className="absolute top-1/2 -translate-y-1/2 right-3 size-4 hover:stroke-primary stroke-primary/40"
        />
      </Show>
    </form>
  );
};

export default Search;
