const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')

  
  const sayMessage = args.join(" ");
  message.delete();
 if(message.content.includes("@everyone") || message.content.includes("discord.gg/") || message.content.includes("@here") || message.content.includes("discord.com/invite/") || message.content.includes("<@")|| message.content.includes("@"))  return message.reply("**Interdit !**")
    message.channel.send(sayMessage)
      
  };

  exports.help = {
    name: "say",
    aliases: ["s"],
    description: "",
    usage: `say <message>`,
    type: "owner",
    maj: "false",
  }




