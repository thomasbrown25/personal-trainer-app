import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import UserDetail from "./user-detail";

const UserCard = ({ user, userTrainer }) => {
  return (
    <Card sx={{ mt: 2, mr: 2, p: 2, width: "100%" }}>
      <MDBox display="flex" justifyContent="center">
        <MDTypography variant="h6" fontWeight="medium">
          {`${user?.firstname} ${user?.lastname}`}
        </MDTypography>
      </MDBox>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        mt={2}
        px={10}
      >
        <UserDetail title="Height" detail={user.height} />
        <UserDetail title="Weight" detail={user.weight} />
        <UserDetail title="Weight Goal" detail={user.weightGoal} />
        <UserDetail title="Fitness Goal" detail={user.fitnessGoals} />
        <UserDetail title="Fitness Level" detail={user.fitnessLevel} />

        <MDBox display="flex" mt={2}>
          <MDTypography variant="h6" mr={1}>
            Your Trainer:
          </MDTypography>
          <MDTypography variant="body2">{userTrainer}</MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default UserCard;
