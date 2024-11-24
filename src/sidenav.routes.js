// Custom components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
//import profilePicture from 'assets/images/favicon.png';
import { logout } from "store/user/user.action";

const sidenavRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Library",
    key: "library",
    route: "/library",
    icon: <Icon fontSize="medium">people</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    route: "/clients",
    icon: <Icon fontSize="medium">people</Icon>,
    noCollapse: true
  },
  { type: "divider", key: "divider-0" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "/",
    icon: <Icon fontSize="medium">receipt_long</Icon>,
    noCollapse: true
  }
];

export default sidenavRoutes;
