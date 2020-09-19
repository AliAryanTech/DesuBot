const Discord = require("discord.js");
const config = require("./config/config.json"); 
const desu = require("./config/desu.json");

module.exports.run = async (client, message, args) => {

                var frase = message.content;
                    frase = frase.substr(8);
              
                var attcount = 0;
                var endereco;
                message.attachments.forEach(attachments => {
                    attcount += 1;
                    endereco = attachments.url;
                });
                const embed = {
                    "title": "Nova mensagem anônima 👓",
                    "description": "❤️ 💛 💚 💙 💜 🖤",
                    "color": 9255907,
                    "thumbnail": {
                      "url": "https://i.pinimg.com/236x/95/9c/63/959c63b135949f6554b3e1349205b29b.jpg"
                    },
                    "image": {
                      "url": endereco
                    },
                    "author": {
                      "name": "Dekomori Desu!",
                      "url": "https://twitter.com/awaycoelho",
                      "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                    },
                    "fields": [
                      {
                        "name": "Mensagem:",
                        "value": frase
                      }
                    ]
                  };
                  var channel = await client.channels.cache.get('755530687293030473');
                channel.send({ embed });
                channel.send(endereco);
            message.channel.send("Mensagem enviada para o canal #janela-anonima-👓");
        if(attcount > 0){
            message.delete({ timeout: 1000 });
        }else{
            message.delete();
        }
    }
    