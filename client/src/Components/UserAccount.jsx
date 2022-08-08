import { useState } from "react";
import styles from "../Styles/UserAccount.module.css";
import Favourites from "./Favourites";
import ShoppingHistory from './ShoppingHistory';
import TicketsUserDetails from './TicketsUserDetails'


export default function Tabs({tokenDecoded}) {
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
              My Shopping History
            </button>
            <button
              className={toggleState === 3 ? `${styles.tabs} ${styles.activetabs}` : styles.tabs}
              onClick={() => toggleTab(3)}>
              My Tickets
            </button>
        </div>
        

        <div className={styles.contenttabs}>
          <div className={toggleState === 1 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            <Favourites tokenDecoded={tokenDecoded} />
          </div>

          <div className={toggleState === 2 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            {/* <img className={styles.img} src={img1} alt='not imgconstruccion' /> */}
            <ShoppingHistory/>
          </div>

          <div className={toggleState === 3 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
            <TicketsUserDetails/>
          </div>
        </div>
   </div>
  )
}
