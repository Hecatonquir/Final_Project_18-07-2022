import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../Redux/Actions/getEvents.js";
import ButtonFilter from "./ButtonFilter.jsx";
import EventCard from "./EventCard.jsx";
import NavBar from "./NavBar.jsx";
import EventCarousel from "./Carousel.jsx";
import Loader from "./Loader.jsx";
import CalendarEvents from "./Calendar.jsx";
// import styles from '../Styles/Home.module.css';
import Footer from "./Footer.jsx";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.showToUser);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  // return (
  // 	<div>
  // 		<div className={styles.items}>
  // 		<NavBar />
  // 		<div className={styles.carousel}>
  // 		<EventCarousel />
  // 		</div>
  // 		<Search />
  // 		</div>
  // 		<ButtonFilter />
  // 		<CalendarEvents></CalendarEvents>
  // 		<div className={styles.cards}>
  // 			{events.length ? (
  // 				events.map((event) => (
  // 					<div key={event.ID} className={styles.card}>
  // 						<EventCard
  // 							id={event.ID}
  // 							name={event.Name}
  // 							image={event.Image[0]}
  // 							date={event.Date}
  // 							category={event.Category}
  // 							price={event.Price}
  // 							quantity={event.Quantity}
  // 							city={event.City}
  // 							location={event.Location}
  // 						/>
  // 					</div>
  // 				))
  // 			) : (
  // 				<div>
  // 					<Loader />
  // 				</div>
  // 			)}
  // 		</div>
  // 		<Footer />
  // 	</div>
  // );

  return (
    <Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
      <Box> 
        <NavBar />
        <Box>
          <EventCarousel />
        </Box>
      </Box>
	  <Box>
	  <ButtonFilter />
      <CalendarEvents />
	  </Box>
      <Center>
        <Box marginTop={10} marginBottom={10}>
          <SimpleGrid columns={2} spacing={10}>
            {events.length ? (
              events.map((event) => (
                <Box
                  key={event.ID}
                  bg="#b1b7b76a"
                  border="1px solid #88cfd938"
                  p={6}
                  boxShadow=" 10px 10px 20px #2a2929, -10px -10px 20px #494848;"
                  borderRadius="20px"
				  textAlign='center'
                >
                  <EventCard
                    id={event.ID}
                    name={event.Name}
                    image={event.Image[0]}
                    date={event.Date}
                    category={event.Category}
                    price={event.Price}
                    quantity={event.Quantity}
                    city={event.City}
                    location={event.Location}
                  />
                </Box>
              ))
            ) : (
              <Box>
                <Loader />
              </Box>
            )}
          </SimpleGrid>
        </Box>
      </Center>
      <Footer />
    </Box>
  );
}
