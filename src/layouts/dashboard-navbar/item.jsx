import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";

const Item = ({ text, to, end }) => {
  return (
    <MDBox display="flex" pr={end ? 0 : 10}>
      <Link to={to}>
        <MDTypography
          variant="h6"
          textTransform="capitalize"
          pl={1}
          fontWeight="medium"
          lineHeight={1.75}
        >
          {text}
        </MDTypography>
      </Link>
    </MDBox>
  );
};

export default Item;
