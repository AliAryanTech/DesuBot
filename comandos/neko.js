const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports.run = async (client, message, args) => {
    const embed = {
        "color": 8872107,
        "image": {
          "url": akaneko.neko()
        }
    }
    message.channel.send({ embed });
}