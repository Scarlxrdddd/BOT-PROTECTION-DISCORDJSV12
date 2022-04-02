const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = async (client, channel) => {
  if(db.has(`antichannel-${channel.guild.id}`)=== false) return;
    let logchannel7 = db.fetch(`logchannel7_${channel.guild.id}`)
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    });
    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    
    const channmember = channel.guild.member(latestChannelDeleted)
    let whitelist = db.fetch(`whitelist1_${channmember.id}.${channel.guild.id}`)
    if(whitelist === 1) return;
    const position = channel.position
    channel.clone().then((c) => {c.setPosition(position),c.send(`Channel recrée suite à une suppression de ${channmember}.`)})
    channmember.roles.cache.forEach((role) => {
    channmember.roles.remove(role.id).catch((_) => 0)
})
    const embed = new MessageEmbed()
    .setAuthor(`Supprimation d'un nouveau salon`)
    .setColor("#b14707")
    .setDescription(`**Action**: supprimation de salon\n**Salon supprimé**: ${channel.name}\n **Par**:${channmember}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL({dynamic : true}));
    const zebi = client.channels.cache.filter((c) => c.id === logchannel7).first()
    if(channel){
      zebi.send(embed)}
}

     
    


