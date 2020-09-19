const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    var links = ["https://cdn.discordapp.com/attachments/710240208800710706/754547961400131614/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/711467307225841684/unknown.png"];
                
                var index = Math.floor(Math.random() * links.length);
                var link = links[index];
                
                const embed = { 
                    "color": 8872107, 
                    "image": {
                      "url": link
                    }
                  };
                message.channel.send({ embed });
}