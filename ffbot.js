//hhola





	const Discord = require('discord.js');
	const client = new Discord.Client();


	var fofrases = ["YSI", "estoy enfermo", "pero yo puse el centro de masa bien", "nielnegroenpedo", "so un hijueputa",
	"bien nene bien", "vo ya sabe que hace", "yo ya te dije", "asi no se puede", "me voy a la casa de mi primo",
	"mevoyajugaalpadrino2", "decile a mi viejo que me prete la casa", "pisalo", "quesuba", "tafarmeandoe", "pshhhh",
	"no sabe defini", "dedicate a la pesca", "chinchu la concha e tu madre", "no ve que so un pelotudo",
	"ta re encocado", "eto e pura coca", "YAVOY", "le tene que da balanceado", "*estoy con alguien*",
	"LA ALARMA MOGOLICO", "prendo ete aire esplota medio rosario", "como te pueden gustar los lunes gaston?",
	"thequedafarmeandoboo", "tres triples sincebolla", "ponele kechuypapa", "ni el negro en pedo", 
	"me gusta jugoso", "aprende a comer asado franco", "no me gusta comer una suela de zapato con un vacio", 
	"yo llevo un cuba libre", "en que te afecta?", "cuando saque el carné los llevo en la kangú",
	"se tienen que morir todos los tacheros menos mi tio", "te tengo que enseñar a maneja por mail?",
	"alguien que compre el asado yo cocino", "ea asi o no ea asi?", "estoy sentado en el sillon",
	"SI ESTOY ENFERMO", "estuve en fune pintando la pileta", "no voy a salir no me rompan los huevo",
	"no tengo ganas", "-play charro chino", "alta paja", "toy haciendo cosa"];
	//comment ertr

	client.on('message', msg => {
	 if (msg.content === 'quediriafofe') {
	 	msg.channel.send(respuestaRandom()); 
	 }
	 }); 

	client.login(token);


	function respuestaRandom(){
		var random = Math.floor(Math.random()*fofrases.length);
		return fofrases[random];
	}





