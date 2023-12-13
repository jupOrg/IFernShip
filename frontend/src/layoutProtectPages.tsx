import { Outlet } from "react-router-dom";
import { GradientCurve } from "./common/gradientCurve";
import { BottomNavBar } from "./nav/bottomNavBar";
import { NavBar } from "./nav/navBar";

export function LayoutProtectPages() {
  return (
    <div className="flex sm:flex-row flex-1 w-full">
      <NavBar />
      <GradientCurve />
      <Outlet />
      <BottomNavBar />
    </div>
  );
}
