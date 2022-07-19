modelo Users = {
Id:UUID,
Name: String, default: Invitado,
LoggedIn: boolean,
Email: string,
Image: String???,
Role: ENUM (Guest, User, Partner, Admin),
Favourites: Array,
Cart: Array,
Location: String?,
CreatedEvents: Array de strings,
RedFlags: Integer (para reportar y banear al usuario con más de 5 reports),

}

modelo Event = {
Id:UUID,  
 Name: Strin.
Image: String? o hay que subir una foto, entonces qué tipo de dato es?
Location: String?,
Price: String?,
Quantity: Array,
Rating: Integer,
Restrictions: Array de strings,
MinAge: Integer
}
