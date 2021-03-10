const Banco = require("./class/Banco.js");


module.exports.run = async (client, message, args) => {
    await Banco.execSQLQuery(`INSERT INTO usuario(id, coins) VALUES (${message.author.id}, '0')`, function(result, error, results){
        if(result == "error"){
            if(error.code == 'ER_DUP_ENTRY'){
                message.reply("você ja foi registrado!");   
            }else{
                message.reply("Houve um error!");   
            }
        }else{
            message.reply("você foi registrado com sucessso em meu Banco de Dados!");   
        }
    });
    
    
}