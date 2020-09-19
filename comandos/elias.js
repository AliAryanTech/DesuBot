const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const banimentos = require("./class/mutado.js");

const desu = require("./config/desu.json");

module.exports.run = async (client, message, args) => {
    voiceChannel = message.member.voice.channel;
            if(!voiceChannel){
                return message.reply("entre em um canal de voz :C");
            }
            var role = message.guild.roles.cache.find(role => role.name === "Cantinho da Depressão (Softban ❌)");
            const embed = {
                "title": "Você deseja sacrificar sua honra?",
                "description": "você recebera um softban de 5 minutos após confirmar sua vontade.",
                "color": 9526622,
                "footer": {
                  "icon_url": "",
                  "text": "by QuitGames"
                },
                "thumbnail": {
                  "url": "https://cdn.discordapp.com/attachments/722385802536943658/727719566016249917/Captura_de_Tela_161.png"
                },
                "author": {
                  "name": "Dekomori Desu!",
                  "url": "https://twitter.com/awaycoelho",
                  "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
                },
                "fields": [
                  {
                    "name": "Tem certeza que deseja enviar o rugido dos deuses?",
                    "value": "✅ - Sim \n🅾️  - Não\n"
                  }
                ]
              };
              const filter = (reaction, user) => {
                return ['✅', '🅾️'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
              var msg;
              msg = await message.channel.send({ embed });
              try {
                await msg.react('✅');
                await msg.react('🅾️');
            } catch (error) {
                message.channel.send("Opa, algo esta fora dos conformes aqui ;-; (ERROR)")
            }
              await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
              .then(collected => {
                  const reaction = collected.first();
                  if (reaction.emoji.name == '✅') {
                        message.member.roles.add(role);
                        message.channel.send("Obrigado por negociar-desu!");
                        banimentos.addSoftban(message.author.id); 
                        //toca a musica
                        voiceChannel.join().then(connection => {
                        const stream = ytdl('https://www.youtube.com/watch?v=U29lthQFLs0', { filter: 'audioonly' });
                        //const stream = fs.createReadStream('https://cdn.discordapp.com/attachments/699854006805069885/727764346947502090/projeto_foda.mp3');
                        const dispatcher = connection.play(stream);
                        dispatcher.on('end', () => voiceChannel.leave());
                        setTimeout(function() { message.member.roles.remove(role); voiceChannel.leave();banimentos.removeSoftban(message.author.id); message.reply("seu softban acabou!")}, 300000);
                    });
                }else{ message.channel.send("ah?? oks se mudar de ideia me invoque novamente!"); }
                });
}