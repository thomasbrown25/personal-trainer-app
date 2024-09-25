import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// react-router-dom components
import { useLocation } from "react-router-dom";

// Custom components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React context
import { useMaterialUIController, setLayout } from "context";
import DashboardNavbar from "layouts/dashboard-navbar";
import Footer from "layouts/footer";
import { max } from "moment";
import SubNavbar from "layouts/sub-navbar";

const MainLayout = ({ children, pageTitle }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <>
      <DashboardNavbar />
      {/* <SubNavbar /> */}
      <MDBox display="flex" justifyContent="center" width="100%">
        <MDBox
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            p: 3,
            position: "relative",
            minHeight: "97vh",
            maxWidth: "1280px",

            [breakpoints.up("xl")]: {
              marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
              transition: transitions.create(["margin-left", "margin-right"], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard
              })
            }
          })}
        >
          {children}
          <Footer />
        </MDBox>
      </MDBox>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(null, {})(MainLayout);
