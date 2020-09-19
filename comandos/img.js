const Discord = require("discord.js");
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

module.exports.run = async (client, message, args) => {
    var hentai;
         var embed;
         number = parseInt(Math.random() * 3);         
         console.log(number);
         switch(number){
            case 0:
                console.log("funciono " + number);
                hentai =  await DabiClient.nsfw.hentai.thighs();
                break;
            case 1:
                console.log("funciono " + number);
                hentai =  await DabiClient.nsfw.hentai.panties();
                break;
            case 2:
                console.log("funciono " + number);
                hentai =  await DabiClient.nsfw.hentai.feet();
                break;
         }
         console.log(hentai);
         embed = {
            "color": 8872107,
            "image": {
              "url": hentai.url
            }
        }
        message.channel.send({ embed });
}