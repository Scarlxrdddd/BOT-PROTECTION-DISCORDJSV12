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
 
const GIF = await neko.nsfw.bJ();
const embed = new Discord.MessageEmbed()
.setColor('#202225')
.setTitle(`${message.author.tag} voici une image/gif de blowjob random !`)
.setImage(GIF.url)
.setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
message.channel.send(embed);
} else {
    message.channel.send("Ce channel n'est pas NSFW !")
}
};

exports.help = {
    name: "boobs",
    aliases: [""],
    description: "",
    usage: `boobs`,
    type: "nsfwcmds",
    maj: "false",
}