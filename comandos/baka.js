const Discord = require("discord.js");
const desu = require("./config/desu.json");
const banimentos = require("./class/mutado.js");

module.exports.run = async (client, message, args) => {
    if(message.author.id != "268778657814675456"){
        return message.reply("So respondo ao meu mestre quando a coisa é seria! :X");
    }
    var role_baka = message.guild.roles.cache.find(role => role.id === "562856051599212544");
    var frase = message.content;
    frase = frase.substr(5);
    var membro = message.member;
    const embed = {
      "title": membro.user.username + " se tornou uma pessoa no Desu!",
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
          "name": "Motivo:",
          "value": frase,
          "inline": true
        },
        {
            "name": "Tempo:",
            "value": "15 minutos",
            "inline": true
          }
      ]
    };
    message.channel.send({ embed });
      
      membro.user.send({ embed })
      .then(message => console.log("mensagem de BAN enviada com sucesso!"));
      
      setTimeout(function(){ membro.roles.remove(role_baka); banimentos.addPessoa(membro.user.id);
      }, 1000);

      setTimeout(function(){ membro.roles.add(role_baka); banimentos.removePessoa(membro.user.id);
      }, 900000);
}