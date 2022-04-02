const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    

    const member = args[0]; 
    const target = message.mentions.members.first()
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    
    try {
        message.guild.fetchBans().then( bans => {
         message.guild.members.unban(target)
        })
        await message.channel.send(`${target} a été unbanni!`)

    } catch (e) {

    
        return message.channel.send(`Une erreur est survenue, aucun utilisateur a été unbanni!`)
    }
    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
                        .setDescription(`${message.author} vient d'unban ${member}!`)
                        .setColor("#5f0101")
    client.channels.cache.get(logchannel).send(embed)
}

exports.help = {
    name: "unban",
    aliases: [""],
    description: "",
    usage: `unban <userid>`,
    type: "moderation",
    maj: "false",
}



