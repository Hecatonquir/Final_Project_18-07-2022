const eventsApi = [
	{
		ID: "36589657-9ee6-4d1c-8319-d355300ad9e7",
		Name: "This is Michael",
		Image: ["https://d31tcnbxvxtafg.cloudfront.net/images/events/9Hno3i91GoiH.jpg"],
		Location: "Teatro Gran Rex",
		Price: 100,
		Quantity: 15,
		InitialQtty: 15,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2021-10-22T12:30",
		Detail: "Este es el detalle de este evento!",
		Coords: [-34.6033873, -58.3788666],
		Carrousel: "https://static6.ticketek.com.ar/cms_static/sites/default/files/images/show-header/this960.png",
		isLive: true,
	},
	{
		ID: "79c0602a-3bff-4006-afc0-9552b6d90881",
		Name: "Trío Acústico Leonel García",
		Image: [
			"https://vivo.perfil.com/storage/uploads/shows/photo_gallery/preview/size1/b26517a79601ff45de14ed968e94c9f6.jpg",
		],
		Location: "Teatro Gran Rex",
		Price: 0,
		Quantity: 0,
		InitialQtty: 0,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2023-05-22T12:30",
		Detail: "Este es el detalle de este evento!",
		Coords: [-34.6033873, -58.3788666],
		Carrousel:
			"https://teatro-granrex.com.ar/wp-content/files_mf/cache/th_c055d477418f3f7668860a05610bcd1f_1656359190920.jpg",
		isLive: true,
	},
	{
		ID: "cc9bc0fa-8c14-4263-968b-80c806ef2976",
		Name: "Wild Card en vivo",
		Image: [
			"https://elcomercio.pe/resizer/o66i_NMuB1L76oB4XZ0OMrLBRpY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M6UWF5P7DFAT7EXYIM7VR2UHXU.jpg",
		],
		Location: "Luna Park",
		Price: 150,
		Quantity: 15,
		InitialQtty: 15,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2023-05-22T12:30",
		Detail: "Este es el detalle de este evento!",
		Coords: [-34.6021563, -58.3684163],
		isLive: true,
	},
	{
		Name: "Fiesta de Maxi",
		Image: [
			"https://rockymountevents.com/wp-content/uploads/2018/09/birthday_celebration.jpg",
			"https://www.sxsw.com/wp-content/uploads/2019/06/SXSW-Party-photo-by-aaron-rogosin.png",
		],
		Location: "Club Comunicaciones",
		Price: 9999,
		Quantity: 15,
		InitialQtty: 15,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Nightlife",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2023-05-22T12:30",
		Detail: "Este es el detalle de este evento!",
		isLive: true,
		Coords: [-34.5968454, -58.4901361],
	},
	{
		Name: "Cine de Cesar",
		Image: [
			"https://www.cineytele.com/wp-content/uploads/2021/04/comoedia_lyon_europa_cinemas_awards.jpeg",
			"https://mag-cinema.com/image/catalog/News/2020/mammut1.jpg",
		],
		Location: "Club Regatas Chascomus",
		Price: 250,
		Quantity: 25,
		InitialQtty: 25,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Cinema",
		City: "Chascomus",
		RedFlags: 1,
		Date: "2023-05-20T14:30",
		Detail: "Este es el detalle de este evento!",
		isLive: true,
		Coords: [-35.5813414, -58.0169276],
	},
	{
		Name: "Concierto de Sol",
		Image: [
			"https://media.istockphoto.com/photos/rock-band-with-guitarists-and-drummer-performing-at-a-concert-in-a-picture-id1329876201?k=20&m=1329876201&s=612x612&w=0&h=3LGfb76KrboPEi7MNuys3mlFo4QA18UBW448t-76YZs=",
			"https://thumbs.dreamstime.com/b/siluetas-de-la-gente-en-un-concierto-delante-de-la-escena-en-luz-brillante-rebecca-97241217.jpg",
		],
		Location: "Plaza 25 de Mayo",
		Price: 350,
		Quantity: 35,
		InitialQtty: 35,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Concert",
		City: "Resistencia",
		RedFlags: 1,
		Date: "2023-05-15T19:30",
		Detail: "Este es el detalle de este evento!",
		isLive: true,
		Coords: [-27.4499224, -58.9861613],
	},
	{
		Name: "Cirque Du Soleil",
		Image: ["https://santacarolinapromo.com.br/wp-content/uploads/2022/04/premios2.png"],
		Location: "Teatro de Judas",
		Price: 400,
		Quantity: 0,
		InitialQtty: 40,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Circus",
		City: "Salta",
		RedFlags: 1,
		Date: "2023-04-10T20:00",
		Detail: "Este es el detalle de este evento!",
		isLive: true,
		Coords: [-24.8043028, -65.419006],
	},
	{
		Name: "Tigre Free Tours",
		Image: [
			"https://i0.wp.com/vancouversbestplaces.com/wp-content/uploads/2017/07/Free-August-Events.jpg?fit=640%2C400&ssl=1",
			"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129702845%2F525194686153%2F1%2Foriginal.20210320-163751?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=110%2C0%2C630%2C315&s=21c32522a53a8335673860be7e0a8190",
		],
		Location: "Teatro Municipal Salta",
		Price: 0,
		Quantity: 0,
		InitialQtty: 0,
		Restrictions: ["No se aceptan mascotas", "No se acepta comida"],
		AgeRestriction: 25,
		Category: "Tours",
		City: "Salta",
		RedFlags: 1,
		Date: "2023-04-11T20:00",
		Detail: "Este es el detalle de este evento!",
		Coords: [-24.8043028, -65.419006],
		isLive: true,
	},
	{
		ID: "6677ae14-ac3e-4e3f-a4e4-ddbc7d08c2b8",
		Name: "Tini Tour 2022",
		Image: [
			"https://literalsalta.com.ar/wp-content/uploads/2022/07/292877689_10158449363156020_3851974710429386955_n.jpg",
		],
		Location: "Estadio Martearena",
		Price: 12000,
		Quantity: 9000,
		InitialQtty: 9000,
		Restrictions: ["No alcohol", "No dogs"],
		AgeRestriction: 15,
		Category: "Concert",
		City: "Salta",
		RedFlags: 1,
		Date: "2022-09-17T20:00",
		Detail: 'With hits like "Miénteme", "Bar" and "La Triple T", Tini will perform in Salta on Saturday, September 17 at the Padre Martearena stadium, initially at 8:00 p.m.',
		Carrousel: "https://ventas.fullticket.com/UplImage/Tini_Salta_Martearena_1903x600px.jpg",
		Coords: [-24.820889, -65.419189], 
		isLive: true,
	},
	{
		ID: "bb46e1fd-9878-4dc7-ab8a-34ae13a0b4a7",
		Name: "Servian Circus",
		Image: [
			"https://infovillaallende.com.ar/wp-content/uploads/2019/09/Circo-Servian.jpg",
			"https://us.cdn.eltribuno.com/022018/1518199639792.jpg",
		],
		Location: "Predio La Rotonda",
		Price: 1500,
		Quantity: 500,
		InitialQtty: 500,
		Restrictions: ["No alcohol", "No smoke"],
		AgeRestriction: 5,
		Category: "Circus",
		City: "Mendoza",
		RedFlags: 1,
		Date: "2022-08-20T18:00",
		Detail:
			'Servian Circus presents its renewed show "LIFE, The Magic Is In Your Hands", a new experience that will transport you on a magical journey inspired by the effects that planet earth is suffering.',
		Coords: [-34.607566, -68.355468],
		isLive: true,
	},
	{
		ID: "f15917b5-95d8-43b1-a103-da2b39462454",
		Name: "Argentina vs Peru",
		Image: [
			"https://futbolenlinea.club/wp-content/uploads/2021/10/Movistar-Peru-vs-Argentina-EN-VIVO-ONLINE-GRATIS-por-Eliminatorias.jpg",
		],
		Location: "Estadio Mas Monumental",
		Price: 3450,
		Quantity: 20000,
		InitialQtty: 20000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 15,
		Category: "Sports",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-10-15T19:00",
		Detail: "Last game before the most famous championship in the world begins",
		Coords: [-34.5453062, -58.4519636],
	},
	{
		ID: "45bce6e9-75cd-4b22-9687-dd2d047a8f36",
		Name: "Lollapalooza 2023",
		Image: [
			"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XE522BMF5NDR3G66SNBB75VZ2M.jpg",
			"https://pbs.twimg.com/media/FOdzbrbWUAMaAHV.png",
		],
		Location: "Hipodromo San Isidro",
		Price: 14000,
		Quantity: 30000,
		InitialQtty: 30000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 13,
		Category: "Festivals",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2023-03-17T15:00",
		Detail: 'The megafestival, presented by Flow, will once again make fans vibrate at the San Isidro Hippodrome',
		Carrousel: "https://www.cronista.com/files/image/467/467021/62bb48c7eca39.png",
		Coords: [-34.4805495, -58.5209647], 
		isLive: true,
	},
	{
		ID: "c25bf23b-e414-4a16-8207-cfde1212676a",
		Name: "Justin Bieber World Tour",
		Image: [
			"https://www.frontiertouring.com/web_images/2163/JB22B-475x475-GEN.jpg",
			"https://larepublica.pe/resizer/jqlzmr6dTOUclX1lunAOGegw7kE=/538x0/top/larepublica.pe/resizer/CPdirUm1Hh7jHL1FTdvJjBXNPBY=/538x0/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/HHTGLZEUIBEADNEOXZXQYYCXDA.jpg",
		],
		Location: "Estadio Unico La Plata",
		Price: 25000,
		Quantity: 15000,
		InitialQtty: 15000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-09-09T20:00",
		Detail: 'Justin Bieber announced the new dates for his long-awaited Justice World Tour, including September 10, 2022 at the Estadio Único de la Plata, Argentina.',
		Carrousel: "https://www.suncorpstadium.com.au/getattachment/Events/Justin-Bieber-Justice-World-Tour/JB22_Suncorp_WebHomeLrg_1920x480-(1).jpg",
		Coords: [-34.9137939,-57.991297], 
		isLive: true,
	},
	{
		ID: "3bddc631-1a59-485b-a3c3-be772a6ccd00",
		Name: "Dua Lipa Tour 2022",
		Image: [
			"https://media.canalnet.tv/2021/12/dua-lipa-414x414.jpg",
			"https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1639403171255Dua%20lipa%20-%20fn.jpg",
		],
		Location: "Hipodromo de Palermo",
		Price: 17000,
		Quantity: 11000,
		InitialQtty: 11000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-09-14T20:00",
		Detail:
			'Dua Lipa will perform in Argentina as part of the "Future Nostalgia Tour" world tour. Presenting her new album, the award-winning pop artist will set foot on Argentine soil with an unmissable show.',
		Coords: [-34.568016, -58.4298353],
		isLive: true,
	},
	{
		ID: "326feea9-99ce-4ec8-ab6e-269d9af3357f",
		Name: "Coldplay World Tour",
		Image: [
			"https://cdn.getcrowder.com/images/1654623546935-null-640x640-14.png",
			"https://www.losandes.com.ar/resizer/XqnSxmwu8gCR47RyBY2egcNq05E=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2GFXLRO3MVBYPL63PGPJGFSQJM.jpg",
		],
		Location: "Estadio River Plate",
		Price: 23000,
		Quantity: 25000,
		InitialQtty: 25000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-10-25T20:00",
		Detail: 'The "Music of the Spheres World Tour" of the group made up of Chris Martin, Guy Berryman, Will Champion and Jon Buckland breaks the record in Argentina, which was held by Roger Waters with his nine shows at River in 2012.',
		Carrousel: "https://www.voxpopuli.net.ar/files/image/98/98894/628bad2f1f54e_715_266!.png",
		Coords: [-34.5453062, -58.4519636], 
		isLive: true,
	},
	{
		ID: "edec7a56-fb6a-4079-9f13-34d1e0629c8c",
		Name: "Argentina Air Festival",
		Image: [
			"https://www.argentina.gob.ar/sites/default/files/afiche-argentina-vuela.jpg",
			"https://www.argentina.gob.ar/sites/default/files/2022/07/a4argentina.jpg",
		],
		Location: "Base Aerea Moron",
		Price: 0,
		Quantity: 0,
		InitialQtty: 0,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 5,
		Category: "Festivals",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-08-13T10:00",
		Detail:
			"On Saturday, August 13 and Sunday, August 14, the Argentine Air Force opens the doors of the Morón Military Air Base to celebrate the 110th Anniversary of the Institution with an air festival for the whole family.",
		Coords: [-34.6722207, -58.6339542],
		isLive: true,
	},
	{
		ID: "8946ccd5-b92a-4590-8b98-6584e08e0a0e",
		Name: "Guasones",
		Image: [
			"https://livepass-com-ar-uploads.ticketplus.global/images/thumbs/1fb3540d5b187f635a9f-guasones_obras-02.jpg",
		],
		Location: "Estadio Obras",
		Price: 2600,
		Quantity: 3000,
		InitialQtty: 3000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 18,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-08-26T21:00",
		Detail: "Guasones on tour around the country, reserve your ticket now!",
		Coords: [-34.5451073, -58.4612054],
		isLive: true,
	},
	{
		ID: "aefe63b1-3103-445b-b8a5-490c211f8939",
		Name: "Green Day",
		Image: ["https://coordenadacero.com.ar/wp-content/uploads/2022/05/image_6483441-4.jpg"],
		Location: "Estadio Velez Sarsfield",
		Price: 8500,
		Quantity: 12000,
		InitialQtty: 12000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 18,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-09-11T21:00",
		Detail:
			"One of the events that raised expectations the most after the great wave of rumors that moved about it today are behind us, Green Day will return to our country in September",
		Coords: [-34.635406, -58.5228855],
		isLive: true,
	},
	{
		ID: "ac2fef66-35b9-415c-a7f2-654ebaf7ca30",
		Name: "Imagine Dragons",
		Image: [
			"https://indiehoy.com/wp-content/uploads/2022/08/Feed.jpg",
			"https://egocitymgz.com/wp-content/uploads/2018/06/dan-reynolds-y-su-lucha-por-los-derechos-lgbt-1068x666.jpg",
		],
		Location: "Hipodromo de Palermo",
		Price: 14000,
		Quantity: 12000,
		InitialQtty: 12000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-10-23T21:00",
		Detail:
			'The natives of Las Vegas will introduce the new tracks from their fifth album -which has had a great reception by critics and fans- and will review the great hits of their career, among which are "Radioactive", "Demons ”, Its Time”, “Bleeding Out”, “I Bet My Life”, “Thunder”, “Believer”, “Enemy” and more.',
		Coords: [-34.568016, -58.4298353],
		isLive: true,
	},
	{
		ID: "e64eb9f8-e31e-4215-bb92-c22c349ceefb",
		Name: "Argentina ComicCon",
		Image: [
			"https://mir-s3-cdn-cf.behance.net/projects/404/e84c1c75452441.Y3JvcCwxMzEyLDEwMjYsOTgxLDk3.jpg",
			"https://forucinema.com/wp-content/uploads/2022/05/comic_con-1024x576.jpg",
		],
		Location: "Centro Costa Salguero",
		Price: 1800,
		Quantity: 5000,
		InitialQtty: 5000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 13,
		Category: "Festivals",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-12-19T15:00",
		Detail:
			"The event that has been held since 2013 in Argentina is traditional in the United States and is dedicated to pop culture and has the participation of film, television, video game and publishing studios.",
		Coords: [-34.5705671, -58.3985986],
		isLive: true,
	},
	{
		ID: "8f25c2f8-a633-4680-b02e-87949fea44e0",
		Name: "Grisu",
		Image: [
			"https://estugira.com/wp-content/uploads/2020/04/GRISU.jpg",
			"https://www.osomviajes.com/file/2021/01/Discoteca-Grisu%CC%81.jpg",
		],
		Location: "Bariloche",
		Price: 2800,
		Quantity: 1500,
		InitialQtty: 1500,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Nightlife",
		City: "Rio Negro",
		RedFlags: 1,
		Date: "2022-09-21T00:00",
		Detail: "One of the best night clubs in the city of Bariloche",
		Coords: [-41.1324881, -71.3196278],
		isLive: true,
	},
	{
		ID: "5716bbfd-0ed5-42cf-972f-1248d8a1d81b",
		Name: "Rocket",
		Image: [
			"https://estugira.com/wp-content/uploads/2020/04/Rocket-Bariloche.jpg",
			"https://www.roket.com/assets/img/gallery/08.jpg",
		],
		Location: "Bariloche",
		Price: 2800,
		Quantity: 1500,
		InitialQtty: 1500,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Nightlife",
		City: "Rio Negro",
		RedFlags: 1,
		Date: "2022-10-12T00:00",
		Detail: "One of the best night clubs in the city of Bariloche",
		Coords: [-41.1324881, -71.3196278],
		isLive: true,
	},
	{
		ID: "0fcc9ed1-d5a2-4558-bed2-08b7d909e68d",
		Name: "ByPass",
		Image: [
			"https://estugira.com/wp-content/uploads/2020/04/ByPass-Bariloche.jpg",
			"https://www.bypass.com.ar/assets/img/gallery/010.jpg",
		],
		Location: "Bariloche",
		Price: 2800,
		Quantity: 1500,
		InitialQtty: 1500,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Nightlife",
		City: "Rio Negro",
		RedFlags: 1,
		Date: "2022-11-15T00:00",
		Detail: "One of the best night clubs in the city of Bariloche",
		Coords: [-41.1324881, -71.3196278],
		isLive: true,
	},
	{
		ID: "7da6d31a-4214-4dc6-90b8-2ba05dd0f31b",
		Name: "Genux",
		Image: [
			"https://estugira.com/wp-content/uploads/2020/04/Genux-Bariloche-01.png",
			"https://www.genux.com.ar/assets/img/gallery/11.jpg",
		],
		Location: "Bariloche",
		Price: 2800,
		Quantity: 1500,
		InitialQtty: 1500,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Nightlife",
		City: "Rio Negro",
		RedFlags: 1,
		Date: "2022-09-29T00:00",
		Detail: "One of the best night clubs in the city of Bariloche",
		Coords: [-41.1324881, -71.3196278],
		isLive: true,
	},
	{
		ID: "17883f55-8063-4dfe-b225-c875aab775a5",
		Name: "Cerebro",
		Image: [
			"https://estugira.com/wp-content/uploads/2020/04/Cerebro.jpg",
			"https://www.cerebro.com.ar/assets/img/gallery/12.jpg",
		],
		Location: "Bariloche",
		Price: 2800,
		Quantity: 1500,
		InitialQtty: 1500,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Nightlife",
		City: "Rio Negro",
		RedFlags: 1,
		Date: "2022-12-17T00:00",
		Detail: "One of the best night clubs in the city of Bariloche",
		Coords: [-41.1324881, -71.3196278],
		isLive: true,
	},
	{
		ID: "542988a0-97e0-4e44-ac23-dee818291633",
		Name: "Latam Gamergy Tour",
		Image: [
			"https://g-mnews.com/wp-content/uploads/2022/03/Gamergy-final-LLA-de-LoL.jpg",
			"https://static.diariosur.es/www/multimedia/201906/20/media/cortadas/vistalegre-leagueoflegends-krPD-U80568916687DvH-1248x770@RC.jpg",
		],
		Location: "Tecnopolis",
		Price: 0,
		Quantity: 0,
		InitialQtty: 0,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 13,
		Category: "Sports",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-11-11T17:00",
		Detail: 'The highest League of Legends competition in Latin America enters its defining phase, which will culminate in a face-to-face match during the spectacular Gamergy event, in Tecnópolis',
		Carrousel: "https://i0.wp.com/versusmedia.mx/wp-content/uploads/2019/06/Gamergy.jpg?fit=1280%2C700&ssl=1",
		Coords: [-34.5594479, -58.5104404], 
		isLive: true,
	},
	{
		ID: "d696de1e-ae5d-44fa-93e6-1b3cf17bd4dd",
		Name: "Martin Garrix",
		Image: ["https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/55/2019/03/06034505/190517_OMLV_MGarrix_MainBannerSuite-EDC_1080x1350-640x800.png", "https://www.onezoomusic.com/app/uploads/2019/05/Martin-Garrix-1280x720.jpg"],
		Location: "Hipodromo de San Isidro",
		Price: 17000,
		Quantity: 7000,
		InitialQtty: 7000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Concert",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2023-05-17T23:00",
		Detail: '',
		Coords: [-34.4805495, -58.5209647], 
		isLive: true,
	},
	{
		ID: "958e5551-a30e-4876-ae75-db499bdb44db",
		Name: "Pumas vs Wallabies",
		Image: ["https://www.malargue.gov.ar/wp-content/uploads/2022/08/WhatsApp-Image-2022-07-26-at-12.01.03-PM.jpeg"],
		Location: "Estadio Malvinas Argentinas",
		Price: 4300,
		Quantity: 15000,
		InitialQtty: 15000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 13,
		Category: "Sports",
		City: "Mendoza",
		RedFlags: 1,
		Date: "2022-09-06T16:30",
		Detail: 'The Pumas return to the international scene, which will be determined by the premiere of the 2022 version of the Rugby Championship. The start of the tournament for the members of SANZAAR (South African, New Zealand, Australia and Argentina Rugby) will be with the visit of Australia to our country, to play a series of test-matches (two consecutive matches) after 25 years.',
		Coords: [-32.8896642, -68.8822843], 
		isLive: true,
	},
	{
		ID: "91f8c8b4-e916-4af5-920b-fbd892d6bd68",
		Name: "Primavera Sound",
		Image: ["https://assets-img.primaverasound.com/2500x0/psweb/zrwzkkqbn9aywrqdpngt_1651505437080.jpg"],
		Location: "Parque Olimpico",
		Price: 7300,
		Quantity: 15000,
		InitialQtty: 15000,
		Restrictions: ["No alcohol", "No pets"],
		AgeRestriction: 16,
		Category: "Festivals",
		City: "Buenos Aires",
		RedFlags: 1,
		Date: "2022-10-14T16:30",
		Detail: 'TRAVIS SCOTT | ARCTIC MONKEYS | BJÖRK | LORDE | JACK WHITE | PIXIES | CHARLI XCX | INTERPOL | MITSKI | PHOEBE BRIDGERS | CAT POWER | BEACH HOUSE | ARCA | FATHER JOHN MISTY',
		Coords: [-34.6737512, -58.4454755], 
		isLive: true,
	},
];
const userApi = [
	{
		ID: "d33f6250-6244-45d4-a5df-91e9657c6570",
		Name: "Maxi",
		Username: "maxi",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
		Email: "tuemail7@gmail.com",
		Image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xow0BlUAfuXQPmpx1w8jdAZs_QOZin3CcMM6284qfkyc3NZ7DE1n5TOE8uNWVu8E3T8&usqp=CAU",
		Location: "Capital",
		Role: "user",
		//Favourites: [],
		/* shoppingHistory: [], */
		CreatedEvents: [],
		RedFlags: 1,
		LoggedIn: false,
		/* Cart: [], */
		isSupport: false,
		isBan: false,
		City: "Salta",
	},
	{
		Name: "Rober",
		Username: "rober",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
		Email: "tuemail6@gmail.com",
		Image:
			"https://upload.wikimedia.org/wikipedia/commons/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg",
		Location: "Capital",
		Role: "User",
		Favourites: [],
		/* shoppingHistory: [], */
		CreatedEvents: [],
		RedFlags: 2,
		LoggedIn: false,
		/* Cart: [], */
		isSupport: false,
		isBan: false,
		City: "Salta",
	},
	{
		Name: "Cesar",
		Username: "cesar",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "",
		Email: "tuemail5@gmail.com",
		Image:
			"https://mediaslide-europe.storage.googleapis.com/metromodels/pictures/763/629/large-1519386142-ad6df5799ba9ce3aa903de4b3874d544.jpg",
		Location: "Capital",
		Role: "Partner",
		Favourites: [],
		/* shoppingHistory: [], */
		CreatedEvents: [],
		RedFlags: 3,
		LoggedIn: false,
		/* Cart: [], */
		isSupport: false,
		isBan: false,
		City: "Buenos Aires",
	},
	{
		Name: "Sol",
		Username: "admin",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
		Email: "tuemail4@gmail.com",
		Image: "https://i.pinimg.com/736x/33/50/30/335030fe4471cec50f022d352f81aeef--valentina-zenere-famous-models.jpg",
		Location: "Capital",
		Role: "Admin",
		Favourites: [],
		/* shoppingHistory: [], */
		CreatedEvents: [],
		RedFlags: 4,
		LoggedIn: false,
		isSupport: false,
		isBan: false,
		/* Cart: [], */
		City: "Buenos Aires",
	},
	{
		Name: "Eliseo",
		Username: "eliseo",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",

		Email: "tuemail3@gmail.com",
		Image: "https://i.pinimg.com/736x/91/e9/87/91e987f844df64dd4c77ebc406846502.jpg",
		Location: "Capital",
		Role: "Guest",
		Favourites: [],
		/* shoppingHistory: [], */
		CreatedEvents: [],
		RedFlags: 5,
		LoggedIn: false,
		/* Cart: [], */
		isSupport: false,
		isBan: false,
		City: "Buenos Aires",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
	},
	{
		Name: "Eric",
		Username: "eric",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
		LoggedIn: false,
		Email: "tuemail2@gmail.com",
		Image:
			"https://i0.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Eric-Brezillon-by-Maurizio-Montani5.jpg?resize=819%2C1024&ssl=1",
		Role: "User",
		Favourites: [],
		/* Cart: [], */
		Location: "Capital",
		CreatedEvents: [],
		RedFlags: 6,
		City: "Buenos Aires",
		Username: "eric",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
	},
	{
		Name: "Jhonatan",
		LoggedIn: false,
		Email: "tuemail1@gmail.com",
		Image: "https://i.pinimg.com/736x/8a/ef/a8/8aefa8e9c6838d5156161847c8a59e8a--famous-guys-famous-people.jpg",
		Role: "Partner",
		Favourites: [],
		/* Cart: [], */
		Location: "capital",
		CreatedEvents: [],
		RedFlags: 7,
		City: "Lima",
		Username: "partner",
		Password: "$2b$10$4BlMuCSh34F1A6wT/Kh.EOf6CpeBL1H6Rc4x9UJwIXEO8gXozoRBW",
		Token: "GBZTIWBUIJFSSYKFOFCGCR3IPNDCYMSNOYXUCMTXO5LTS42YKRKA",
	},
];
module.exports = { eventsApi, userApi };
