// @mui icons
import Icon from "@mui/material/Icon";

const trainerRoutes = [
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    route: "/trainer/client-management",
    icon: <Icon fontSize="medium">people</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Library",
    key: "library",
    route: "/trainer/library",
    icon: <Icon fontSize="medium">collections</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Programs",
    key: "programs",
    route: "/trainer/programs",
    icon: <Icon fontSize="medium">calendar_month</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Teams",
    key: "teams",
    route: "/trainer/teams",
    icon: <Icon fontSize="medium">reduce_capacity</Icon>,
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

export default trainerRoutes;
