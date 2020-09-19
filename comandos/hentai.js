const Discord = require("discord.js");
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

module.exports.run = async (client, message, args) => {
    var hentai;
        hentai =  await DabiClient.nsfw.hentai.ass();
        console.log(hentai);
        const embed = {
           "color": 8872107,
           "image": {
             "url": hentai.url
           }
       }
       message.channel.send({ embed });
}