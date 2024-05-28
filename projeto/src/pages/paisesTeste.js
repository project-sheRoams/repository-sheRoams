import { CountryCard } from "@/components/layout/coutries";
import paises from "../../paises.json";

export default () => {
  return (
    <div
      style={{
        width: "50px",
        heigth: "150px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {paises.map((p) => (
        <CountryCard country={p} />
      ))}
    </div>
  );
};
