const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = ` ${days.toFixed()} dias\n ${hours.toFixed()} horas\n ${minutes.toFixed()} minutos\n ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Estou acordada há`)
    .setThumbnail("https://pa1.narvii.com/6928/901d21be3d30cc934deb5986047f00f32e7f4dc3r1-640-360_00.gif")
    .setColor("#FF0000")
    .setDescription(`${uptime}`)

  message.channel.send(embed);
};