import { FaBriefcase, FaBuilding, FaUser } from "react-icons/fa";
import { TabItem } from "./tabItem";

export function Tabs() {
  return (
    <>
      <TabItem to="/estagios">
        <FaBriefcase /> Estágios
      </TabItem>
      <TabItem to="/empresas">
        <FaBuilding /> Empresas
      </TabItem>
      <TabItem to="/user/editar">
        <FaUser /> Conta
      </TabItem>
    </>
  );
}
