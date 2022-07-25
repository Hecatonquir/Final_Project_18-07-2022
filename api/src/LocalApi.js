const eventsApi = [
	{
		Name: 'This is Michael',
		Image: [
			'https://d31tcnbxvxtafg.cloudfront.net/images/events/9Hno3i91GoiH.jpg'
		],
		Location: 'Teatro Gran Rex',
		Price: 150,
		Quantity: 15,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Concierto'],
		City: 'CABA',
		RedFlags: '1',
		Date: '2023-05-22T12:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Trío Acústico Leonel García',
		Image: [
			'https://vivo.perfil.com/storage/uploads/shows/photo_gallery/preview/size1/b26517a79601ff45de14ed968e94c9f6.jpg'
		],
		Location: 'Teatro Gran Rex',
		Price: 150,
		Quantity: 15,
		Rating: 10,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Concierto'],
		City: 'CABA',
		RedFlags: '1',
		Date: '2023-05-22T12:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Wild Card en vivo',
		Image: [
			'https://elcomercio.pe/resizer/o66i_NMuB1L76oB4XZ0OMrLBRpY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M6UWF5P7DFAT7EXYIM7VR2UHXU.jpg'
		],
		Location: 'averiguo y te digo',
		Price: 150,
		Quantity: 15,
		Rating: 10,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Concierto'],
		City: 'CABA',
		RedFlags: '1',
		Date: '2023-05-22T12:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Fiesta de Maxi',
		Image: [
			'https://oceanbeat.es/wp-content/uploads/2018/09/closing-parties-ibiza-2018.jpg',
			'https://www.sxsw.com/wp-content/uploads/2019/06/SXSW-Party-photo-by-aaron-rogosin.png',
		],
		Location: 'The Bond',
		Price: 150,
		Quantity: 15,
		Rating: 10,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Boliches'],
		City: 'CABA',
		RedFlags: '1',
		Date: '2023-05-22T12:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Carnaval de Rober',
		Image: [
			'https://cnnespanol.cnn.com/wp-content/uploads/2022/04/220421095620-carnaval-de-rio-de-janeiro-full-169.jpg?quality=100&strip=info',
			'https://www.la-vie-en-francais.com/wp-content/uploads/2020/02/Soprano_nous_apprend_le_francais_pour_le_Carnaval_avec_Clown_%C2%A9nicecarnaval.com_.jpg',
		],
		Location: 'Av. 4 de Julio',
		Price: 200,
		Quantity: 20,
		Rating: 9,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: ' 5',
		Category: ['Carnaval'],
		City: 'La Plata',
		RedFlags: '1',
		Date: '2023-05-21T13:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Cine de Cesar',
		Image: [
			'https://www.cineytele.com/wp-content/uploads/2021/04/comoedia_lyon_europa_cinemas_awards.jpeg',
			'https://mag-cinema.com/image/catalog/News/2020/mammut1.jpg',
		],
		Location: 'Hoyts Abasto',
		Price: 250,
		Quantity: 25,
		Rating: 8,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: '25',
		Category: ['Cines'],
		City: 'Chascomus',
		RedFlags: 1,

		Date: '2023-05-20T14:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Musical de Eliseo',
		Image: [
			'https://static.anuevayork.com/wp-content/uploads/2018/07/19091658/Los-mejores-musicales-de-Broadway-Moulin-Rouge.jpg',
			'https://static.anuevayork.com/wp-content/uploads/2016/08/26113033/Mejores-musicales-de-Broadway-Aladdin.jpg',
		],
		Location: 'Amnesia',
		Price: 300,
		Quantity: 30,
		Rating: 7,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Recital'],
		City: 'Rosario',
		RedFlags: 1,
		Date: '2023-05-19T13:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Concierto de Sol',
		Image: [
			'https://media.istockphoto.com/photos/rock-band-with-guitarists-and-drummer-performing-at-a-concert-in-a-picture-id1329876201?k=20&m=1329876201&s=612x612&w=0&h=3LGfb76KrboPEi7MNuys3mlFo4QA18UBW448t-76YZs=',
			'https://thumbs.dreamstime.com/b/siluetas-de-la-gente-en-un-concierto-delante-de-la-escena-en-luz-brillante-rebecca-97241217.jpg',
		],
		Location: 'La Bombonera',
		Price: 350,
		Quantity: 35,
		Rating: 6,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Concierto'],
		City: 'Resistencia',
		RedFlags: 1,
		Date: '2023-05-15T19:30',
		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Obra de Eric',
		Image: [
			'https://i.pinimg.com/originals/8b/6a/52/8b6a5262f3d0df3d58269da426c3a466.jpg',
			'https://stageandcinema.com/wp-content/uploads/2017/03/CST_ShakesinLove_06_LizLauren.jpg',
		],
		Location: 'Teatro de Judas',
		Price: 400,
		Quantity: 40,
		Rating: 5,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Teatro'],
		City: 'Salta',
		RedFlags: 1,
		Date: '2023-05-10T20:00',

		Detail: 'Este es el detalle de este evento!',
	},
	{
		Name: 'Circo de Jhonatan',
		Image: [
			'https://i.ytimg.com/vi/jW-bkbSWb4A/maxresdefault.jpg',
			'https://static.dw.com/image/18515607_303.jpg',
		],
		Location: 'CriconTástico',
		Price: 450,
		Quantity: 45,
		Rating: 4,
		Restrictions: ['No se aceptan mascotas', 'No se acepta comida'],
		AgeRestriction: 25,
		Category: ['Circo'],
		City: 'Cordoba',
		RedFlags: 1,
		Date: '2023-06-05T21:00',
		Detail: 'Este es el detalle de este evento!',
	},
];
const userApi = [
	{
		Name: 'Maxi',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xow0BlUAfuXQPmpx1w8jdAZs_QOZin3CcMM6284qfkyc3NZ7DE1n5TOE8uNWVu8E3T8&usqp=CAU',
		Role: 'Guest',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '1',
		City: 'Salta',
		Username: 'maxi',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Rober',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://upload.wikimedia.org/wikipedia/commons/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg',
		Role: 'User',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '2',
		City: 'Salta',
		Username: 'rober',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Cesar',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://mediaslide-europe.storage.googleapis.com/metromodels/pictures/763/629/large-1519386142-ad6df5799ba9ce3aa903de4b3874d544.jpg',
		Role: 'Partner',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '3',
		City: 'Buenos Aires',
		Username: 'cesar',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Sol',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://i.pinimg.com/736x/33/50/30/335030fe4471cec50f022d352f81aeef--valentina-zenere-famous-models.jpg',
		Role: 'Admin',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '4',
		City: 'Buenos Aires',
		Username: 'admin',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Eliseo',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image: 'https://i.pinimg.com/736x/91/e9/87/91e987f844df64dd4c77ebc406846502.jpg',
		Role: 'Guest',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '5',
		City: 'Buenos Aires',
		Username: 'eliseo',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Eric',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://i0.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Eric-Brezillon-by-Maurizio-Montani5.jpg?resize=819%2C1024&ssl=1',
		Role: 'User',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'Capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '6',
		City: 'Buenos Aires',
		Username: 'eric',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
	{
		Name: 'Jhonatan',
		LoggedIn: false,
		Email: 'tuemail@gmail.com',
		Image:
			'https://i.pinimg.com/736x/8a/ef/a8/8aefa8e9c6838d5156161847c8a59e8a--famous-guys-famous-people.jpg',
		Role: 'Partner',
		Favourites: ['aca tendría que tener relación con la tabla de eventos'],
		Cart: ['aca tendría que tener relación con la tabla de eventos'],
		Location: 'capital',
		CreatedEvents: ['aca tendría que tener relación con la tabla de eventos'],
		RedFlags: '7',
		City: 'Lima',
		Username: 'partner',
		Password: '$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW',
	},
];
module.exports = { eventsApi, userApi };
