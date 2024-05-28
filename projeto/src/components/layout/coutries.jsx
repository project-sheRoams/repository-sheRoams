// export function CountryCard({ country }) {
//   return (
//     <div>
//       <img src={`/images/${country.imageName}`} />
//       <span>{country.title}</span>
//     </div>
//   );
// }

import Link from 'next/link';

export function CountryCard({ country }) {
  return (
    <div className="country-card">
      <Link href={`/country/${country.title}`}>
        <img src={`/images/${country.imageName}`} alt={country.title} />
        <span>{country.title}</span>
      </Link>
    </div>
  );
}
