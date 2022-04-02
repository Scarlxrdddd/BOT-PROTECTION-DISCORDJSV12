const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    const member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner le membre à mute")
    if (member.id === message.guild.ownerID || member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne pouvez pas mute un administrateur du serveur.")
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre.")
    if (!member.manageable) return message.channel.send("Le bot ne peut pas mute ce membre.")
    if(member.roles.cache.find(r => r.name === "Mute")) return message.reply(`Ce membre est déjà mute.`); 
    const reason = args.slice(1).join(' ') || "Aucune raison fournie."
    let muteRole = message.guild.roles.cache.find(role => role.name === "Mute")
    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Mute',
                permissions: 0
            }
        })
        message.guild.channels.cache.forEach(channel => channel.createOverwrite(muteRole, {
            SEND_MESSAGES: false,
            CONNECT: false,
            ADD_REACTIONS: false

        }))
    }
    await member.roles.add(muteRole)
    message.channel.send(`${member} a été mute!`)

    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
                        .setDescription(`${message.author} vient de mute ${member} avec comme raison : **${reason}**!`)
                        .setColor("#2236fa")
    client.channels.cache.get(logchannel).send(embed)
}

exports.help = {
    name: "mute",
    aliases: [""],
    description: "",
    usage: `mute <user>`,
    type: "moderation",
    maj: "false",
}
