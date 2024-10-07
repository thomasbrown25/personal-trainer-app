// @mui icons
import Icon from "@mui/material/Icon";

const clientRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/client/dashboard",
    icon: <Icon fontSize="medium">dashboard</Icon>,
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

export default clientRoutes;
