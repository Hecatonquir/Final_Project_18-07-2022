import axios from "axios"

export default async function getEvents() {

    axios(`http://localhost:3001/api/events`)

}