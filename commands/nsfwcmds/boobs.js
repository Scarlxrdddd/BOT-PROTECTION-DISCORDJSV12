const Discord = require("discord.js")
const nekoclient = require("nekos.life");
const neko = new nekoclient();

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {


    
if (!message.guild) return;
if (message.channel.nsfw === true) {

const GIF = await neko.nsfw.boobs();
const embed = new Discord.MessageEmbed()
.setColor('#202225')
.setTitle(`${message.author.tag} voici une image/gif de boobs random !`)
.setImage(GIF.url)
.setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
message.channel.send(embed);
} else {
    message.channel.send("Ce channel n'est pas NSFW !")
}
};

exports.help = {
    name: "blowjob",
    aliases: [""],
    description: "",
    usage: `blowjob`,
    type: "nsfwcmds",
    maj: "false",
}