const Banco = require("./class/Banco.js");


module.exports.run = async (client, message, args) => {
    if(!args[0]){
        return message.reply("marque seu amor :>");
    }
    var amor = message.mentions.members.first();
    await Banco.execSQLQuery(`UPDATE usuario SET marry = '${amor.id}' WHERE id = '${message.author.id}' `, async function(result, error, results){
        if(result == "error"){
            message.reply("Houve um error!");   
        }else{
            message.reply("Seu amor foi declarado e esta disponivel em seu perfil!");  
            try{
                await Banco.execSQLQuery(`SELECT marry FROM usuario WHERE id = '${amor.id}' `, async function(result, error, results){
                    if(result == "error"){
                        message.reply("Houve um error!");   
                    }else{
                        console.log(results[0]['marry']);
                        if(results[0]['marry'] == message.author.id){
                            message.channel.send(`${amor.user.avatarURL()} \n https://cdn.discordapp.com/attachments/722385802536943658/782666418239700992/kokoro.png \n ${message.author.avatarURL()} \n\n\n💞  NOVO MATCH  💞 \n .`);
                        }
                    }
                })
            }catch(error){
                console.log("MARCOU ALGUEM Q N PODE");
            } 
        }
    });

    
    

    


}