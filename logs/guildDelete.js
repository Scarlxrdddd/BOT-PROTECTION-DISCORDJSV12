const Discord = require("discord.js")
module.exports = async (client, guild) => {

    const config = require("../config.json")
client.config = config

    let ownerAlert = client.users.cache.get(config.owner)
    if (ownerAlert) {
        try {
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${client.user.username} a quitté le serveur :** ${guild.name} \n **qui avait** ${guild.memberCount} **membres.** \n **Id du serveur : **${guild.id}`)
                .setColor("#080808")
            ownerAlert.send(embed)
        } catch {}
    }
}