const Discord = require("discord.js");

const Tenor = require("tenorjs").client({
    "Key": "FFBS418ZCKAA", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});

module.exports.run = async (client, message, args) => {
    var frase = message.content;
        frase.substr(4);
        Tenor.Search.Random(frase, "1").then(Results => {
            Results.forEach(Post => {
                console.log("funciono <3");  
                const embed = {
                    "color": 8872107,
                    "image": {
                      "url": Post.url
                    }
                }
                message.channel.send(Post.url);
                  
            });
      }).catch(console.error);
}