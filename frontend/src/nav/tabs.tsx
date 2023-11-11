import { FaBriefcase, FaBuilding } from "react-icons/fa";
import { TabItem } from "./tabItem";

export function Tabs() {
  return (
    <div className="flex-row">
      <TabItem to="/estagios">
        <FaBriefcase /> Estágios
      </TabItem>
      <TabItem to="/empresas">
        <FaBuilding /> Empresas
      </TabItem>
    </div>
  );
}
