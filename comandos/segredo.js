const Discord = require("discord.js");
const config = require("./config/config.json"); 
const desu = require("./config/desu.json");

module.exports.run = async (client, message, args) => {
    var contador = 0;
        //descobre quantas pessoas estão mencionadas
        message.mentions.members.forEach((membro) => {
            contador += 1;
        });
        var attcount = 0;
        if(contador < 4){
            message.mentions.members.forEach((membro) => {
                var frase = message.content;
                if(message.content.startsWith(config.prefix + "segredinho") || message.content.startsWith(config.prefix + "SEGREDINHO")){
                    frase = frase.substr(11);
                }else{
                    frase = frase.substr(8);
                }
                
                var endereco;
                message.attachments.forEach(attachments => {
                    attcount += 1;
                    endereco = attachments.url;
                });
                const embed = {
                    "title": "Alguem te enviou um Segredinho <3",
                    "description": "❤️ 💛 💚 💙 💜 🖤",
                    "color": 9255907,
                    "thumbnail": {
                      "url": "https://i.pinimg.com/564x/58/11/a0/5811a0728083f80da11c21d6d0a00587.jpg"
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
                membro.user.send({ embed });
            });
            message.channel.send("Entreguei o segredinho para " + contador + " membro(s) ❤️");
        }else{
            message.reply("Um segredo deixa de ser segredo quando todos sabem :/");
        }
        if(attcount > 0){
            message.delete({ timeout: 1000 });
        }else{
            message.delete();
        }
        
    }
    