const Discord = require("discord.js");
const config = require("./config/config.json"); 
const desu = require("./config/desu.json");

module.exports.run = async (client, message, args) => {
    var mencao = message.mentions.members.first();
    const embed = {
        "title": "Você foi cutucado!",
        "description": `você foi cutucado por ${message.author.username} 👉👉`,
        "color": 13278761,
        "footer": {
          "text": "by QuitGames"
        },
        "thumbnail": {
          "url": "https://c.wallhere.com/photos/b0/54/lucky_star_izumi_konata_close_up_finger-693408.jpg!d"
        },
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        }
      };

      const embed2 = {
        "title": `Você cutucou ${mencao.user.username}!`,
        "description": `Uma mensagem foi enviada para a ${mencao.user.username} 👉👉`,
        "color": 13278761,
        "footer": {
          "text": "by QuitGames"
        },
        "thumbnail": {
          "url": "https://c.wallhere.com/photos/b0/54/lucky_star_izumi_konata_close_up_finger-693408.jpg!d"
        },
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        }
      };

    await mencao.user.send({ embed });
    await message.channel.send(`Você cutucou ${mencao.user.username}!`);
        
    }
    