const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

let cmdmember = `\`help\`, \`helpall\`, \`pic\`, \`ping\`, \`userinfo\`, \`invite\`, \`info\``
let cmdgames =  `\`rps\`, \`meme\`, \`8ball\`, \`kiss\`, \`hug\`, \`slap\`, \`baka\``
let cmdgiveaway = `\`giveaway\`, \`reroll\`, \`end\``
let cmdmoderation = `\`addrole\`, \`delrole\`, \`ban\`, \`unban\`, \`clear\`, \`lock\`, \`unlock\`, \`mute\`, \`unmute\`, \`tempmute\`, \`snipe\`, \`kick\``
let cmdadmin = `\`botinfo\`, \`nickname\`, \`say\`, \`serverinfo\`, \`rolelist\`, \`nuke\`, \`serverstats\`, \`derank\``
let cmdowner = `\`serverlist\`, \`setbotstatut\`, \`setstream\``
let cmdlogs = `\`setlogserver\`, \`setlogmod\`, \`setlogaction\`, \`setlograid\`, \`setlogvoice\``
let cmdchannel = `\`setwelcomechannel\`, \`setbyechannel\``
let cmdnsfw = `\`pussy\`, \`boobs\`, \`anal\`, \`blowjob\``
let cmdprotect = `\`antispam\`, \`antilinks\`, \`antibot\`, \`antirole\`, \`antiwebhook\`, \`antichannel\`, \`whitelist\`, \`unwhitelist\``
let helpArray = message.content.split(" ");
let helpArgs = helpArray.slice(1);

if(!helpArgs[0]) {

const embed = new MessageEmbed()
.setAuthor("HELP - Kuroko")
.setThumbnail(client.user.displayAvatarURL())
.setDescription("Voici toutes les commandes disponibles sur le bot :")
.addField('🧑・User :', `\`help\`, \`helpall\`, \`pic\`, \`ping\`, \`userinfo\`, \`invite\`, \`info\`, \`rps\`, \`meme\`, \`8ball\`, \`kiss\`, \`hug\`, \`slap\`, \`baka\``)
.addField('🔞・NSFW (Uniquement dans les channels NSFW) :', cmdnsfw)
.addField('🛠・Modérations :', cmdmoderation)
.addField('🗂・Protections :', cmdprotect)
.addField('💼・Admins :', cmdadmin)
.addField('🔒・Owners :', cmdowner)
.addField('📻・Channels :', cmdchannel)
.addField('🎁・Giveaways :', cmdgiveaway)
.addField('📝・Logs :', cmdlogs)
.setColor('#36393F')
.setFooter(`YOUR BOT NAME | ${client.config.prefix}info pour plus d'infos.`, client.user.displayAvatarURL())

message.channel.send(embed)
}
if(helpArgs[0] === 'antiwebhook') {
  var embed1 = new Discord.MessageEmbed()
  .setTitle('Help Antiwebhook')
  .setDescription('Faites ``/antiwebhook on`` pour activer la protection, celle-ci marchera pour tous les utilisateurs, même administrateur. La punition pour webhook est un dérank de l\'utilisateur. Pour désactiver la protection ``/antiwebhook off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``/setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed1)
};
if(helpArgs[0] === 'antilinks') {
  var embed2 = new Discord.MessageEmbed()
  .setTitle('Help Antilinks')
  .setDescription('Faites ``/antilinks on`` pour activer la protection, celle-ci marchera pour tous les membres sauf administrateur. La punition pour un antilinks est juste un delete message. Pour désactiver la protection faites ``+antilinks off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``/setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed2)
};
if(helpArgs[0] === 'antichannel') {
  var embed3 = new Discord.MessageEmbed()
  .setTitle('Help Antichannel')
  .setDescription('Faites ``/antichannel on`` pour activer la protection, celle-ci marchera pour tous les utilisateurs, même administrateur. La punition pour delete et create un channel est un dérank. Pour désactiver la protection faites ``/antichannel off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``+setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed3)
};
if(helpArgs[0] === 'antispam') {
  var embed4 = new Discord.MessageEmbed()
  .setTitle('Help Antispam')
  .setDescription('Faites ``/antispam on`` pour activer la protection, celle-ci marchera pour tous les utilisateurs. Pour désactiver la protection faites ``/antispam off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``/setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed4)
};
if(helpArgs[0] === 'antibot') {
  var embed5 = new Discord.MessageEmbed()
  .setTitle('Help Antibot')
  .setDescription('Faites ``/antibot on`` pour activer la protection, celle-ci marchera pour tous les utilisateurs, même administrateur. La punition pour inviter un bot est rien. Pour désactiver la protection faites ``/antibot off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``/setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed5)
};
if(helpArgs[0] === 'antirole') {
  var embed5 = new Discord.MessageEmbed()
  .setTitle('Help Antirole')
  .setDescription('Faites ``/antirole on`` pour activer la protection, celle-ci marchera pour tous les utilisateurs, même administrateur. La punition pour antirole update est un dérank. Pour désactiver la protection faites ``/antirole off``. Les logs de la protection seront dans les logs raid. Pour définir celle-ci ``/setlograid <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed5)
};
if(helpArgs[0] === 'setwelcomechannel') {
  var embed6 = new Discord.MessageEmbed()
  .setTitle('Help Setwelcomechannel')
  .setDescription('Faites ``/setwelcomechannel <#channel>`` pour activer le channel de bienvenue. Pour changer le channel de welcome ``/setwelcomechannel <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed6)
};
if(helpArgs[0] === 'setbyechannel') {
  var embed7 = new Discord.MessageEmbed()
  .setTitle('Help Setbyechannel')
  .setDescription('Faites ``/setbyechannel <#channel>`` pour activer le channel de départ. Pour changer le channel de départ ``/setbyechannel <#channel>``.')
  .setColor('#36393F')
  return message.reply(embed7)
};
if(helpArgs[0] === 'serverstats') {
  var embed7 = new Discord.MessageEmbed()
  .setTitle('Help Serverstats')
  .setDescription('Faites ``/serverstats on`` pour activer les channels stats. Pour retirer les channels stats ``/serverstats off``.')
  .setColor('#36393F')
  return message.reply(embed7)
};
}
exports.help = {
    name: "help",
    aliases: ["h"],
    description: "",
    usage: `help`,
    type: "user",
    maj: "false",
  }