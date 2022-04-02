
const Discord = require("discord.js")
const db = require('quick.db');

const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {

const member = message.mentions.members.first();
const GIF = await neko.nsfw.spank();
const embed = new Discord.MessageEmbed()
.setColor('#202225')
.setTitle(`${message.author.tag} spank ${member.user.tag}`)
.setImage(GIF.url)
.setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
message.channel.send(embed);
}

exports.help = {
    name: "spanks",
    aliases: [""],
    description: "",
    usage: `spanks`,
    type: "games",
    maj: "false",
}