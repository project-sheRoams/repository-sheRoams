import styles from "./NavBar.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiHome3Line } from "react-icons/ri";
import { HomeIcon } from "../icons/HomeIcon";
import { useState } from "react";


export function NavBar() {
  const notify = () => toast("Link clicked!");
  const [hoveredItem, setHovered] = useState(null);

  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.button} onClick={notify}>
        <div
          onMouseEnter={() => setHovered("home")}
          onMouseOut={() => setHovered(null)}
        >
          <HomeIcon color={hoveredItem === "home" ? "blue" : "red"} />
          Home
        </div>
      </Link>

      <Link href="/community" className={styles.button} onClick={notify}>
        <div
          onMouseEnter={() => setHovered("community")}
          onMouseOut={() => setHovered(null)}
        >
          <HomeIcon color={hoveredItem === "community" ? "blue" : "red"} />
          <Community></Community>
        </div>
      </Link>

      <Link href="/app/community" className={styles.button}>
        <img src="/public/icons/community-icon.png" alt="Community Icon" />
      </Link>

      <Link href="/app/passport" className={styles.button} onClick={notify}>
        <img src="/public/icons/passport-icon.png" alt="Passport Icon" />
      </Link>

      <Link href="/app/global" className={styles.button} onClick={notify}>
        <img src="/public/icons/global-icon.png" alt="Global Icon" />
      </Link>

      <Link href="/app/profile" className={styles.button} onClick={notify}>
        <img src="/public/icons/profile-icon.png" alt="Profile Icon" />
      </Link>

      <ToastContainer />
    </div>
  );
}
