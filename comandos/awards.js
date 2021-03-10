const Banco = require("./class/Banco.js");

module.exports.run = async (client, message, args) => {
    if(args[0]){
      var palavra = message.content;
      palavra = palavra.substr(8); 
        await Banco.execSQLQuery(`SELECT * FROM awards where nome = '${palavra}'`, function (result, error, results){
            if(!error){
              try{
                const embed = {
                  "title": `Escolhas de ${palavra} no The Game Awards 2020`,
                  "description": "💖💖💖",
                  "color": 14030838,
                  "footer": {
                    "text": "by AwayDreams | https://dekomori.herokuapp.com/"
                  },
                  "thumbnail": {
                    "url": "https://pbs.twimg.com/profile_images/1196633075142127617/NIzCX8Mo_400x400.png"
                  },
                  "image": {
                    "url": "https://pa1.narvii.com/6662/0cc640037f8a8fc677f45231a0420021b7a092c7_hq.gif"
                  },
                  "author": {
                    "name": "Dekomori Desu!",
                    "url": "https://twitter.com/awaycoelho",
                    "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                  },
                  "fields": [
                    {
                      "name": results[0]['ano'] == "The Last of Us Part II" ? "Game do Ano: ✅" : "Game do Ano: 🅾" ,
                      "value": `${results[0]['ano']}`
                    },
                    {
                      "name": results[0]['aguardado'] == "Elden Ring" ? "Jogo Mais Aguardado: ✅" : "Jogo Mais Aguardado: 🅾",
                      "value": `${results[0]['aguardado']}`
                    },
                    {
                      "name": results[0]['original'] == " " ?   "Melhor Jogo Original: ✅" : "Melhor Jogo Original: 🅾",
                      "value": `${results[0]['original']}`
                    },
                    {
                      "name": results[0]['hardware'] == " " ? "Melhor Periférico/Hardware: ✅" : "Melhor Periférico/Hardware: 🅾",
                      "value": `${results[0]['hardware']}`
                    },
                    {
                      "name": results[0]['tiro'] == " " ? "Melhor Jogo de Tiro: ✅" : "Melhor Jogo de Tiro: 🅾",
                      "value": `${results[0]['tiro']}`
                    },
                    {
                      "name": results[0]['aventura'] == "The Last of Us Part II" ? "Melhor Jogo de Ação e Aventura: ✅" : "Melhor Jogo de Ação e Aventura: 🅾" ,
                      "value": `${results[0]['aventura']}`
                    },
                    {
                      "name": results[0]['luta'] == "Mortal Kombat 11" ? "Melhor Jogo de Luta: ✅" : "Melhor Jogo de Luta: 🅾" ,
                      "value": `${results[0]['luta']}`
                    },
                    {
                      "name": results[0]['rpg'] == " " ? "Melhor RPG: ✅" : "Melhor RPG: 🅾",
                      "value": `${results[0]['rpg']}`
                    },
                    {
                      "name": results[0]['corrida'] == "Tony Hawk's Pro Skater 1+ 2 " ? "Melhor Jogo de Corrida: ✅" : "Melhor Jogo de Corrida: 🅾",
                      "value": `${results[0]['corrida']}`
                    },
                    {
                      "name": results[0]['esporte'] == "Tony Hawks Pro Skater 1 + 2 " ? "Melhor Jogo de Esporte: ✅" : "Melhor Jogo de Esporte: 🅾",
                      "value": `${results[0]['esporte']}`
                    },
                    {
                      "name": results[0]['estrategia'] == "Microsoft Flight Simulator" ? "Melhor Jogo de Estratégia: ✅" : "Melhor Jogo de Estratégia: 🅾",
                      "value": `${results[0]['estrategia']}`
                    },
                    {
                      "name": results[0]['familia'] == "animal crossing " ? "Melhor Jogo para a Família: ✅" : "Melhor Jogo para a Família: 🅾",
                      "value": `${results[0]['familia']}`
                    },
                    {
                      "name": results[0]['mobile'] == "Among Us" ? "Melhor Jogo Mobile: ✅" : "Melhor Jogo Mobile: 🅾",
                      "value": `${results[0]['mobile']}`
                    },
                    {
                      "name": results[0]['multiplayer'] == "Among Us" ? "Melhor Multiplayer: ✅" : "Melhor Multiplayer: 🅾",
                      "value": `${results[0]['multiplayer']}`
                    },
                    {
                      "name": results[0]['trilha'] == "Final Fantasy VII Remake" ? "Melhor Trilha Sonora: ✅" : "Melhor Trilha Sonora: 🅾",
                      "value": `${results[0]['trilha']}`
                    },
                    {
                      "name": results[0]['estudio'] == " " ? "Melhor Estúdio: ✅" : "Melhor Estúdio: 🅾",
                      "value": `${results[0]['estudio']}`
                    },
                    {
                      "name": results[0]['publisher'] == "1 " ? "Melhor Publisher: ✅" : "Melhor Publisher: 🅾",
                      "value": `${results[0]['publisher']}`
                    },
                    {
                      "name": results[0]['independente'] == "Hades" ? "Melhor Jogo Independente: ✅" : "Melhor Jogo Independente: 🅾",
                      "value": `${results[0]['independente']}`
                    }
                  ]
                };
                message.channel.send({ embed });
              }catch(error){
                message.reply("ocorreu um ERROR!");
              }
              }else{
                message.reply("Houve um ERROR");
              }
        });

    }else{
      try{
        await Banco.execSQLQuery(`SELECT nome FROM awards`, function (result, error, results){
          var str = '';
        for(var i = 0; i < results.length; i++){
          str = str + ' [' + results[i]['nome'] + ']';
        }
          message.reply(`Nome de todos que apostaram: ${str}`);
      });
    }catch(error){
        message.reply("occoreu um error");
      }
      }
    }