const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (message.member.hasPermission("ADMINISTRATOR")){
    const member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner le membre à unmute")
    if (member.id === message.guild.ownerID || member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne pouvez unmute un administrateur du serveur.")
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
    if (!member.manageable) return message.channel.send("Le bot ne peut pas unmute ce membre.")
    let muteRole = message.guild.roles.cache.find(role => role.name === "Mute")

    member.roles.remove(muteRole)
    message.channel.send(`${member} a été unmute!`)

    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
                        .setDescription(`${message.author} vient de d'**unmute** ${member}!`)
                        .setColor("#ff0005")
    client.channels.cache.get(logchannel).send(embed)
}
}

exports.help = {
    name: "unmute",
    aliases: [""],
    description: "",
    usage: `unmute <user>`,
    type: "moderation",
    maj: "false",
}
