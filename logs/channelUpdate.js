const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = async (client, oldChannel, newChannel) => {
  if(db.has(`antichannel-${newChannel.guild.id}`)=== false) return;
    let logchannel7 = db.fetch(`logchannel7_${newChannel.guild.id}`)
    const fetchGuildAuditLogs = await newChannel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_UPDATE'
    });
    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelDeleted;
    const channmember = newChannel.guild.member(executor)
    let whitelist = db.fetch(`whitelist1_${channmember.id}.${newChannel.guild.id}`)
    if(whitelist === 1) return;
    channmember.roles.cache.forEach((role) => {
    channmember.roles.remove(role.id).catch((_) => 0)
})
    const embed = new MessageEmbed()
    .setAuthor(`Modification d'un salon`)
    .setColor("#b14707")
    .addField('**Avant**:',`${oldChannel.name}`)
    .addField("**Après** : ",`${newChannel.name}`)
    .addField("**Punition** :","Dérank de la personne en cours <a:loading:787035516972957696>")
    .addField('**Punis :**',`${channmember}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL({dynamic : true}));
    const zebi = client.channels.cache.filter((c) => c.id === logchannel7).first()
    if(newChannel){
      zebi.send(embed)}
}