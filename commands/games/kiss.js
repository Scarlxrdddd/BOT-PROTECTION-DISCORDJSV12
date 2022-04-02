const Discord = require("discord.js")
const db = require('quick.db');

const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
    ) => {

if (message.mentions.members.size === 0) {
    const GIF = await neko.sfw.kiss();
    const embed = new Discord.MessageEmbed()
    .setColor('#202225')
    .setTitle(`${message.author.tag} embrasse quelqu'un`)
    .setImage(GIF.url)
    .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
    message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.kiss();
    const embed = new Discord.MessageEmbed()
    .setColor('#202225')
    .setTitle(`${message.author.tag} embrasse ${member.user.tag}`)
    .setImage(GIF.url)
    .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
    message.channel.send(embed);
    }
    
    exports.help = {
        name: "kiss",
        aliases: [""],
        description: "",
        usage: `kiss`,
        type: "games",
        maj: "false",
    }