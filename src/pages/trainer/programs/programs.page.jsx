import { useState } from "react";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MainLayout from "layouts/main-layout";
import MDInput from "components/MDInput";

import ProgamTable from "./progam-table";

// data
import { trainerPrograms } from "data";

const ProgramsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = trainerPrograms.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout pageTitle="Programs">
      <MDBox display="flex" justifyContent="space-between" mb={5}>
        <MDTypography variant="h3">Programs</MDTypography>

        <MDBox>
          <MDButton variant="contained" color="info">
            + Create Program
          </MDButton>
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
        <ProgamTable programs={filteredItems} />
      </MDBox>
    </MainLayout>
  );
};

export default ProgramsPage;
