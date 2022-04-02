const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = async (client, message) => {
    

    let logchannel2 = db.fetch(`logchannel2_${message.guild.id}`)

    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });

    const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
 

    const embed = new MessageEmbed()
    .setDescription(`${message.author}`)
    .setColor("#104b14")
    .addField("**Message supprimé** : ",`${message.content}`)
    .setTimestamp()

    const zebi = client.channels.cache.filter((c) => c.id === logchannel2).first()
if(message){
  zebi.send(embed)
}
}