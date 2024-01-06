import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { PageName } from "../enums/PageName";

export const DiseasesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Sjukdomar</h2>

      <p>Vill du läsa mer om hundarna vi räddar?</p>
      <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
        {PageName.Spain}
      </SecondaryButton>
      <SecondaryButton onClick={() => navigate("/myter-om-gatuhundar")}>
        {PageName.Myths}
      </SecondaryButton>
    </>
  );
};
