// export function CountryCard({ country }) {
//   return (
//     <div>
//       <img src={`/images/${country.imageName}`} />
//       <span>{country.title}</span>
//     </div>
//   );
// }

import Link from "next/link";
import styles from '../../styles/countries.module.css'



export function CountryCard({ country }) {
  return (
    <div className={styles.countryCard}>
      <Link href={`/countries/${country.title}`} className={styles.link}>
        <img src={`/images/${country.imageName}`} alt={country.title} />
        <span>{country.title}</span>
      </Link>
    </div>
  );
}
