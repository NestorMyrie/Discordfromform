const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const expressApp = express();
const bodyparser = require("body-parser");
//body parser para resivir en json los datos desde el front
expressApp.use(bodyparser.json());
expressApp.use(bodyparser.urlencoded({ extended: true }));

expressApp.post("/", (req, res) => {
  const nombre = req.body.Nombre;
  const numero = req.body.Numero;
  const MSG = req.body.MSG;

  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Nueva Peticion de contacto")
    .setDescription(
      `**${nombre}** Acaba de completar el formulario! \n
 -------------------------------------------
 Numero telefonico : ${numero} \n
-------------------------------------------
 Mensaje Enviado : ${MSG}`
    )
    .setThumbnail("https://media.giphy.com/media/Fo5y4K3GD3RYijvsCS/giphy.gif");

  client.channels.cache.get("aca va el id de su canal").send(embed);
  res.json({Estado:'Enviado'});
});

expressApp.listen("1200", () => {
  console.log("expressiniciado");
});

//recuerden no pasar el token a nadie
client.login("TOKEN");
