import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

// Mui components
import { Grid, Card, Divider, Avatar, CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { FixedSizeList } from "react-window";

// components
import MainLayout from "layouts/main-layout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import LineChart from "components/LineChart";

// actions
import { selectCurrentUser } from "store/user/user.selector";
import { getClients } from "store/trainer/trainer.action";

// css
import colors from "assets/theme-dark/base/colors";
import MDInput from "components/MDInput";
import DataTable from "components/DataTable";
const { background } = colors;

// name: "Hanny Baniard",
// fitnessLevel: "Data Coordiator",
// gender: "Male",
// lastVisited: 42

const ClientManagementPage = ({ trainer: { clients }, getClients }) => {
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

  const handleClientClick = (data) => {
    console.log("clicked");
    //setSelectedClient(clients[0]);
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
          width="100%"
          maxWidth="1400px"
        >
          <MDBox
            px={1}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              alt="Remy Sharp"
              src={require("assets/images/me/gym-1.jpg")}
              sx={{ width: "25%", height: "20rem" }}
            />
            <MDTypography variant="h4" fontWeight="medium" mt={2}>
              {selectedClient?.firstname + " " + selectedClient?.lastname}
            </MDTypography>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              width="100%"
              mt={2}
            >
              <Card sx={{ minWidth: "100%" }}>
                <CardContent>
                  <MDBox
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    mt={2}
                  >
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                      ml={15}
                    >
                      <MDTypography variant="h5">Email:</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.email ? selectedClient.email : "N/A"}
                      </MDTypography>
                    </MDBox>

                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">Phone Number</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.phoneNumber
                          ? selectedClient.phoneNumber
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">DOB</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.dateOfBirth
                          ? moment(selectedClient.dateOfBirth).format(
                              "MM/DD/YYYY"
                            )
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">Height</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.height
                          ? `${selectedClient.height}"`
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                  </MDBox>

                  <MDBox
                    mt={2}
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                      ml={15}
                    >
                      <MDTypography variant="h5">Weight</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.weight
                          ? `${selectedClient.weight} lbs`
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">Weight Goal</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.weightGoal
                          ? `${selectedClient?.weightGoal} lbs`
                          : "N/A"}
                      </MDTypography>
                    </MDBox>

                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">Fitness Level</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.fitnessLevel
                          ? selectedClient.fitnessLevel
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                    <MDBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      <MDTypography variant="h5">Fitness Goals</MDTypography>
                      <MDTypography color="info" variant="body2">
                        {selectedClient?.fitnessGoals
                          ? selectedClient.fitnessGoals
                          : "N/A"}
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </CardContent>
              </Card>
              <MDBox mt={8} width="100%">
                <MDTypography variant="h5" fontWeight="medium">
                  Weight History
                </MDTypography>
                <MDBox ml={1} mt={2}>
                  <LineChart
                    icon={{ color: "info", component: "fitness_center" }}
                    title="Current: 220 lbs"
                    description="Goal: 215 lbs"
                    chart={{
                      labels: [
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      datasets: [
                        {
                          label: "Current",
                          color: "info",
                          data: [240, 238, 236, 234, 237, 233, 225, 222, 220]
                        },
                        {
                          label: "Goal",
                          color: "success",
                          data: [215, 215, 215, 215, 215, 215, 215, 215, 215]
                        }
                      ]
                    }}
                  />
                </MDBox>
              </MDBox>
            </MDBox>
            {/* Client List */}
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
                  Clients
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
      </MDBox>
    </MainLayout>
  );
};
ClientManagementPage.propTypes = {
  trainer: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  trainer: state.trainer
});

export default connect(mapStateToProps, { getClients })(ClientManagementPage);
