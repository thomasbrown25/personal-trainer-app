import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const UserDetail = ({ title, detail }) => {
  return (
    <MDBox display="flex">
      <MDTypography variant="h6" mr={1}>
        {title}:
      </MDTypography>
      <MDTypography
        variant="body2"
        color="info"
        sx={{ textTransform: "capitalize" }}
      >
        {detail ? detail : "N/A"}
      </MDTypography>
    </MDBox>
  );
};

export default UserDetail;
