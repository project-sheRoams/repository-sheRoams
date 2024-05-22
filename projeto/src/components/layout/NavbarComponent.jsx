import styles from "./NavBar.module.css";
import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";
import { HomeIcon } from "../icons/HomeIcon";
import { PassportIcon } from "../icons/PassportIcon";
import { useState } from "react";

export function NavBar() {
  const [hoveredItem, setHovered] = useState(null);

  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.button} >
        <div
          onMouseEnter={() => setHovered("home")}
          onMouseOut={() => setHovered(null)}
        >
          <HomeIcon color={hoveredItem === "home" ? "blue" : "red"} />
          Home
        </div>
      </Link>

      <Link href="/community" className={styles.button} >
        <div
          onMouseEnter={() => setHovered("community")}
          onMouseOut={() => setHovered(null)}
        >
          <PassportIcon color={hoveredItem === "community" ? "blue" : "red"} />
          Community
        </div>
      </Link>

      <Link href="/passport" className={styles.button} >
        <div
          onMouseEnter={() => setHovered("passport")}
          onMouseOut={() => setHovered(null)}
        >
          <PassportIcon color={hoveredItem === "passport" ? "white" : "red"} />
          Passport
        </div>
      </Link>

      <Link href="/countries" className={styles.button} >
        <div
          onMouseEnter={() => setHovered("countries")}
          onMouseOut={() => setHovered(null)}
        >
          <HomeIcon color={hoveredItem === "countries" ? "blue" : "red"} />
          Countries
        </div>
      </Link>

      <Link href="/profile" className={styles.button} >
        <div
          onMouseEnter={() => setHovered("profile")}
          onMouseOut={() => setHovered(null)}
        >
          <HomeIcon color={hoveredItem === "profile" ? "blue" : "red"} />
          Profile
        </div>
      </Link>

    </div>
  );
}
