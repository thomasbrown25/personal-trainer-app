import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// selectors
import { selectCurrentUser } from "store/user/user.selector";

// css
import colors from "assets/theme-dark/base/colors";
const { background } = colors;

const UserAvatar = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <MDBox
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      px={2}
      mb={5}
    >
      <Avatar
        alt={user?.firstname}
        src={require("assets/images/me/me-and-isaiah.jpg")}
        sx={{
          width: "20rem",
          height: "20rem",
          marginBottom: "1rem",
          border: `2.5px solid ${background.border}`
        }}
      />
      <MDBox display="flex" width="100%">
        <MDBox
          height="100%"
          width="100%"
          my={0.5}
          lineHeight={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <MDTypography variant="h4" fontWeight="medium">
            {`${user?.firstname} ${user?.lastname}`}
          </MDTypography>
          <MDTypography variant="button" color="text" fontWeight="regular">
            {user?.role}
          </MDTypography>
        </MDBox>
      </MDBox>
      <Link to="/trainer-profile" style={{ width: "100%" }}>
        <MDButton
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            border: `1px solid ${background.border} !important`
          }}
        >
          Edit profile
        </MDButton>
      </Link>
    </MDBox>
  );
};

export default UserAvatar;
