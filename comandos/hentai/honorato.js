const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    var links = ["https://media.discordapp.net/attachments/710240208800710706/744759911967359086/unknown.png", 
                "https://media.discordapp.net/attachments/710240208800710706/754549310179377253/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/754547926134685706/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/750562751356862525/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/750549341072130168/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/744766870959423548/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/744766459510653009/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/744766018546696234/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/744759177900982333/IMG_20191226_185314.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/743905627495202836/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/743351904847003678/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/733388490988978226/IMG-20170819-WA0020.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/731369841495113758/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/731369426007490600/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/731369021412474970/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/731368080936271882/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/731000725227831356/unknown.png",
                "https://cdn.discordapp.com/attachments/710240208800710706/730991109022548060/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/725212545454964736/unknown.png",
                "https://media.discordapp.net/attachments/552618415542501378/723786186308452372/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/723784060081537104/unknown.png",
                ];
                
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