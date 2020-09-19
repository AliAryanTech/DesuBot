const Discord = require("discord.js");
const HentaiOffset = require("./class/hentaioffset.js");
const fetch = require("node-fetch");

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


/*function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}*/

async function  httpGet(url)  {
   var text = await fetch(url);
   text = await text.json();
   console.log(text);
   return text;
}

async function enviarEmbed(req, message){
  const embed = {
    "color": 8872107,
    "image": {
      "url": req[Math.floor(Math.random() * 10)].large_file_url
    }
}
await message.channel.send({ embed });
}




module.exports.run = async (client, message, args) => {
    if(args == null){
        var req = await httpGet("https://danbooru.donmai.us/posts.json?tags=bikini&limit=10&random=true?&page=" + HentaiOffset.Offset() + "*");
        enviarEmbed(req, message);
    }else if(args == "help"){
        
        const embed = {
            "title": "O melhor comando de hentai que conheço ate o momento!",
            "description": "**!newhentai**  <tag>",
            "color": 16613429,
            "footer": {
              "text": "by QuitGames"
            },
            "thumbnail": {
              "url": "https://tse4.mm.bing.net/th?id=OIP.iyIhPgoYvkxVrfmA-qbw0gHaFj&pid=15.1"
            },
            "author": {
              "name": "Dekomori Desu!",
              "url": "https://twitter.com/awaycoelho",
              "icon_url": "https://cdn.discordapp.com/avatars/516363728690610198/03ae58a817b6ba39c59cfa4508fdf18c.png?size=256"
            },
            "fields": [
              {
                "name": "Tags sugeridas",
                "value": "petite \ncensored \nsex\noppai_loli \n1girl \noral \nlong_hair  "
              }
            ]
          };
        
        return message.channel.send({ embed });
    }else{
      try {
        const commandFile = require(`./hentai/${args}.js`);
        commandFile.run(client, message, args);
      }catch (err) {
      console.log(err);
      var req = await httpGet("https://danbooru.donmai.us/posts.json?tags=" + args + "&limit=10&random=true?&page=" + HentaiOffset.OffsetTag() + "*");
      enviarEmbed(req, message);
      }

    }

    


    
    
}