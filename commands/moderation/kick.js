const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    const target = message.mentions.members.first()
    if (!target) return
    if (message.author.id == message.guild.owner.id) {
            target.kick()
                .then((_) => {
                    const embed = new Discord.MessageEmbed()
                        .setDescription(
                            `L'utilisateur ${target.user} a bien été kick du server !`
                        )
                        .setColor("#ff0000")
                    message.channel.send(embed)
                })
                .catch((e) => {
                    console.log(e)
                })
    } else {
        if (
            target.roles.highest.position >=
            message.member.roles.highest.position
        )
            return
        if (
            target.id == message.author.id ||
            target.id == client.user.id ||
            target.id == message.guild.owner.id
        )
            return

        if (target.kickable) {
            target
                .kick()
                .then((_) => {
                    const embed = new Discord.MessageEmbed()
                        .setDescription(
                            `L'utilisateur ${target.user} a bien été kick du server !`
                        )
                        .setColor("#ff0000")
                    message.channel.send(embed)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
    let logchannel = db.fetch(`logchannel_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
                        .setDescription(`${target.user} vient d'être kick par ${message.author}!`)
                        .setColor("#5f0101")
    client.channels.cache.get(logchannel).send(embed)
}

exports.help = {
    name: "kick234234",
    aliases: [""],
    description: "",
    usage: `kick234234 <user> <reason>`,
    type: "moderation",
    maj: "false",
}
