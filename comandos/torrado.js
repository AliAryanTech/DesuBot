const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    var links = ["https://cdn.discordapp.com/attachments/552618415542501378/745125792102613002/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125819982151690/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125833852846140/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125489017880717/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125632031195176/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125661055909948/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125676587417630/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125699706159195/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125717729345616/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125738113663007/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125761064632348/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125772376670308/9k.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125792190824558/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125850483261470/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125866211639424/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125886126325812/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125914177962105/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125935577169990/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125959992344646/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/745125976572297256/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241163680907324/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241250318712922/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241439183765524/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241551071150297/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241653630140426/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241693925081118/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747241861768282162/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747242123270553731/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747242626130116800/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747242725061034014/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747243189009907812/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747243524927389766/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747243662412611594/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747243784169062420/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747243958769418390/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244089539428382/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244288244449372/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244460961693756/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244516079304855/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244563730661397/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747244768635125820/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/747242019931291769/unknown.png",
                "https://cdn.discordapp.com/attachments/699854006805069885/747563175087571069/unknown.png",
                "https://cdn.discordapp.com/attachments/699854006805069885/747563203327688895/unknown.png",
                "https://cdn.discordapp.com/attachments/699854006805069885/747563225943507077/unknown.png",
                "https://cdn.discordapp.com/attachments/699854006805069885/747583961663930498/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750154984472969326/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750155361314668574/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750155539434045500/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750155899330494576/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750155990070198282/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750156116687847474/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750157689232818244/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750157834670440468/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750157893331976263/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750157999519301722/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750158093312327680/unknown.png",
                "https://cdn.discordapp.com/attachments/552618415542501378/750158398498013204/unknown.png"];
                
                var index = Math.floor(Math.random() * links.length);
                var link = links[index];
                console.log(link);
                
                const embed = {
                    "title": index == 0 ? "Você foi avisado! 😈": null,
                    "image": {
                      "url": link
                    },

                    "author": {
                      "name": "Dekomori Desu!",
                      "url": "https://twitter.com/awaycoelho",
                      "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                    }
                  };
                message.channel.send({ embed });
}