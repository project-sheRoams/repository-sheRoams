import styles from "./NavBar.module.css";
import Link from "next/link";
import { useState } from "react";
import { HomeIcon } from "../icons/HomeIcon";
import { PassportIcon } from "../icons/PassportIcon";
import { CommunityIcon } from "../icons/communityIcon";
import { Countries } from "../icons/coutries";
import { ProfileIcon } from "../icons/profile";

export default function NavBar() {
  const [hoveredItem, setHovered] = useState(null);

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/home" className={styles.button}>
            <div
              onMouseEnter={() => setHovered("home")}
              onMouseOut={() => setHovered(null)}
            >
              <HomeIcon color={hoveredItem === "home" ? "blue" : "black"} />
              Home
            </div>
          </Link>
        </li>
        
        <li className={styles.navItem}>
          <Link href="/community" className={styles.button}>
            <div
              onMouseEnter={() => setHovered("community")}
              onMouseOut={() => setHovered(null)}
            >
              <CommunityIcon color={hoveredItem === "community" ? "blue" : "black"} />
              Community
            </div>
          </Link>
        </li>
        
        <li className={styles.navItem}>
          <Link href="/passport" className={styles.button}>
            <div
              onMouseEnter={() => setHovered("passport")}
              onMouseOut={() => setHovered(null)}
            >
              <PassportIcon color={hoveredItem === "passport" ? "blue" : "black"} />
              Passport
            </div>
          </Link>
        </li>
        
        <li className={styles.navItem}>
          <Link href="/countries" className={styles.button}>
            <div
              onMouseEnter={() => setHovered("countries")}
              onMouseOut={() => setHovered(null)}
            >
              <Countries color={hoveredItem === "countries" ? "blue" : "red"} />
              Countries
            </div>
          </Link>
        </li>
        
        <li className={styles.navItem}>
          <Link href="/profile" className={styles.button}>
            <div
              onMouseEnter={() => setHovered("profile")}
              onMouseOut={() => setHovered(null)}
            >
              <ProfileIcon color={hoveredItem === "profile" ? "blue" : "red"} />
              Profile
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
