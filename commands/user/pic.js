const Discord = require("discord.js")
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {


    const target = message.mentions.members.first()
    if(!target) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Voici votre avatar !`)
        .setImage(message.author.displayAvatarURL({dynamic : true}))
        .setColor("RANDOM")
        .setFooter(`©️Hinata, Bot crée par: ${"Shoto'#0911"}`, client.user.displayAvatarURL())
        return message.channel.send(embed)
    } else{
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Voici l'avatar de ${target.user.username} !`)
    .setImage(target.user.avatarURL({dynamic : true})) 
    .setColor("RANDOM")
    .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
    message.channel.send(embed)
}
}
exports.help = {
    name: "pic",
    aliases: [""],
    description: "",
    usage: `pic <user>`,
    type: "user",
    maj: "false",
  }