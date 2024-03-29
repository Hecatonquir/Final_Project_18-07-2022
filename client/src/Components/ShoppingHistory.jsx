import React, { /* useState, */ useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import { getUserByID2 } from "../Redux/Actions/getUserByID2";
import styles from "../Styles/shoppingHistory.module.css";
import QRCode from "react-qr-code";
import { useMediaQuery } from "@chakra-ui/react";

export default function ShoppingHistory() {
  const dispatch = useDispatch();
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];
  let tokenDecoded = decodeToken(token1);

  useEffect(() => {
    dispatch(getUserByID2(tokenDecoded.id));
  }, []);

  let user = useSelector((state) => state.userInfo);
  //console.log('USER IN COMPONENT', user) // OK

  const cartHistory =
    user.shoppingHistory; /* [ {…}, {…} ]  ---> /*   [ {eventID,
                                                                            Name, 
                                                                            Quantity,
                                                                            datePaid,
                                                                            ticketID,
                                                                            Image }, {..}, {..} ] */

//Responsive
  const [smallScreen] = useMediaQuery("(min-width: 566px)");
  return (
    <div className={styles.container}>
      {cartHistory?.length ? (
        cartHistory.map((it) => (
          <div key={it.eventID} className={styles.cards}>
            <Link to={`/details/id/${it.eventID}`}>
              <div className={styles.leftcolumn}>
                <img src={it.Image[0]} alt="not img" />
              </div>
            </Link>
            <div className={styles.rightcolumn}>
              <h6>{it.Name}</h6>
              <p>{it.Quantity} tickets purchased</p>
              <p>Date paid: {it.datePaid}</p>
              <p>Ticket ID: {it.ticketID}</p>
            </div>
            <div className={styles.qrCode}>
              <QRCode
                value={it.ticketID}
				size={!smallScreen ? '70' : '130'}
                // size="130"
                bgColor="#EEEEEE"
                fgColor="#222831"
              />
            </div>
          </div>
        ))
      ) : (
        <div>
          <h2 className={styles.text}>No shopping history found</h2>
        </div>
      )}
    </div>
  );
}
