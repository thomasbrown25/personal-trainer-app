import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const Header = ({ user: { currentUser }, title, subTitle }) => {
  return (
    <Grid item xs={12} xl={12}>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={3}
        px={2}
      >
        <MDTypography variant="h5" fontWeight="medium">
          {title}
        </MDTypography>
        {subTitle && (
          <MDTypography variant="h6" fontWeight="medium" py={2}>
            {subTitle}
          </MDTypography>
        )}
      </MDBox>
    </Grid>
  );
};
Header.propTypes = {
  user: PropTypes.object.isRequired
  // refresh: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  user: state.user,
  refresh: state.refresh
});
export default connect(mapStateToProps, {})(Header);
