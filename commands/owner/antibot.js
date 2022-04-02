const db = require('quick.db')

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => { 
    if (message.author.id !== message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");

if(args[0] === 'on') {
    await db.set(`antibot-${message.guild.id}`, true)
    message.channel.send("L'antibot est ON")
} else if(args[0] === 'off') {
await db.delete(`antibot-${message.guild.id}`)
message.channel.send("L'antibot est OFF")
}


    
}

exports.help = {
    name: "antibot",
    aliases: ["ab"],
    description: "",
    usage: `antibot ON/OFF`,
    type: "owner",
    maj: "false",
  }