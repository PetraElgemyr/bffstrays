import { CircularProgress } from "@mui/material";

export const LoadingOverlay = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};
