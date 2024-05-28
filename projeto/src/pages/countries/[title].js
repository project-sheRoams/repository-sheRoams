import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import paises from "../../../paises.json";

export default function Home() {
  const router = useRouter();

  const pais = paises.find((e) => e.title == router.query.title);

  console.log(pais);
  return (
    <div>
      <h1>
        she <span>roams.</span>
        {pais ? pais.about : <>LOADING</>}
      </h1>
    </div>
  );
}
