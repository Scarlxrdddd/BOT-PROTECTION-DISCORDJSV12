const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
  if (!message.author.id == message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");
  let user = message.mentions.members.first()
    if(!user) return message.channel.send("You did not specify a user")

    let whitelist = db.fetch(`whitelist1_${user.id}.${message.guild.id}`)
    
    if(whitelist === 0 || whitelist === null) return message.channel.send(`${user} n'était pas whitelist.`)
    
    message.channel.send(`${user} n'est plus whitelist.`)
    db.subtract(`whitelist1_${user.id}.${message.guild.id}`, 1)
  }


  exports.help = {
    name: "unwhitelist",
    aliases: [""],
    description: "",
    usage: `unwhitelist`,
    type: "owner",
    maj: "false",
  }