const Discord = require("discord.js");
const banimentos = require("./class/mutado.js");


module.exports.run = async (client, message, args) => {
    var role = message.guild.roles.cache.find(role => role.name === "Pessoas Legais");
    var role_softban = message.guild.roles.cache.find(role => role.id === "707690115194945659");
    
    if(!banimentos.contem(message.author.id)){
      message.member.roles.add(role);
      message.member.voice.setMute(false, "removido por !legal");
    }

    if(!banimentos.contemSoftban(message.author.id)){
        message.member.roles.remove(role_softban);
    }

    const embed = {
        "title": "Como vai sua honra no Desu?",
        "description": "Se você esta com alguma restrição incoveniente, eu irei remover 🥰",
        "color": 6286131,
        "footer": {
          "text": "by QuitGames"
        },
        "thumbnail": {
          "url": "https://thumbs.gfycat.com/DecisiveFlimsyIrishterrier-small.gif"
        },
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        },
        "fields": [
          {
            "name": "Uma pessoa super legal? ",
            "value": banimentos.contem(message.author.id) ? "🅾": "✅"
          },
          {
            "name": "Longe de Softbans?",
            "value": banimentos.contemSoftban(message.author.id) ? "🅾": "✅"
          }
        ]
      };


    message.channel.send({ embed });
}