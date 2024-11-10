import { Card, CardContent } from "@mui/material";
import MDTypography from "components/MDTypography";
import MainLayout from "layouts/main-layout";

const EditWorkoutPlan = () => {
  return (
    <MainLayout pageTitle="Trainer Dashboard">
      <Card>
        <CardContent>
          <MDTypography variant="h5" component="h2">
            Edit Workout Plan
          </MDTypography>
          {/* Add your form or content here */}
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default EditWorkoutPlan;
