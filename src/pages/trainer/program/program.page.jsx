import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { trainerPrograms } from "data";
import MainLayout from "layouts/main-layout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import MDButton from "components/MDButton";
import { Divider, Icon } from "@mui/material";
import ProgramTableHead from "./program-table-head";
import ProgramWorkout from "./program-workout";
import ProgramTable from "./program-table";

import colors from "assets/theme-dark/base/colors";

const { background } = colors;

const ProgramPage = ({ trainer: programs }) => {
  const { programId } = useParams();
  const [selectedProgram, setSelectedProgram] = useState(
    trainerPrograms.find((program) => program.id === parseInt(programId))
  );

  useEffect(() => {
    setSelectedProgram(
      trainerPrograms.find((program) => program.id === parseInt(programId))
    );
  }, [programId]);

  return (
    <MainLayout pageTitle="Program" expand>
      <MDBox width="100%" p={5} sx={{ background: background.dark }}>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MDBox pr={20}>
            <MDTypography variant="h3">
              {selectedProgram.name} Program
            </MDTypography>
            <MDTypography variant="h6" mt={2}>
              {selectedProgram.description}
            </MDTypography>
          </MDBox>
          <MDButton
            variant="outlined"
            size="small"
            color="info"
            sx={{ height: "5px", minWidth: "150px" }}
          >
            <Icon sx={{ marginRight: "6px" }}>edit</Icon>
            Edit Info
          </MDButton>
        </MDBox>

        <MDBox width="100%">
          <Divider />
        </MDBox>

        <ProgramTable program={selectedProgram} />
      </MDBox>
    </MainLayout>
  );
};

ProgramPage.propTypes = {
  trainer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  trainer: state.trainer
});

export default connect(mapStateToProps, {})(ProgramPage);
