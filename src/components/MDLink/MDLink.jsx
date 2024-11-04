import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";

const MDLink = ({ children, to }) => {
  return (
    <MDTypography
      variant="h6"
      fontWeight="regular"
      display="flex"
      component={Link}
      to={to}
      color="info"
      sx={{
        "&:hover": { textDecoration: "underline !important" },
        cursor: "pointer"
      }}
    >
      {children}
    </MDTypography>
  );
};

export default MDLink;
