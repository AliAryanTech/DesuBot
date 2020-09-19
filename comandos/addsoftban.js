const Discord = require("discord.js");
const desu = require("./config/desu.json");
const banimentos = require("./class/mutado.js");

module.exports.run = async (client, message, args) => {
    //if(message.author.id != "268778657814675456"){
    //    return message.reply("So respondo ao meu mestre quando a coisa é seria! :X");
    //}
    var role_softban = message.guild.roles.cache.find(role => role.id === "707690115194945659");
    var frase = message.content;
    frase = frase.substr(8);
    var membro = message.mentions.members.first();
    const embed = {
      "title": membro.user.username + " levou SOFTBAN no Desu!",
      "description": "Começou a dentadura do master??? oh não que triste! ",
      "color": 16711680,
      "footer": {
        "text": "by QuitGames"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/517030749141205012/728480089381142599/tumblr_n0af9wRruu1qg4aw8o1_500_1.gif"
      },
      "author": {
        "name": "Dekomori Desu!",
        "url": "https://twitter.com/awaycoelho",
        "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
      },
      "fields": [
        {
            "name": "Tempo:",
            "value": "72 horas",
            "inline": true
          }
      ]
    };
    message.channel.send({ embed });
      
      membro.user.send({ embed })
      .then(message => console.log("mensagem de BAN enviada com sucesso!"));
      
      setTimeout(function(){ membro.roles.add(role_softban); banimentos.addSoftban(membro.user.id);
      }, 1000);
}