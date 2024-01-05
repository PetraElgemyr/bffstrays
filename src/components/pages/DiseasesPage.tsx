import { SecondaryButton } from "../../styled/Buttons/PrimaryButton";
import { useNavigate } from "react-router";

export const DiseasesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Sjukdomar</h2>

      <p>Vill du läsa mer om hundarna vi räddar?</p>
      <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
        Siutationen i Spanien
      </SecondaryButton>
      <SecondaryButton onClick={() => navigate("/myter-om-gatuhundar")}>
        Myter om gatuhundar
      </SecondaryButton>
    </>
  );
};
