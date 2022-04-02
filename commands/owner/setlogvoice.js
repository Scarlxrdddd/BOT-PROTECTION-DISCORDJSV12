const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {

  let perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send("Tu as besoin des permissions administrateur pour utiliser cette commande.")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Tu dois spécifier un channel")
    
    let logchannel8 = db.fetch(`logchannel8_${message.guild.id}`)
    
    if(logchannel8 === channel.id) {
      return message.channel.send("Tu ne peux pas spécifier le même channel")
    }
    
    message.channel.send(`Les logs sont maitenant dans ${channel}`)
    db.set(`logchannel8_${message.guild.id}`, channel.id)
    channel.send("Ce channel est maintenant le lograidchannel")
  }



exports.help = {
    name: "voicelog",
    aliases: ["slv"],
    description: "",
    usage: `voicelog`,
    type: "owner",
    maj: "false",
  }