import { useState } from "react";
import styles from "../Styles/UserAccount.module.css";
import Favourites from "./Favourites";

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
   <div className={styles.container}>
        <div className={styles.bloctabs}>
            <button
              className={toggleState === 1 ? `${styles.tabs} ${styles.activetabs}`: styles.tabs}
              onClick={() => toggleTab(1)}>
              My Favourites
            </button>
            <button
              className={toggleState === 2 ? `${styles.tabs} ${styles.activetabs}` : styles.tabs}
              onClick={() => toggleTab(2)}>
              My Shopping
            </button>
            <button
              className={toggleState === 3 ? `${styles.tabs} ${styles.activetabs}` : styles.tabs}
              onClick={() => toggleTab(3)}>
              Tab 3
            </button>
        </div>
        

        <div className={styles.contenttabs}>
          <div className={toggleState === 1 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            <h2>Content 1</h2>
            <Favourites/>
          </div>

          <div className={toggleState === 2 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            <h2>Content 2</h2>
          </div>

          <div className={toggleState === 3 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            <h2>Content 3</h2>
          </div>
        </div>
   </div>
  )
}
