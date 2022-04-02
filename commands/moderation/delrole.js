const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
   if (message.member.hasPermission("ADMINISTRATOR")) return;
   
   let user = message.mentions.members.first()
   if(!user) return message.channel.send("Membre introuvable.")

    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Le rôle n'existe pas.")
    message.channel.send(`${user} n'a maintenant plus le rôle ${role}`)
    user.roles.remove(role)

    let logchannel3 = db.fetch(`logchannel3_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient de delete le rôle ${role} à ${user}.`)
    .setColor("#ff0000")
    client.channels.cache.get(logchannel3).send(embed)


   }
   exports.help = {
      name: "delrole",
      aliases: [""],
      description: "",
      usage: `delrole <user> <role>`,
      type: "moderation",
      maj: "false",
  }
  