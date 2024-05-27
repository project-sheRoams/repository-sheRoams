import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { HomeIcon } from "../../../public/icons/HomeIcon";
import { PassportIcon } from "../../../public/icons/PassportIcon";
import { CommunityIcon } from "../../../public/icons/communityIcon";
import { Countries } from "../../../public/icons/coutries";
import { ProfileIcon } from "../../../public/icons/profile";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.button}>
        <HomeIcon color={"#3C1E42"} />
      </Link>

      <Link href="/community" className={styles.button}>
        <CommunityIcon color={"#3C1E42"} />
      </Link>

      <Link href="/passport" className={styles.circle}>
        <PassportIcon color={"white"} />
      </Link>

      <Link href="/countries" className={styles.button}>
        <Countries color={"#3C1E42"} />
      </Link>

      <Link href="/profile" className={styles.button}>
        <ProfileIcon color={"#3C1E42"} />
      </Link>
    </div>
  );
}

// const [hoveredItem, setHovered] = useState(null);
// color={hoveredItem === "profile" ? "#3C1E42" : "#FFB235"}
