const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const banimentos = require("./class/mutado.js");

const desu = require("./config/desu.json");

module.exports.run = async (client, message, args) => {
            imagens =["https://cdn.discordapp.com/attachments/552618415542501378/786825036459802664/unknown.png", "https://cdn.discordapp.com/attachments/699854006805069885/785480054460645407/FB_IMG_1607342917861.jpg"];
            var index = Math.floor(Math.random() * imagens.length);
            link = imagens[index];
            const embed = {
                "image": {
                "url": link
                }
            };
        
              var msg;
              msg = await message.channel.send({ embed });
              try {
                await msg.react('😡');
                await msg.react('👍');
            } catch (error) {
                message.channel.send("Opa, algo esta fora dos conformes aqui ;-; (ERROR)")
            }
             
}