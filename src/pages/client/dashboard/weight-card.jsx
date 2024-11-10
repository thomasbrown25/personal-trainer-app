import { useState } from "react";
import { Card, InputAdornment } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DoneIcon from "@mui/icons-material/Done";

const WeightCard = ({ userWeight }) => {
  const [weight, setWeight] = useState(userWeight);
  const [weightSubmitted, setWeightSubmitted] = useState(false);

  const onWeightChange = (e) => {
    const re = /^[0-9\b]+$/;

    weightSubmitted && setWeightSubmitted(false);

    if (e.target.value === "" || re.test(e.target.value)) {
      setWeight(e.target.value);
    }
  };

  const handleOnSubmit = () => {
    setWeightSubmitted(true);
  };

  return (
    <Card sx={{ mt: 2, ml: 2, p: 2, width: "100%" }}>
      <MDBox display="flex" flexDirection="column" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium" mb={1}>
          Have you weighed in today?
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">
          Enter your weight:
        </MDTypography>
        <MDBox mt={3}>
          <MDInput
            keyboardType="numeric"
            placeholder={userWeight}
            size="small"
            sx={{ width: "98px" }}
            label="weight"
            value={weight}
            onChange={onWeightChange}
            focused={!weightSubmitted}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <MDTypography variant="h6" fontWeight="regular">
                    lbs
                  </MDTypography>
                </InputAdornment>
              )
            }}
          ></MDInput>
        </MDBox>
        <MDBox mt={2}>
          <MDButton
            variant={weightSubmitted ? "contained" : "outlined"}
            color={weightSubmitted ? "success" : "info"}
            onClick={handleOnSubmit}
          >
            {weightSubmitted ? <DoneIcon sx={{ width: "50px" }} /> : "Submit"}
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default WeightCard;
