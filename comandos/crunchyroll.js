const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var conta = ["mcxrakirqzkokpyifb@miucce.com"];
    var senha = ["pikapika123"];
    var data = ["07/02/2021"];

    var i = 0;//Math.floor(Math.random() * 2);

    const embed = {
        "title": "Conta Crunchyroll gratis!",
        "description": "Obrigada por participar do  Desu!",
        "color": 15440692,
        "footer": {
          "text": "by QuitGames"
        },
        "thumbnail": {
          "url": "https://www.apkmirror.com/wp-content/uploads/2019/05/5cd3245eade32-384x384.png"
        },
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        },
        "fields": [
          {
            "name": "Usuario:",
            "value": conta[i],
          },
          {
            "name": "Senha:",
            "value": senha[i],
            "inline": true
          },
          {
            "name": "Data de Validade:",
            "value": data[i],
            "inline": true
          }
        ]
      };
      message.channel.send({ embed });


}