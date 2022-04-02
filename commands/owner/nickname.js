const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
  let name = args.slice(1).join(" ")
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
  if (!args[0]) return message.channel.send('Qui voulez-vous que je rename ? Veuillez refaire la commande.')
  const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (!User) return message.channel.send('Cet utilisateur n\' a pas été trouvé! 😦')
  if(!name){
    return message.channel.send("Quel nickname voulez vous ? Veuillez refaire la commande.")

  }

User.setNickname(name)
message.channel.send(`${User} a bien été rename. ✅`)

let logchannel3 = db.fetch(`logchannel3_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient de rename ${User} en **${name}**`)
    .setColor("#e414e7")
    client.channels.cache.get(logchannel3).send(embed)

  }

  exports.help = {
    name: "nickname",
    aliases: ["nn"],
    description: "",
    usage: `nickname <username>`,
    type: "owner",
    maj: "false",
  }