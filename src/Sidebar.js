import {
  Chat,
  EmojiFlags,
  ExpandMore,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messenger" Icon={Chat} />
      <SidebarRow title="Marketplace" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow Icon={ExpandMore} />
    </div>
  );
}

export default Sidebar;
