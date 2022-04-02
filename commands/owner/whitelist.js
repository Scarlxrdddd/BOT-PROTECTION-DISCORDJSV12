const Discord = require("discord.js")
const db = require("quick.db")
const db1 = require('mongoose')
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (message.author.id !== message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");
    
let user = message.mentions.members.first()

if(!user) return message.channel.send("Vous avez oublié de spécifier un utilisateur !")
let whitelist = db.fetch(`whitelist1_${user.id}.${message.guild.id}`)

if(whitelist === 1) return message.channel.send(`${user} est déjà whitelist.`)
db.add(`whitelist1_${user.id}.${message.guild.id}`, 1)

message.channel.send(`${user} a été whitelist`)

}

exports.help = {
    name: "whitelist",
    aliases: [""],
    description: "",
    usage: `whitelist`,
    type: "owner",
    maj: "false",
  }