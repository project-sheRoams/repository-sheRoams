import { Countries } from "../../../public/icons/coutries";
import styles from "../../styles/Loading.module.css"

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingRotate}>
                <Countries color={"#FFB235"}/>
            </div>
        </div>
    )
}