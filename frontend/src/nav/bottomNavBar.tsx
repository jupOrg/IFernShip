import { Tabs } from "./tabs";

export function BottomNavBar() {
  return (
    // the outer div is just a spacer, so that the inner
    // div doesn't hide the page bottom
    <div className="h-10 sm:hidden bor">
      <div className="h-10 grid grid-cols-3 grid-flow-col fixed bottom-0 bg-white w-full">
        <Tabs />
      </div>
    </div>
  );
}
