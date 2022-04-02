const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    const target = message.mentions.members.first()
    const member = message.mentions.members.first()
    if (target){

        const targetMember = message.guild.members.cache.get(target.id)
        
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        if (!member) return message.channel.send("Veuillez mentionner le membre à ban")
        
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
        if (!target.bannable) return message.channel.send('Le bot ne peut pas bannir ce membre.')
        if (message.author.id == message.guild.owner.id) {
            targetMember.ban()
            .then((_) => {
                const embed = new Discord.MessageEmbed()
                .setDescription(
                    `${targetMember} a bien été banni du serveur !`
                    )
                    .setColor("#36393F")
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
                        
                        if (targetMember.bannable) {
                            targetMember
                            .ban()
                            .then((_) => {
                                const embed = new Discord.MessageEmbed()
                                .setDescription(
                                    `${targetMember} a bien été banni du server !`)
                                    .setColor("#36393F")
                                    message.channel.send(embed)
                                })
                                .catch((e) => {
                                    console.log(e)
                                })
                            }
                        }
                    }
                        let logchannel = db.fetch(`logchannel_${message.guild.id}`)
                        const embed = new Discord.MessageEmbed()
                        .setDescription(`${message.author} vient de bannir ${target}!`)
                        .setColor("#051183")
                        client.channels.cache.get(logchannel).send(embed)
}

exports.help = {
    name: "ban",
    aliases: [""],
    description: "",
    usage: `ban <user> <reason>`,
    type: "moderation",
    maj: "false",
}
