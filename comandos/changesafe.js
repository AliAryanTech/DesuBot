const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    voicechannel = message.member.voice.channel;
    if(voicechannel.name.indexOf("SAFE") > -1){
        var name = voicechannel.name;
        name = name.substr(0, name.length - 5);
        voicechannel.setName(name).then(newChannel => console.log(`nome do canal alterado!`))
        .catch(console.error);
    }else{
        voicechannel.setName(voicechannel.name + " SAFE").then(newChannel => console.log(`nome do canal alterado!`))
        .catch(console.error);
    } 
}