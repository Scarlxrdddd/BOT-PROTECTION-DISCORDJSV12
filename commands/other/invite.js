const Discord = require("discord.js")

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Comment inviter le bot ?")
    .addField(`⚪・Inviter **${client.user.username}**`,`Cliquez [ici](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
    .addField("⬇","Connectez-vous, choisissez votre serveur et mettez lui les permissions administrateurs. Si vous rencontrez un problème ``+info`` et ``▶``")
    .setColor("#f3f3f3")
    .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())

    message.channel.send(embed)
}
exports.help = {
    name : "invite",
    aliases: [""],
    description : "Affiche le lien d'invitation du bot.",
    usage : `invite`,
    type : "other",
    maj: "false"
}