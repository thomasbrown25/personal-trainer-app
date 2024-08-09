import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

// react-router-dom components
import { useNavigate, Link } from "react-router-dom";

// actions
import { login, clearLoginError } from "store/user/user.action";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/auth-layout/cover.layout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { selectUserRole } from "store/user/user.selector";

const defaultFormData = {
  email: "",
  password: ""
};

const LoginPage = ({
  login,
  clearLoginError,
  user: { isAuthenticated, error }
}) => {
  const userRole = useSelector(selectUserRole);

  const [loginError, setLoginError] = useState("");
  const handleLoginError = () => {
    setLoginError(error);
  };

  const [formData, setFormData] = useState(defaultFormData);
  const { email, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === "Admin") {
        navigate("/admin-dashboard");
      } else if (userRole === "Trainer") {
        navigate("/trainer-dashboard");
      } else if (userRole === "Client") {
        navigate("/client-dashboard");
      }
    }
  }, [isAuthenticated, navigate, userRole]);

  useEffect(() => {
    if (error) {
      handleLoginError();
    }
  });

  const onChange = (e) => {
    if (error) clearLoginError();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Must provide email and password");

    // Sign in user with email and password
    try {
      login(formData);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          setLoginError("Incorrect email or password");
          break;

        case "auth/user-not-found":
          setLoginError("Incorrect email or password");
          break;

        default:
          setLoginError(
            "Sorry we ran into an issue. Please contact support for assistance."
          );
      }
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox mx={2} mt={-3} p={2} mb={1} textAlign="center">
        <MDTypography variant="h4" fontWeight="light" color="white" mt={1}>
          Sign in to Personal Trainer
        </MDTypography>
      </MDBox>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={onSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                label="Email"
                onChange={onChange}
                fullWidth
              />
            </MDBox>

            <MDBox mb={1}>
              <MDInput
                type="password"
                name="password"
                label="Password"
                onChange={onChange}
                fullWidth
              />
            </MDBox>

            <Collapse in={loginError !== ""}>
              <MDBox>
                {loginError && (
                  <MDTypography variant="h7" fontWeight="bold" color="error">
                    {loginError}
                  </MDTypography>
                )}
              </MDBox>
            </Collapse>

            <MDBox display="flex" justifyContent="right" py={1}>
              <MDTypography
                component={Link}
                to="/password-reset"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Forgot password?
              </MDTypography>
            </MDBox>

            <MDBox mt={1} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                type="submit"
                fullWidth
              >
                sign in
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Create an account
                </MDTypography>
              </MDTypography>

              <MDBox mx={2} mt={-3} p={2} mb={1} textAlign="center">
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  sx={{ mt: 1, mb: 2 }}
                >
                  <Grid item xs={2}>
                    <MDTypography
                      component={MuiLink}
                      href="#"
                      variant="body1"
                      color="white"
                    >
                      <GoogleIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  clearLoginError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { login, clearLoginError })(LoginPage);
