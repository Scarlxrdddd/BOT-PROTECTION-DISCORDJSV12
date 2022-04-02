const db = require('quick.db')
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => { 
    if (message.author.id !== message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");
    if(args[0] === 'on') {
    await db.set(`antirole-${message.guild.id}`, true)
    message.channel.send("L'antirole est ON")
} else if(args[0] === 'off') {
await db.delete(`antirole-${message.guild.id}`)
message.channel.send("L'antirole est OFF")
}}

exports.help = {
    name: "antirole",
    aliases: ["ar"],
    description: "",
    usage: `antirole ON/OFF`,
    type: "owner",
    maj: "false",
  }