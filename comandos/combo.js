const Discord = require("discord.js");
const desu = require("./config/desu.json");
const ytdl = require("ytdl-core");
const banimentos = require("./class/mutado.js");


var ordem = ["regional_indicator_l","regional_indicator_r",":regional_indicator_l:",":regional_indicator_r:",":stop_button:",":dash:",":up:",":speech_balloon:",":regional_indicator_b:",":regional_indicator_b:",":regional_indicator_a:",":regional_indicator_b:",":arrow_forward:"];



module.exports.run = async (client, message, args) => {
    var resposta = gameFragment(0,1, message, client);
    console.log(resposta);

}


async function gameFragment(valortrue, valorfalse, message, client){
    var name = message.author.username;
    var embed = Embed( "0",name);
    var reactiontrue = await message.guild.emojis.cache.find(emoji => emoji.name === ordem[valortrue]);
    var reactionfalse = await message.guild.emojis.cache.find(emoji => emoji.name === ordem[valorfalse]);
    console.log(reactiontrue);
    let msg = await message.channel.send({ embed });
    await msg.react(reactiontrue);
    await msg.react(reactionfalse);
    
    /*msg.createReactionCollection(r => [ordem[0], ordem[1]].includes(r.emoji.name))
    .on('collect', r => { 
      if (client.emojis.getr.emoji.name == ordem[valortrue]) 
        return true;
      else if (r.emoji.name == ordem[valorfalse])
        return false;
    });*/ 
}


function Embed(numero,nome){
    var embed = {
        "title": `Você acertou ${numero} de 13!`,
        "description": `Muito bem ${nome}, boa sorte e não falhe no combo!`,
        "color": 5968389,
        "footer": {
          "text": "by AwayDreams"
        },
        "image": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        }
      };
      return embed;
}