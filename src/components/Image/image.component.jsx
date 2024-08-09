// Components
import MDBox from "components/MDBox";

const Image = ({ imageUrl, borderRadius, minHeight }) => {
  return (
    <MDBox
      position="relative"
      mb={2}
      display="flex"
      alignItems="center"
      minHeight={minHeight}
      minWidth="100%"
      borderRadius={borderRadius}
      mt={2}
    >
      <img
        src={imageUrl}
        alt="img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: { borderRadius }
        }}
      />
    </MDBox>
  );
};

export default Image;
