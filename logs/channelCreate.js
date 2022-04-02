const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = async (client, channel) => {
  if(db.has(`antichannel-${channel}`)=== false) return;
    let logchannel7 = db.fetch(`logchannel7_${channel.guild.id}`)
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;
    const channmember = channel.guild.member(executor)
    let whitelist = db.fetch(`whitelist1_${channmember.id}.${channel.guild.id}`)
    if(whitelist === 1) return;
    channmember.roles.cache.forEach((role) => {
    channmember.roles.remove(role.id).catch((_) => 0)
    })
    const fetchedChannel = client.channels.cache.get(channel.id)
    fetchedChannel.delete()
    const embed = new MessageEmbed()
    .setAuthor(`Création d'un nouveau salon`)
    .setColor("#b14707")
    .setDescription(`**Action**: création de salon\n**Salon crée**: ${channel.name}\n **Par**:${channmember} `)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL({dynamic : true}));
    const zebi = client.channels.cache.filter((c) => c.id === logchannel7).first()
    if(channel){
      zebi.send(embed)
    }
}