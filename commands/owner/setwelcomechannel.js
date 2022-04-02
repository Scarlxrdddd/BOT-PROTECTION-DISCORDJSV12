const discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {

  let perms = message.member.hasPermission(message.author.id == message.guild.ownerID)
    if(!perms) return message.channel.send("Tu as besoin des permissions administrateur pour utiliser cette commande.")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Tu dois spécifier un channel")
    
    let welcommechannel = db.fetch(`welcommechannel_${message.guild.id}`)
    
    if(welcommechannel === channel.id) {
      return message.channel.send("Tu ne peux pas spécifier le même channel")
    }
    
    message.channel.send(`Le channel de bienvenue est maintenant ${channel}`)
    db.set(`welcommechannel_${message.guild.id}`, channel.id)
  }

exports.help = {
  name: "setwelcomechannel",
  aliases: ["swc"],
  description: "",
  usage: `setwelcomechannel <#welcomechannel>`,
  type: "owner",
  maj: "false",
}