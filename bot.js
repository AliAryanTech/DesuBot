const readline = require('readline');
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./comandos/config/config.json"); 
const desu = require("./comandos/config/desu.json");
const banimentos = require("./comandos/class/mutado.js");
const ytdl = require("ytdl-core");
var fs = require('fs');
var http = require("http");



var macacobool = false; //EVITA DO VANNILEL EXPAMAR
var rocketserver = [];
var apexserver = [];

client.on("ready", async () =>{
    console.log(`Bot Iniciado mlk`);
    client.user.setActivity(`Obrigado por me adicionar em seu servidor ❤\nenvie na minha DM sugestões de mudanças \nAwayDreams#0001`);
});


client.login(config.token);

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('guildMemberAdd',async member => {
    if(member.guild.id == "552618415542501376"){
      var guild = client.guilds.cache.find(guild => guild.id == "552618415542501376");
      if(!banimentos.contem(member.user.id)){
        var role = guild.roles.cache.find(role => role.id == "562856051599212544"); //role pessoas legais
        member.roles.add(role);
      }else{
        var channel = guild.channels.cache.find(channel => channel.id == "552618415542501378");
        channel.send("O membro " + member.user.tag + " entrou, mas não posso concender acesso por enquanto :(" );
      }
      console.log(member.user.id);
      if(banimentos.contemSoftban(member.user.id)){
        console.log(member.user.id);
        var role_softban = await guild.roles.cache.find(role => role.id == "707690115194945659");
        member.roles.add(role_softban);
    }
  } 
 
});


/*
client.on('voiceStateUpdate', async (VoiceStateUpdateOld, VoiceStateUpdateNew) => {
  if(macacobool == false && (VoiceStateUpdateNew.id == '699777695176851497' || VoiceStateUpdateNew.id ==  '340557813569028106')){
    
    if(VoiceStateUpdateOld.channel == VoiceStateUpdateNew.channel || VoiceStateUpdateNew.channel == null){
      return null;
    }

    

    macacobool = true;
    setTimeout(function() {macacobool = false;}, 900000);

    
    const embed = {
      "color": 16718105,
      "image": {
        "url": "https://media1.tenor.com/images/157b8c995496486324ebdf2d02e507bd/tenor.gif?itemid=17822595"
      },
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/699777695176851497/4e4411599959761718f8ea79cafba15b.png?size=256",
        "text": "O Vannilel entrou na call!!!"
      },
      "author": {
        "name": "Dekomori Desu!",
        "url": "https://twitter.com/awaycoelho",
        "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
      }
    };
    var channel = await client.channels.cache.get('552618415542501378');
    channel.send({ embed });
    
    var voiceChannel = VoiceStateUpdateNew.channel;
    
    voiceChannel.join().then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=ur-ggo4Aek8', { filter: 'audioonly' });
      //const stream = fs.createReadStream('https://cdn.discordapp.com/attachments/699854006805069885/727764346947502090/projeto_foda.mp3');
      const dispatcher = connection.play(stream);
      dispatcher.on('end', () => voiceChannel.leave());
      setTimeout(function() {voiceChannel.leave();}, 15000);
    });
    
    
  }
});
*/



client.on('message', async message =>{
  const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
  
        if(message.content.startsWith("$") && 
          (message.channel.id== "691341018460717087" || message.channel.id== "717840502040559757" || message.channel.id== "552618415542501378"|| message.channel.id== "710240208800710706" )){
            message.delete();
            const embed = {
                "title": "Por Favor, não envie comandos da Mudamaid 25 aqui!",
                "description": "Evite softban, comandos somente no #bots ou #purgatório-chat-🐁",
                "color": 6643955,
                "thumbnail": {
                  "url": "https://cdn.discordapp.com/avatars/566216057421955074/044cce5f552d141ad77ce7d0411ab1c0.png?size=256"
                },
                "author": {
                  "name": "Dekomori Desu!",
                  "url": "https://twitter.com/awaycoelho",
                  "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                }
              };
            message.channel.send({ embed }).then((msg)=> {
                msg.delete({ timeout: 5000 });
                });
        }

        if(message.author.id == "566216057421955074" &&
        (message.channel.id == "691341018460717087" || message.channel.id == "717840502040559757" || message.channel.id== "552618415542501378" || message.channel.id== "710240208800710706")){
            message.delete();
        }


        if (message.content.startsWith(config.prefix + "desconnect")){
            voiceChannel.leave();
        }

        
        
        if(message.content.includes("Rocket League") || message.content.includes("rocket league") ||message.content.includes("Rocket") ||message.content.includes("rocket")){
          if(message.author.id != '516363728690610198'){
            if(rocketserver.includes(message.guild.id)){
              message.reply("parece que você gosta muito de Rocket hehe");
            }
            else{
              rocketserver.push(message.guild.id);
              setTimeout(function() {rocketserver.pop(message.guild.id)}, 300000);
              voiceChannel = message.member.voice.channel;
              const streamOptions = { seek: 0, volume: 1 };
              voiceChannel.join().then( async connection =>  {
                const stream = await ytdl('https://youtu.be/hEmG-CP6y-g', { filter: 'audioonly', type: 'opus', begin: '55s' });
                //const stream = fs.createReadStream('https://cdn.discordapp.com/attachments/699854006805069885/727764346947502090/projeto_foda.mp3');
                const dispatcher = connection.play(stream, streamOptions);
                setTimeout(function() {voiceChannel.leave();}, 20000);
              });
  
            }
          }
        }

          if(message.content.includes("Apex") || 
            message.content.includes("APEX") ||
            message.content.includes("apex") ||
            message.content.includes("pepex")){
              console.log("opa");
          if(message.author.id != '516363728690610198'){
            
            if(apexserver.includes(message.guild.id)){
              message.reply("parece que você gosta muito de Apex hehe");
            }
            else{
              apexserver.push(message.guild.id);
              setTimeout(function() {apexserver.pop(message.guild.id)}, 300000);
              voiceChannel = message.member.voice.channel;
              const streamOptions = { seek: 0, volume: 1 };
              voiceChannel.join().then( async connection =>  {
                //const stream = await ytdl('https://youtu.be/hEmG-CP6y-g', { filter: 'audioonly', type: 'opus', begin: '55s' });
                const stream = fs.createReadStream('./apex.mp3');
                const dispatcher = connection.play(stream, streamOptions);
                setTimeout(function() {voiceChannel.leave();}, 16000);
              });
  
            }
          }

      }
  




});


setInterval(function() {
    http.get("http://dekomori.herokuapp.com");
}, 300000); // a cada 5 minutos (300000)




function enviarMensagem(mensagem){
    client.channels.cache.get(desu.canal).send(mensagem);
    console.log("mensagem enviada master <3");
};


leitor.on('line', async (input) => {
    var server;
    var frase;
  switch(input){
    case 'MESSAGE':
      leitor.question("Qual mensagem enviar master? \n", function(answer) {
        enviarMensagem(answer);
    });
      break;
    case 'SERVERS':
      console.log(client.guilds);
      break;
    case 'getinvite':
      server = await client.guilds.resolve('721563382129360896');
      console.log(await server.fetchInvites());
      break;
      case 'MEMBERS':
      server = await client.guilds.resolve('721563382129360896');
      console.log(await server.members.cache);
      break;
  }
  

});








