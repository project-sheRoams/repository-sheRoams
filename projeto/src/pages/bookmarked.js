// src/pages/bookmarked.js
import { useFavoriteContext } from "@/contexts/FavoriteContext";
import CountryCard from "@/components/Countries";
import styles from "./favorite.module.css";
import { BackIcon } from "@/../public/icons/BackIcon";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";

// OPÇÃO DE CARD
function Favorites() {
  const { favorite } = useFavoriteContext();
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.titlePage}>Meus Favoritos</h1>
        </div>
        <div className={styles.countryCard}>
          {favorite.length > 0 ? (
            favorite.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))
          ) : (
            <p className={styles.smallTitle}>Sem favoritos</p>
          )}
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Favorites;
