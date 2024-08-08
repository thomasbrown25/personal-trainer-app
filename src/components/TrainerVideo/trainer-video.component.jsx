import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import { Button } from "@mui/material";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

const TrainerVideo = ({ url, title }) => {
  return (
    <MDBox textAlign="center" m={3} display="flex" justifyContent="center">
      <MDBox display="flex" alignItems="flex-start" flexDirection="column">
        <MDTypography variant="h5" fontWeight="medium" pb={2}>
          {title}
        </MDTypography>
        <ReactPlayer url={url} controls={true} width="800px" height="450px" />
      </MDBox>
    </MDBox>
  );
};

TrainerVideo.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(TrainerVideo);
