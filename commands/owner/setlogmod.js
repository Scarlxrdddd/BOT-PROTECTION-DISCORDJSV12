const discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {

  let perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send("Tu as besoin des permissions administrateur pour utiliser cette commande.")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Tu dois spécifier un channel")
    
    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    
    if(logchannel === channel.id) {
      return message.channel.send("Tu ne peux pas spécifier le même channel")
    }
    
    message.channel.send(`Les logs sont maitenant dans ${channel}`)
    db.set(`logchannel_${message.guild.id}`, channel.id)
    channel.send("Ce channel est maintenant le logmodchannel")
  }

exports.help = {
  name: "setlog",
  aliases: [""],
  description: "",
  usage: `setlog <#channel>`,
  type: "owner",
  maj: "false",
}