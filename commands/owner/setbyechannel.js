const discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {

    let perms = message.member.hasPermission("ADMINISTRATOR")

    if(!perms) return message.channel.send("Tu as besoin des permissions administrateur pour utiliser cette commande.")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Tu dois spécifier un channel")
    
    let byechannel = db.fetch(`byechannel_${message.guild.id}`)
    
    if(byechannel === channel.id) {
      return message.channel.send("Tu ne peux pas spécifier le même channel")
    }
    
    message.channel.send(`Le channel de bye est maintenant ${channel}`)
    db.set(`byechannel_${message.guild.id}`, channel.id)
  }

exports.help = {
  name: "setbyechannel",
  aliases: ["sbc"],
  description: "",
  usage: `setbyechannel <#byechannel>`,
  type: "owner",
  maj: "false",
}