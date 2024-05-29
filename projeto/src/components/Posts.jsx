import Link from "next/link";

export default function ListPosts() {
  return (
    <div>
      <Link href={`/countries/${country.title}`} className={styles.link}>
      </Link>
    </div>
  );
}

