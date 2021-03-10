const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.channel.send('8==✊D')
        .then((msg)=> {
            setTimeout(function(){ msg.edit('8=✊=D'); }, 600);
            setTimeout(function(){ msg.edit('8✊==D'); }, 1200);
            setTimeout(function(){ msg.edit('8=✊=D'); }, 1800);
            setTimeout(function(){ msg.edit('8==✊D💦'); }, 2400);
        }); 
    }