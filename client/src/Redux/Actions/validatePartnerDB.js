import axios from "axios"

export default async function validatePartnerDB(token,navigate) {


try {

    let verified = await  axios("user/partner/validate", {data: token})

    
    
} catch (error) {

    navigate("/")
    
}
 
}