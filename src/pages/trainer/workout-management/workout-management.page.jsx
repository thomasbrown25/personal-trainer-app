import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

// Mui components
import { Card, Avatar, CardContent, Icon } from "@mui/material";

// components
import MainLayout from "layouts/main-layout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import LineChart from "components/LineChart";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { getClients } from "store/trainer/trainer.action";

// css
import colors from "assets/theme-dark/base/colors";
import DataTable from "components/DataTable";
const { background } = colors;

const WorkoutManagementPage = ({ trainer: { clients }, getClients }) => {
  const user = useSelector(selectCurrentUser);
  const [clientTableData, setClientTableData] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    getClients(user?.id);
  }, [getClients, user?.id]);

  const buildData = () => {
    let data = [];

    clients?.map((client) => {
      data.push({
        id: client.id,
        name: client.firstname + " " + client.lastname,
        fitnessLevel: client.fitnessLevel,
        gender: client.sex,
        lastVisited: moment(client.lastVisited).format("MM-DD-YYYY")
      });
    });
    setClientTableData(data);
  };

  useEffect(() => {
    buildData();
  }, []);

  useEffect(() => {
    if (clients.length > 0) {
      setSelectedClient(clients[5]);
    }
  }, []);

  const handleClientClick = (id) => {
    setSelectedClient(clients[id]);
  };

  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <MDBox
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          width="1400px"
        >
          <MDBox
            mt={8}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
            sx={{
              overflowY: "auto !important",
              overflowX: "hidden !important"
            }}
          >
            <MDBox display="flex" justifyContent="space-between" width="100%">
              <MDTypography variant="h5" fontWeight="medium">
                Workouts
              </MDTypography>
            </MDBox>
            {clients.length > 0 ? (
              <DataTable
                canSearch
                handleClientClick={handleClientClick}
                table={{
                  columns: [
                    { Header: "name", accessor: "name", width: "40%" },
                    {
                      Header: "fitness level",
                      accessor: "fitnessLevel",
                      width: "25%"
                    },
                    { Header: "gender", accessor: "gender" },
                    {
                      Header: "last visited",
                      accessor: "lastVisited",
                      width: "12%"
                    }
                  ],
                  rows: clientTableData
                }}
              />
            ) : (
              <MDTypography variant="h6">No Clients </MDTypography>
            )}
          </MDBox>
        </MDBox>
      </MDBox>
    </MainLayout>
  );
};
WorkoutManagementPage.propTypes = {
  trainer: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  trainer: state.trainer
});

export default connect(mapStateToProps, { getClients })(WorkoutManagementPage);
