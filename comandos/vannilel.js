const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var links = ["https://cdn.discordapp.com/attachments/552618415542501378/724549109159034920/unknown.png","https://cdn.discordapp.com/attachments/552618415542501378/724548743877230612/unknown.png", "https://cdn.discordapp.com/attachments/552618415542501378/724548681629696121/unknown.png", "https://cdn.discordapp.com/attachments/552618415542501378/724548632090771569/unknown.png"];
        var frase = ["fodase?", "vai tomar no cu?", "sexo 🤘🏻", "teu pai ta muito morto"];
        const embed = {
            "title": frase[Math.floor(Math.random() * 4)],
            "color": 8872107,
            "image": {
              "url": links[Math.floor(Math.random() * 4)] 
            }
          };
          message.channel.send({ embed })
          .then((msg)=> {
            msg.react('😳');
            });
}