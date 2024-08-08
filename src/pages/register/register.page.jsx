import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// react-router-dom components
import { useNavigate, Link } from "react-router-dom";

// actions
import { register } from "store/user/user.action";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
// import BasicLayout from "layouts/auth-layout/basic.layout";
import CoverLayout from "layouts/auth-layout/cover.layout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import Collapse from "@mui/material/Collapse";
import { saveSettings } from "store/user/user.action";

const defaultFormData = {
  registrationCode: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const defaultUserSettings = {
  darkMode: true,
  sidenavMini: false,
  sidenavType: "dark"
};

const RegisterPage = ({ register, user: { isAuthenticated, error } }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [signupError, setSignupError] = useState();
  const [isSignupError, setIsSignupError] = useState(false);

  const [formData, setFormData] = useState(defaultFormData);
  const { firstname, lastname, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const handleTermsOnChange = (e) => {
    setTermsChecked(e.target.checked);
    handleSignupError(null);
  };

  const handleSignupError = (error) => {
    setSignupError(error);
    setIsSignupError(error ? true : false);
  };

  useEffect(() => {
    isAuthenticated && navigate("/dashboard");
  });

  useEffect(() => {
    if (error) {
      handleSignupError(error);
    }
  }, [error, handleSignupError]);

  useEffect(() => {
    if (password !== confirmPassword) {
      handleSignupError("passwords do not match");
    } else {
      handleSignupError(null);
    }
  }, [password, confirmPassword]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !confirmPassword)
      return handleSignupError("Please enter all the required fields");

    if (!termsChecked)
      return handleSignupError(
        "Please review and accept the terms and conditions"
      );

    if (password !== confirmPassword)
      return handleSignupError("Passwords do not match");

    // Register user
    try {
      register(formData);
      saveSettings(defaultUserSettings);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        case "auth/user-not-found":
          alert("No account with that email");
          break;

        default:
          console.error(err.message);
      }
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox mx={2} mt={-3} p={3} mb={1} textAlign="center">
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Join us today
        </MDTypography>
        <MDTypography display="block" variant="button" color="white" my={1}>
          Enter your registration code from your trainer
        </MDTypography>
      </MDBox>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={onSubmit}>
            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="text"
                label="Registration Code"
                name="registrationCode"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="text"
                label="First Name"
                name="firstname"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="text"
                label="Last Name"
                name="lastname"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="email"
                label="Email"
                name="email"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="password"
                label="Password"
                name="password"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                onChange={onChange}
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                variant="standard"
                fullWidth
              />
            </MDBox>

            {signupError && (
              <Collapse in={isSignupError}>
                <MDTypography variant="h7" fontWeight="bold" color="error">
                  {signupError}
                </MDTypography>
              </Collapse>
            )}

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox checked={termsChecked} onChange={handleTermsOnChange} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>

              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                type="submit"
                fullWidth
              >
                sign up
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
};

RegisterPage.propTypes = {
  user: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  saveSettings: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { register, saveSettings })(
  RegisterPage
);
