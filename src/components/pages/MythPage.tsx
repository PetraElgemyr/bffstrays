import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";

export const MythPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Myter om gatuhundar</h2>

      <p>Vill du läsa mer om hundarna vi räddar?</p>
      <SecondaryButton onClick={() => navigate("/situationen-i-spanien")}>
        Siutationen i Spanien
      </SecondaryButton>
      <SecondaryButton onClick={() => navigate("/sjukdomar")}>
        Sjukdomar
      </SecondaryButton>
    </>
  );
};
