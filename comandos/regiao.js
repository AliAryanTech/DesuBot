const Discord = require("discord.js");
const desu = require("./config/desu.json");


module.exports.run = async (client, message, args) => {
    if(message.guild.region == 'brazil'){
        message.guild.setRegion('us-south');
        const embed = {
          "title": "Alterei a região do servidor para o United States.",
          "description": "Se a chamada de voz estava travando ou soando um pouco robótica para todos, isso deve resolver!",
          "color": 16303202,
          "footer": {
            "text": "by QuitGames"
          },
          "thumbnail": {
            "url": "https://images.freeimages.com/images/large-previews/ef4/usa-flag-1151908.jpg"
          },
          "author": {
            "name": "Dekomori Desu!",
            "url": "https://twitter.com/awaycoelho",
            "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
          }
        };
        message.channel.send({ embed });
      }else{
        message.guild.setRegion('brazil');
        const embed = {
          "title": "Alterei a região do servidor para o Brazil.",
          "description": "Se a chamada de voz estava travando ou soando um pouco robótica para todos, isso deve resolver!",
          "color": 16303202,
          "footer": {
            "text": "by QuitGames"
          },
          "thumbnail": {
            "url": "https://cdn.hipercultura.com/imagens/720px-flag-of-brazil-1889-1960-svg-cke.jpg"
          },
          "author": {
            "name": "Dekomori Desu!",
            "url": "https://twitter.com/awaycoelho",
            "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
          }
        };
        message.channel.send({ embed });
      }
}