import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styles from "../Styles/Profile.module.css";
import {decodeToken} from "react-jwt"
function Profile() {


  
  let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
	
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
              <img src={`${tokenDecoded.picture}`} alt="No img" className={styles.img}></img>
              <h3 className={styles.name}>{`${tokenDecoded.name[0].toUpperCase()}${tokenDecoded.name.slice(1)}`}</h3>
              <h3 classname={styles.name}>{tokenDecoded.city}</h3>
              <span className={styles.email}>{tokenDecoded.email}</span>
          </div>
        </>
      ) : (
        <h1>You need to register first</h1>
      )}
    </div>
  );
}

export default Profile;
