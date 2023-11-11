import { SearchInput } from "../common/searchInput";
import { Tabs } from "./tabs";

export function TopBar() {
  return (
    <div className="md:flex-row-reverse items-center w-full justify-evenly">
      <SearchInput />
      <Tabs />
    </div>
  );
}
