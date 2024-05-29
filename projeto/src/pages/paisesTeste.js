import { CountryCard } from "@/components/layout/coutries";
import paises from "../../paises.json";

export default () => {
  return (
    <div className="coutries-card"
    >
      {paises.map((p) => (
        <CountryCard country={p} />
      ))}
    </div>
  );
};
