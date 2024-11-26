import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { trainerActivities } from "data";
import Activity from "./activity.component";
import colors from "assets/theme-dark/base/colors";

const { background } = colors;

const RecentActivity = () => {
  const [activityType, setActivityType] = useState("");
  const [selectedClient, setSelectedClient] = useState("");

  const handleTypeChange = (event) => {
    setActivityType(event.target.value);
  };
  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const [activities, setActivities] = useState(trainerActivities);

  useEffect(() => {
    if (
      (activityType === "" || activityType === "None") &&
      (selectedClient === "" || selectedClient === "None")
    ) {
      setActivities(trainerActivities);
    } else if (
      (activityType === "" || activityType === "None") &&
      selectedClient
    ) {
      setActivities(
        trainerActivities.filter(
          (activity) => activity.client === selectedClient
        )
      );
    } else if (
      activityType &&
      (selectedClient === "" || selectedClient === "None")
    ) {
      setActivities(
        trainerActivities.filter((activity) => activity.title === activityType)
      );
    } else {
      setActivities(
        trainerActivities.filter(
          (activity) =>
            activity.title === activityType &&
            activity.client === selectedClient
        )
      );
    }
  }, [activityType, selectedClient]);

  return (
    <div>
      <MDBox mb={2} ml={2}>
        <MDBox
          pt={2}
          display="flex"
          justifyContent="space-between"
          width="100%"
        >
          <MDTypography variant="h5" fontWeight="medium">
            Recent Activity
          </MDTypography>

          <MDBox>
            <FormControl sx={{ minWidth: 120, marginRight: "2rem" }}>
              <InputLabel sx={{ lineHeight: "1.1" }}>Client</InputLabel>
              <Select
                value={selectedClient}
                label="Client"
                onChange={handleClientChange}
                sx={{ minWidth: 120, minHeight: 40 }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Jessica"}>Jessica</MenuItem>
                <MenuItem value={"Ryan"}>Ryan</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ lineHeight: "1.1" }}>Activity Type</InputLabel>
              <Select
                value={activityType}
                label="Activity Type"
                onChange={handleTypeChange}
                sx={{ minWidth: 120, minHeight: 40 }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"New Weight Entry"}>New Weight Entry</MenuItem>
                <MenuItem value={"Workout Completed"}>
                  Workout Completed
                </MenuItem>
                <MenuItem value={"Missed Workout"}>Missed Workout</MenuItem>
              </Select>
            </FormControl>
          </MDBox>
        </MDBox>
      </MDBox>
      <Card>
        <CardContent sx={{ background: background.dark }}>
          {activities.map((activity, i) => (
            <Activity key={i} activity={activity} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivity;
