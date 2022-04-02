const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {

            if (message.member.hasPermission("ADMINISTRATOR")){
                var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!args[0]) return message.reply('Veuillez entrer un pseudo pour mute')
                
                let mainrole = message.guild.roles.cache.find(role => role.name == "Member");
                let role = message.guild.roles.cache.find(role => role.name === "Mute");
                
                if (!role) return message.reply("Impossible de trouver le rôle 'Mute'. ")
                
                let time = args[1];
                if (!time) {
                    
                    return message.reply("Vous n'avez pas spécifié de temps.")
                }
                
                member.roles.remove(mainrole)
                member.roles.add(role.id)
                
                message.channel.send(`${member.user.tag} est maintenant **muté** pour **${ms(ms(time))}**`)
                
                setTimeout( function () {
                    let muteRole = message.guild.roles.cache.find(role => role.name === "Mute")
                    member.roles.remove(muteRole)
                    message.channel.send(`@${member.user.tag} est maintenant **unmute**.`)
                }, ms(time));
                let logchannel = db.fetch(`logchannel_${message.guild.id}`)
                const embed = new Discord.MessageEmbed()
                .setDescription(`${message.author} vient de **tempmute** ${member} pour **${ms(ms(time))}**!`)
                .setColor("#00fc06")
                client.channels.cache.get(logchannel).send(embed)
            } else {
                return message.channel.send("Vous n\'avez pas la permission d\'utiliser cette commande.")
                
            }
            
            
        }   
        
        exports.help = {
            name: "tempmute",
            aliases: [""],
            description: "",
            usage: `tempmute <user> <time>`,
            type: "moderation",
            maj: "false",
        }
         
      
    
