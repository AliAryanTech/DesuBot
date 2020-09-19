const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = {
        "title": "você foi avisado!",
        "color": 8872107,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/517030749141205012/724543723945459732/unknown_4.png"
        }
      };
      message.channel.send({ embed })
      .then((msg)=> {
        msg.react('⚠️');
        });
}