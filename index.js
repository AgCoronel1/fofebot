const Discord = require("discord.js");
const client = new Discord.Client();

client.config = require("./config.js");

client.logger = require("./util/Logger");

require("./modules/functions.js")(client);

const http = require('http');
const express = require('express');
const app = express();
const moment = require("moment");
app.get("/", (request, response) => {
  if (client.config.debugEnabled) {
    console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}]:` + " Ping Received!");
  }
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");


const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
if (client.config.debugEnabled) {
  client.on("debug", (e) => console.info(e));
} else {
  client.logger.warn("Debugging disabled by configuration file.");
}

const init = async () => {
  
  
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  
  
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.logger.log(`Loading Event: ${eventName}`)
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  
  client.login(process.env.TOKEN);


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


  
};

init();