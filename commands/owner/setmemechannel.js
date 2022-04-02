const discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {

  let perms = message.member.hasPermission(message.author.id == message.guild.ownerID)
    if(!perms) return message.channel.send("Tu as besoin des permissions administrateur pour utiliser cette commande.")
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Tu dois spécifier un channel")
    
    let memechannel = db.fetch(`memechannel_${message.guild.id}`)
    
    if(memechannel === channel.id) {
      return message.channel.send("Tu ne peux pas spécifier le même channel")
    }
    
    message.channel.send(`Les memes sont maitenant dans ${channel}`)
    db.set(`memechannel_${message.guild.id}`, channel.id)
    channel.send("Ce channel est maintenant le memechannel")
  }

exports.help = {
  name: "meme",
  aliases: ["smc"],
  description: "",
  usage: `setmemechannel <#channelmeme>`,
  type: "owner",
  maj: "false",
}