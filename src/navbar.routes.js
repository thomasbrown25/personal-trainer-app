// Custom components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
//import profilePicture from 'assets/images/favicon.png';
import { logout } from "store/user/user.action";

const navbarRoutes = [
  {
    type: "collapse",
    name: "Account",
    key: "user-name",
    icon: <MDAvatar src={""} alt="Thomas Brown" size="sm" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        route: "/profile"
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/settings"
      },
      {
        name: "Logout",
        key: "logout",
        route: "/login",
        action: logout()
      }
    ]
  },
  { type: "divider", key: "divider-0" },
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
    name: "Accounts",
    key: "accounts",
    route: "/accounts",
    icon: <Icon fontSize="medium">inventory</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Upcoming",
    key: "upcoming",
    route: "/upcoming",
    icon: <Icon fontSize="medium">today</Icon>,
    noCollapse: true
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    route: "/transactions",
    icon: <Icon fontSize="medium">web_stories</Icon>,
    noCollapse: true
  },

  { type: "divider", key: "divider-1" },
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

export default navbarRoutes;
