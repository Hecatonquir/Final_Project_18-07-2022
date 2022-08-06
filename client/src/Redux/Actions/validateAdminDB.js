import axios from "axios"

export default async function validateAdminDB(token,navigate) {


try {
    

    let verified = await  axios.post("/user/admin/validate", {data: token}, {withCredentials: true})

    
    
} catch (error) {

    navigate("/")
    
}
 
}