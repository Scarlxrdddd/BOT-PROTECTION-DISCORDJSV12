const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => { 
    if (message.author.id !== message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");

if(args[0] === 'on') {
    await db.set(`antispam-${message.guild.id}`, true)
    message.channel.send("L'antispam est ON")
} else if(args[0] === 'off') {
await db.delete(`antispam-${message.guild.id}`)
message.channel.send("L'antispam est OFF")
}


}

exports.help = {
    name: "antispam",
    aliases: ["as"],
    description: "",
    usage: `antispam ON/OFF`,
    type: "owner",
    maj: "false",
  }