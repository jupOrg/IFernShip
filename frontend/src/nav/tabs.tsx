import { FaBriefcase, FaBuilding, FaUser } from "react-icons/fa";
import { TabItem } from "./tabItem";

export function Tabs() {
  return (
    <>
      <TabItem to="/internships">
        <FaBriefcase /> Estágios
      </TabItem>
      <TabItem to="/enterprises">
        <FaBuilding /> Empresas
      </TabItem>
      <TabItem to="/me/update">
        <FaUser /> Conta
      </TabItem>
    </>
  );
}
