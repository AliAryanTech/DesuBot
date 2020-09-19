const readline = require('readline');
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./comandos/config/config.json"); 
const desu = require("./comandos/config/desu.json");
const banimentos = require("./comandos/class/mutado.js");
const ytdl = require("ytdl-core");

var macacobool = false;

client.on("ready", async () =>{
    console.log(`Bot Iniciado mlk`);
    client.user.setActivity(`twitter.com/awaycoelho`);
    var guild = await client.guilds.cache.find(guild => guild.id == "552618415542501376");
    var member = await guild.members.cache.find(member => member.id == "226497578592763904");
    var role = await guild.roles.cache.find(role => role.id == "707690115194945659");
    //setTimeout(function(){  }, 10000);
    await member.roles.add(role);
    //console.log(guild);
    //console.log(member);
    console.log(member.user.id);
    banimentos.addSoftban(member.user.id);
});


client.login(config.token);

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('guildMemberAdd',async member => {
    var guild = client.guilds.cache.find(guild => guild.id == "552618415542501376");
  if(!banimentos.contem(member.user.id)){
    var role = guild.roles.cache.find(role => role.id == "562856051599212544");
    member.roles.add(role);
  }else{
    var channel = guild.channels.cache.find(channel => channel.id == "552618415542501378");
    channel.send("O membro " + member.user.tag + " entrou, mas não posso concender acesso por enquanto :(" );
  }
  console.log(member.user.id);
  if(!banimentos.contemSoftban(member.user.id) || member.user.id == "226497578592763904"){
    console.log(member.user.id);
    var role_softban = await guild.roles.cache.find(role => role.id == "707690115194945659");
    member.roles.add(role_softban);
  }

  


  
});

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




});




function enviarMensagem(mensagem){
    client.channels.cache.get(desu.canal).send(mensagem);
    console.log("mensagem enviada master <3");
};


leitor.on('line', (input) => {
    if(input === "MESSAGE"){
        leitor.question("Qual mensagem enviar master? \n", function(answer) {
            enviarMensagem(answer);
        });
    }
});

