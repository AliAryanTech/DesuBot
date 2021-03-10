const Banco = require("./class/Banco.js");


module.exports.run = async (client, message, args) => {
  if(!args[0]){
      await Banco.execSQLQuery(`SELECT * FROM usuario WHERE id = ${message.author.id}`, function(result, error, results){
        if(result == "error"){
                message.reply("Houve um error!");   
        }else{
            const embed = {
                "title": message.author.name,
                "description": "❤💛💚💙💜",
                "color": 5159747,
                "thumbnail": {
                  "url": message.author.avatarURL()
                },
                "author": {
                    "name": "Dekomori Desu!",
                    "url": "https://twitter.com/awaycoelho",
                    "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                },
                "fields": [
                  {
                    "name": "Desu-Points 💵",
                    "value": `${results[0]['coins']}`
                  },
                  {
                    "name": "Fall in Love with 💞 ",
                    "value": `<@${results[0]['marry']}>`
                  }
                ]
              };
              message.channel.send({ embed });
        }
    });
  }
  else{

    var mencao = message.mentions.members.first();
    await Banco.execSQLQuery(`SELECT * FROM usuario WHERE id = ${mencao.id}`, function(result, error, results){
      if(result == "error"){
              message.reply("Houve um error!");   
      }else{
          const embed = {
              "title": mencao.user.name,
              "description": "❤💛💚💙💜",
              "color": 5159747,
              "thumbnail": {
                "url": mencao.user.avatarURL()
              },
              "author": {
                  "name": "Dekomori Desu!",
                  "url": "https://twitter.com/awaycoelho",
                  "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
              },
              "fields": [
                {
                  "name": "Desu-Points 💵",
                  "value": `${results[0]['coins']}`
                },
                {
                  "name": "Fall in Love with 💞 ",
                  "value": `<@${results[0]['marry']}>`
                }
              ]
            };
            message.channel.send({ embed });
      }
  });
  }
  
    
    
}