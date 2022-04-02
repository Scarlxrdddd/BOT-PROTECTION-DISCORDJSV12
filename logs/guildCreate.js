const Discord = require("discord.js")
const fs = require("fs");

module.exports = async (client, guild) => {
    
        fs.writeFileSync(`db/serveur/${guild.id}.json`)
      
    const config = require("../config.json")
client.config = config
    let ownerAlert = client.users.cache.get(config.owner)
    if (ownerAlert) {
        try {
            const embed = new Discord.MessageEmbed()
            .setDescription(`**${client.user.username} a rejoint le serveur :** ${guild.name} \n **qui a** ${guild.memberCount} **membres.** \n **Id du serveur : **${guild.id}`)
            .setColor("#080808")
            ownerAlert.send(embed)
        } catch {}
    }
}

