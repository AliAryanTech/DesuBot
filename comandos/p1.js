const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var links = ["https://media.tenor.com/images/8cd690298bd47eea427dcd2784ac6c35/tenor.gif","https://media1.tenor.com/images/27066d70fbd3efdc598f512e1bf05d32/tenor.gif?itemid=16834133", ""];
        const embed = {
            "color": 8872107,
            "image": {
              "url": links[Math.random() < 0.5 ? 0 : 1]
            },
          };
          message.channel.send({ embed });
    }