import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

// components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { getClients } from "store/trainer/trainer.action";

const ClientPreview = ({ trainer: { clients }, getClients }) => {
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    getClients(user?.id);
  }, [getClients, user?.id]);

  return (
    <MDBox sx={{ height: 400, width: "100%" }}>
      <MDBox
        pt={0}
        mb={2}
        lineHeight={1.25}
        display="flex"
        justifyContent="space-between"
      >
        <MDTypography variant="h5" fontWeight="medium">
          Clients
        </MDTypography>
        <MDTypography
          variant="button"
          color="info"
          component={Link}
          to="/trainer/client-management"
          sx={{ "&:hover": { textDecoration: "underline !important" } }}
        >
          Manage your clients
        </MDTypography>
      </MDBox>

      <MDBox
        display="flex"
        justifyContent="space-between"
        pb={1}
        borderBottom="0.0625rem solid #3d444d!important"
      >
        <MDTypography variant="h6" fontWeight="medium">
          Name
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">
          Last Viewed
        </MDTypography>
      </MDBox>

      <MDBox>
        {clients.length > 0 ? (
          clients.map((client, i) => (
            <MDBox
              key={i}
              display="flex"
              justifyContent="space-between"
              width="100%"
              borderBottom="0.0625rem solid #3d444d!important"
            >
              <MDTypography
                variant="h6"
                fontWeight="regular"
                display="flex"
                py={0.5}
                component={Link}
                to="/client/profile"
                color="info"
                sx={{
                  "&:hover": { textDecoration: "underline !important" },
                  cursor: "pointer"
                }}
              >
                {client.firstname} {client.lastname}
              </MDTypography>
              <MDTypography
                variant="h6"
                fontWeight="regular"
                display="flex"
                py={0.5}
              >
                {moment(client.lastVisited).format("MMM Do, h:mm:ss a")}
              </MDTypography>
            </MDBox>
          ))
        ) : (
          <MDTypography variant="h6">No Clients </MDTypography>
        )}
      </MDBox>
    </MDBox>
  );
};

ClientPreview.propTypes = {
  trainer: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  trainer: state.trainer
});

export default connect(mapStateToProps, { getClients })(ClientPreview);
