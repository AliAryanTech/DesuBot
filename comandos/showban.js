const Discord = require("discord.js");
const banimentos = require("./class/mutado.js");

module.exports.run = async (client, message, args) => {
  message.reply(banimentos.toString()); 
}