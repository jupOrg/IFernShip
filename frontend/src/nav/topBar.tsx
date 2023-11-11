import { SearchInput } from "../common/searchInput";
import { Tabs } from "./tabs";

export function TopBar() {
  return (
    <div className="flex-row w-full justify-evenly">
      <Tabs />
      <SearchInput />
    </div>
  );
}
