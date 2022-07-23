import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styles from "../Styles/Profile.module.css";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  let token= document.cookie.split("=")[1]
	
  return (
    <div>
      {token ?(
        <>
          <nav className={styles.nav}>
            <Link to="/">
              <button className={styles.Button}>Back</button>
            </Link>
          </nav>

          <div className={styles.container}>
            <h4 className={styles.title}>Profile</h4>
              <img src={`${user.picture}`} alt="No img" className={styles.img}></img>
              <h3 className={styles.name}>{user.name}</h3>
              <span className={styles.email}>{user.email}</span>
          </div>
        </>
      ) : (
        <h1>You need to register first</h1>
      )}
    </div>
  );
}

export default Profile;
