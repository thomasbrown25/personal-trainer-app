import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import UserDetail from "./user-detail";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ mr: 2, pb: 2, width: "100%" }}>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        mt={2}
        px={10}
      >
        <UserDetail title="Height" detail={user?.height} />
        <UserDetail title="Weight" detail={user?.weight} />
        <UserDetail title="Weight Goal" detail={user?.weightGoal} />
        <UserDetail title="Fitness Goal" detail={user?.fitnessGoals} />
        <UserDetail title="Fitness Level" detail={user?.fitnessLevel} />
      </MDBox>
    </Card>
  );
};

export default UserCard;
