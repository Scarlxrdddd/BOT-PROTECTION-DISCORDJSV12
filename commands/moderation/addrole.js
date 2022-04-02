const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (
   client = new Discord.Client(),
   message = new Discord.Message(),
   args = []
) => {
   let user = message.mentions.members.first()
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')


   if(!user) return message.channel.send("Membre introuvable.")

    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Le rôle n'existe pas.")
   console.log(role.rawPosition)
   const roleposition = message.member.roles.highest.position
   console.log(roleposition)
    if (
      roleposition <=
      role.rawPosition
  )
      return

    message.channel.send(`${user} a maintenant le rôle ${role}`)
    user.roles.add(role)
    let logchannel3 = db.fetch(`logchannel3_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient d'add le rôle ${role} à ${user}.`)
    .setColor("#2236fa")
    client.channels.cache.get(logchannel3).send(embed)
   
   }



   exports.help = {
      name: "addrole",
      aliases: [""],
      description: "",
      usage: `addrole <user> <role>`,
      type: "moderation",
      maj: "false",
  }

/// by scarlxrd_d because i'm the best developper on discord.





