import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const UserDetail = ({ title, detail }) => {
  return (
    <MDBox display="flex">
      <MDTypography variant="h6" mr={1}>
        {title}:
      </MDTypography>
      <MDTypography variant="body2" sx={{ textTransform: "capitalize" }}>
        {detail}
      </MDTypography>
    </MDBox>
  );
};

export default UserDetail;
