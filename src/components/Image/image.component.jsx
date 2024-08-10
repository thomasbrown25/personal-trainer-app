// Components
import MDBox from "components/MDBox";

const Image = ({ imageUrl, borderRadius, border, height, width }) => {
  return (
    <MDBox
      position="relative"
      display="flex"
      alignItems="center"
      height={height}
      width={width}
    >
      <img
        src={imageUrl}
        alt="img"
        style={{
          width: "100%",
          height: "100%",
          border: border,
          borderRadius: borderRadius
        }}
      />
    </MDBox>
  );
};

export default Image;
