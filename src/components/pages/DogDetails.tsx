import { useEffect } from "react";
import { useParams } from "react-router";

export const DogDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      console.log("hund med id: ", id);
    }
  }, [id]);

  return (
    <>
      <h2>Hundens namn</h2>
      <p>Ålder</p>
      <p>Kön</p>
    </>
  );
};
