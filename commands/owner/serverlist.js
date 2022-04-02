const Discord = require("discord.js")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (message.author.id !== "YOURID") return;

    const embed1 = new Discord.MessageEmbed().setColor("#f3f3f3")

    const embed2 = new Discord.MessageEmbed()
        .setTitle("Liste des serveurs ayant votre bot")
        .setDescription(
            `\`\`\`Membres qui utilisent ${client.user.username}: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\nServeurs qui utilisent ${client.user.username}: ${client.guilds.cache.size}\`\`\``
        )                
        .setColor("#f3f3f3")
        .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())

    message.channel.send(embed1).then((msg) => {
        client.guilds.cache.forEach((guild) =>{ 
            embed2.addField(
                `📌・ ${guild.name} (${guild.id})`,
                `Membre total du serveur : ${guild.memberCount}`
            )
            msg.edit(embed2).catch((_) => {})
        })
    })
}

exports.help = {
    name: "serverlist",
    aliases: ["sl"],
    description: "",
    usage: `serverlist`,
    type: "owner",
    maj: "false",
  }