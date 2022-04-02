
const Discord = require("discord.js")
const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    if (message.channel.nsfw === true) {
if (!message.guild) return;
const GIF = await neko.nsfw.anal();
const embed = new Discord.MessageEmbed()
.setColor('#202225')
.setTitle(`${message.author.tag} voici une image/gif d'anal random !`)
.setImage(GIF.url)
.setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())

message.channel.send(embed);
    }
}

exports.help = {
    name: "anal",
    aliases: [""],
    description: "",
    usage: `anal`,
    type: "nsfwcmds",
    maj: "false",
}