const { MessageEmbed } = require("discord.js")

exports.run = async(client, message) => {
    
  if (message.author.id !== "YOURID") return;

        const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("Il n'y a pas de message supprimé ! ❌")
        const embed = new MessageEmbed()
        .setAuthor(msg.author, message.author.avatarURL({dynamic : true}))
        .setDescription(msg.content)
        .setColor('#880000')
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
   
    exports.help = {
      name: "snipe",
      aliases: [""],
      description: "",
      usage: `snipe`,
      type: "moderation",
      maj: "false",
  }


  