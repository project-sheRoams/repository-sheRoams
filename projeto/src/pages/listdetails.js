import { useRouter } from 'next/router';

export default function CountryDetail({ country }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.title}</h1>
      <img src={`/images/${country.imageName}`} alt={country.title} />
      <p>{country.about}</p>
      <h2>Curiosities</h2>
      <ul>
        {country.curiosities.map((curiosity, index) => (
          <li key={index}>
            <strong>{curiosity.topic}:</strong> {curiosity.description}
          </li>
        ))}
      </ul>
      <h2>Must Visit Places</h2>
      <ul>
        {country.must_visit_places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch('paises.json');
  const countries = await response.json();

  const paths = countries.map(country => ({
    params: { title: country.title }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch('paises.json');
  const countries = await response.json();
  const country = countries.find(country => country.title === params.title);

  return {
    props: {
      country
    }
  }; 
}
