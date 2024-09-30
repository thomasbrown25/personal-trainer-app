import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

import store from "store/store";
import { setAuthToken } from "utils/api.utils";
import { loadUser } from "store/user/user.action";
import { USER_ACTION_TYPES } from "store/user/user.types";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Styling
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import "./assets/global.css";

// Components
import Sidenav from "layouts/sidenav";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController, setMiniSidenav } from "context";

// Images
import brandWhite from "assets/images/favicon.png";
import brandDark from "assets/images/favicon.png";

// Pages
import LoginPage from "pages/login/login.page";
import RegisterPage from "pages/register/register.page";

// Admin Pages
import AdminDashboardPage from "pages/admin/dashboard/dashboard.page";
import AdminProfilePage from "pages/admin/profile/profile.page";
import AdminSettingsPage from "pages/admin/settings/settings.page";

// Trainer Pages
import TrainerDashboardPage from "pages/trainer/dashboard/dashboard.page";
import TrainerProfilePage from "pages/trainer/profile/profile.page";
import TrainerSettingsPage from "pages/trainer/settings/settings.page";

// Client Pages
import ClientDashboardPage from "pages/client/dashboard/dashboard.page";
import ClientProfilePage from "pages/client/profile/profile.page";
import ClientSettingsPage from "pages/client/settings/settings.page";

// Private Routing
import AdminRoutes from "utils/private-routing/admin-route";
import TrainerRoutes from "utils/private-routing/trainer-route";
import ClientRoutes from "utils/private-routing/client-route";

import sidenavRoutes from "sidenav.routes";
import ClientManagementPage from "pages/trainer/client-management/client-management.page";
import AddNewClientPage from "pages/trainer/add-new-client/add-new-client.page";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  useEffect(() => {
    // check for token in the local storage when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    } else {
      console.log("no token");
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token)
        store.dispatch({ type: USER_ACTION_TYPES.SIGN_OUT });
    });
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [pathname]);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          {/* <Sidenav
            color={sidenavColor}
            brand={
              (transparentSidenav && !darkMode) || whiteSidenav
                ? brandDark
                : brandWhite
            }
            brandName="Personal Trainer"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          {/* <Configurator /> */}
        </>
      )}
      {/* {layout === "vr" && <Configurator />} */}

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />

        <Route element={<AdminRoutes />}>
          <Route
            index
            path="/admin-dashboard"
            element={<AdminDashboardPage />}
          />
          <Route path="/admin-profile" element={<AdminProfilePage />} />
          <Route path="/admin-settings" element={<AdminSettingsPage />} />
          <Route path="*" element={<Navigate to="/admin-dashboard" />} />
        </Route>

        <Route element={<TrainerRoutes />}>
          <Route
            index
            path="/trainer-dashboard"
            element={<TrainerDashboardPage />}
          />
          <Route path="/trainer-profile" element={<TrainerProfilePage />} />
          <Route path="/trainer-settings" element={<TrainerSettingsPage />} />
          <Route
            path="/trainer-client-management"
            element={<ClientManagementPage />}
          />
          <Route path="/add-new-client" element={<AddNewClientPage />} />
          <Route path="*" element={<Navigate to="/trainer-dashboard" />} />
        </Route>

        <Route element={<ClientRoutes />}>
          <Route
            index
            path="/client-dashboard"
            element={<ClientDashboardPage />}
          />
          <Route path="/client-profile" element={<ClientProfilePage />} />
          <Route path="/client-settings" element={<ClientSettingsPage />} />
          <Route path="*" element={<Navigate to="/client-dashboard" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
