const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => { 
    const member = message.mentions.members.first()
    let whitelist = db.fetch(`whitelist1_${member.id}.${message.guild.id}`)
    if(whitelist !== 1) return message.reply("Vous n'êtes pas whitelist. Vous devez être whitelist pour utiliser cette commande.")

member.roles.cache.forEach((role) => {
 member.roles.remove(role.id).catch((_) => 0)
})

const embed = new MessageEmbed()

.setDescription(`${member} **a bien été dérank.**`)
.setColor("#f3f3f3")

message.channel.send(embed)

}

exports.help = {
    name: "derank",
    aliases: ["d"],
    description: "",
    usage: `derank`,
    type: "owner",
    maj: "false",
  }