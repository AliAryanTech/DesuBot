const Discord = require("discord.js");
const desu = require("./config/desu.json");
const ytdl = require("ytdl-core");
const banimentos = require("./class/mutado.js");

  function embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total){
    var embed = {
        "title": tempo == 0 ? "Não ouve votos suficientes! ⚠" : nick + " foi mutado por " + tempo + " minutos(s)!",
        "color": 238891,
        "author": {
          "name": "Dekomori Desu!",
          "url": "https://twitter.com/awaycoelho",
          "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
        },
        "fields": [
          {
            "name": "Pessoas em Call:",
            "value": pessoasVoice
          },
          {
            "name": "Votos ✅:",
            "value": vote_yes
          },
          {
            "name": "Votos 🅾:",
            "value": vote_no - 1
          },
          {
            "name": "Votos não computados 🚷:",
            "value": foradecall
          },
          {
            "name": "Porcentagem Por Voto:",
            "value": porcentagem+ "%",
            "inline": true
          },
          {
            "name": "Votos Totais:",
            "value": total+ "%",
            "inline": true
          }
        ]
      };
      console.log(embed);
      return embed;
  }



module.exports.run = async (client, message, args) => {
    voiceChannel = message.member.voice.channel;
    if(!voiceChannel){
      return message.channel.send("ue?? você nem esta conversando ಠ_ಠ");
    }
    if(voiceChannel.id == "562849292721717274"){
      return message.channel.send("Este canal é UNSAFE, você não tem poder nestas terras " + message.member.user.username + " !");
    }
    var membro  = message.mentions.members.first();
    var pessoasVoice = 0;
    var vote_yes = 0
    var vote_no = 0;
    var foradecall = 0;
    
    voiceChannel.members.forEach(element => {
      pessoasVoice++;
    });
    if(pessoasVoice < 3){
     return message.channel.send("Se esta se sentindo incomodado saia você da call >:C");
    }
    var ids = [];
    voiceChannel.members.forEach( membro => {
      if(membro.user.id != "516363728690610198"){
      ids.push(membro.user.id);
       }
    });
    if(!ids.includes(membro.user.id)){
      return message.channel.send("Você não esta no canal da pessoa que deseja mutar!");
    }
    var porcentagem = 100 / pessoasVoice;
    var multiplicador = 1;
    if(pessoasVoice > 5){
      multiplicador += pessoasVoice - 5;
    }
  var embed = {
    "title": "Mutar "+ membro.user.tag +" ?",
    "description": "Se alguem estiver incomandando com som alto, gritos, mic estourado, deixe-me puni-lo!",
    "color": 6391534,
    "footer": {
      "text": "by QuitGames (comando BETA)"
    },
    "thumbnail": {
      "url": membro.user.avatarURL()
    },
    "author": {
      "name": "Dekomori Desu!",
      "url": "https://twitter.com/awaycoelho",
      "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
    },
    "fields": [
      {
        "name": 1 * multiplicador + " Minuto(s)",
        "value": "60% de votos"
      },
      {
        "name": 3 * multiplicador + " Minutos",
        "value": "70% de votos"
      },
      {
        "name": 5 * multiplicador + " Minutos",
        "value": "80% dos votos"
      },
      {
        "name": 10 * multiplicador + " Minutos",
        "value": "90% dos votos"
      },
      {
        "name": "Mutiplicador de Tempo",
        "value": "Se ouver mais de 5 pessoas em chamada, o tempo sera multiplicado pelo excendente!"
      },
      {
        "name": "Votar Sim",
        "value": "✅",
        "inline": true
      },
      {
        "name": "Votar Não",
        "value": "🅾️",
        "inline": true
      }
    ]
  };
    var msg;
    msg = await message.channel.send({ embed });
    try {
      await msg.react('✅');
      await msg.react('🅾️');
    } catch (error) {
      message.channel.send("Opa, algo esta fora dos conformes aqui ;-; (ERROR)")
    }

    //toca a musica
    voiceChannel.join().then(connection => {
      const stream = ytdl('https://youtu.be/R5Aw1qd9MT0', { filter: 'audioonly' });
      //const stream = fs.createReadStream('https://cdn.discordapp.com/attachments/699854006805069885/727764346947502090/projeto_foda.mp3');
      const dispatcher = connection.play(stream);
      dispatcher.on('end', () => voiceChannel.leave());
      setTimeout(function() {voiceChannel.leave();}, 15000);
    });
    
    //console.log(ids);
    const filter = (reaction, user) => {
      //console.log(ids.includes(user.id));
      return ['✅'].includes(reaction.emoji.name) && ids.includes(user.id);
      
    };
     await msg.awaitReactions(filter, { max: pessoasVoice, time: 30000})
    .then(collected => {
        //console.log(collected);
        const reaction = collected.forEach(element =>{
          //console.log(element);
          //console.log("===============");
          var userids = [];
          element.users.cache.forEach(user => {userids.push(user.id)});
          console.log("---------------");
          console.log(userids);
          console.log(ids);
          console.log("---------------");
          if(element.emoji.name  == '✅'){
            for(var i = 0; i < userids.length; i++){
              if(!ids.includes(userids[i])){
                foradecall++;
              }
            }
            vote_yes = element.count - foradecall;
          }
        });
      });
    var total  = vote_yes * porcentagem;
    vote_no = pessoasVoice - vote_yes;
    var role = message.guild.roles.cache.find(role => role.name === "Pessoas Legais");
    var nick = membro.user.tag;
    var tempo = 0;

    if(vote_yes > vote_no && total >= 60 && pessoasVoice > 1){
      membro.roles.remove(role);
      banimentos.addPessoa(membro.user.id);
      
      if(total >= 60 && total < 70){
       
        tempo = 1 * multiplicador;
        
        embed = embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total);
        console.log(embed);
        message.channel.send({ embed });
        setTimeout(function(){ membro.roles.add(role); banimentos.removePessoa(membro.user.id);}, 60000 * multiplicador);

      }else if(total >= 70 && total < 80){
        
        tempo = 3 * multiplicador;
         embed = embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total);
         console.log(embed);
         message.channel.send({ embed });
        setTimeout(function(){ membro.roles.add(role); banimentos.removePessoa(membro.user.id);}, 180000 * multiplicador);

      }else if(total >= 80 && total < 90){
        
        tempo = 5 * multiplicador;
       
        embed = embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total);
        console.log(embed);
        message.channel.send({ embed });
        setTimeout(function(){ membro.roles.add(role); banimentos.removePessoa(membro.user.id);}, 300000 * multiplicador);

      }else if(total > 90){
        
        tempo = 10 * multiplicador;
    
        embed = embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total);
        console.log(embed);
        message.channel.send({ embed });
        setTimeout(function(){ membro.roles.add(role); banimentos.removePessoa(membro.user.id);}, 600000 * multiplicador);

      }
      membro.voice.setMute(true, "mutado por votemute");
    }else{
      tempo = 0;
      embed = embedcomple(nick,tempo,pessoasVoice,vote_yes,vote_no,foradecall, porcentagem, total);
      console.log(embed);
      message.channel.send({ embed });
    }

}