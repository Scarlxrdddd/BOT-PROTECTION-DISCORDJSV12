const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
    const target = message.mentions.members.first()
    const member = message.mentions.members.first()

    const nukeChannel = message.channel;
    let logchannel2 = db.fetch(`logchannel2_${message.guild.id}`)

    if (!nukeChannel.deletable) return message.channel.send("Ce channel n'est pas supprimable.")
    const zebi = client.channels.cache.filter((c) => c.id === logchannel2).first()
    await nukeChannel.clone()
    await nukeChannel.delete()
}

exports.help = {
    name: "nuke",
    aliases: ["n"],
    description: "",
    usage: `nuke`,
    type: "owner",
    maj: "false",
  }