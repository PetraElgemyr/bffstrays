import { useNavigate } from "react-router";
import { DogFactTextBold } from "../styled/DogDetails/DogFactText";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <DogFactTextBold
      style={{
        cursor: "pointer",
        position: "relative",
        left: "2%",
        margin: "5%",
      }}
      onClick={() => {
        navigate(-1);
      }}
    >
      <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon> Tillbaka
    </DogFactTextBold>
  );
};
