const Discord = require("discord.js")


module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')


    let rolemap = message.guild.roles.cache
                .sort((a, b) => b.position - a.position)
                .map(r => r)
                .join(",");
                if (rolemap.length > 1024) rolemap = "Il y a trop de rôles à afficher je n'y arrive pas.";
                if (!rolemap) rolemap = "Il n'y a pas de rôle.";
        const embed = new Discord.MessageEmbed()
        .setTitle("Liste des rôles sur le serveur")
       .setColor("#ffffff") 
       .addField("Voici tous les rôles :" , 
       `📝・${rolemap}`
       )
       .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
       message.channel.send(embed);
        let roleID = "759431618996994108";
        let membersWithRole = message.guild.roles.cache.get(roleID)
    }


    
    exports.help = {
        name: "rolelist",
        aliases: ["rl"],
        description: "",
        usage: `rolelist`,
        type: "owner",
        maj: "false",
      }