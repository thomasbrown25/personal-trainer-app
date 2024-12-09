import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MainLayout from "layouts/main-layout";
import MDInput from "components/MDInput";

import ProgamsTable from "./progams-table";

// data
import { trainerPrograms } from "data";
import MDModal from "components/MDModal/modal.component";

const ProgramsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = trainerPrograms.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Save program");
    navigate("/trainer/programs/edit/1");
    setOpen(false);
  };

  return (
    <MainLayout pageTitle="Programs">
      <MDBox display="flex" justifyContent="space-between" mb={5}>
        <MDTypography variant="h3">Programs</MDTypography>

        <MDBox>
          <MDButton variant="contained" color="info" onClick={handleOpen}>
            + Create Program
          </MDButton>

          <MDModal open={open} setOpen={setOpen}>
            <MDTypography variant="h5">Create New Program</MDTypography>
            <MDTypography variant="h6" mt={2}>
              First, let's name this program
            </MDTypography>
            <MDBox mt={2}>
              <MDInput placeholder="Program name" fullWidth />
            </MDBox>
            <MDBox mt={2}>
              <MDInput placeholder="Description" fullWidth />
            </MDBox>

            <MDBox mt={2}>
              <MDButton color="success" onClick={handleSave}>
                Save and add workouts
              </MDButton>
            </MDBox>
          </MDModal>
        </MDBox>
      </MDBox>

      <MDBox>
        <MDInput
          placeholder="Search..."
          type="text"
          value={searchTerm}
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </MDBox>

      <MDBox>
        <ProgamsTable programs={filteredItems} />
      </MDBox>
    </MainLayout>
  );
};

export default ProgramsPage;
