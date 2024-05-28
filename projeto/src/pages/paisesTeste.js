import { CountryCard } from "@/components/layout/coutries";
import paises from "../../paises.json";

console.log(paises);

export default () => {
  return (
    <div
      style={{
        width: "50px",
        heigth: "50px",
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
