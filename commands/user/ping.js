const Discord = require("discord.js")
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
   

const msg = await message.channel.send("+ping");

msg.edit(
    `${message.author} Pong!
    Latence du bot: ${(await msg).createdTimestamp - message.createdTimestamp}ms
    Latence de l'API: ${Math.round(client.ws.ping)}ms
`)

}

exports.help = {
    name: "ping",
    aliases: [""],
    description: "",
    usage: `ping`,
    type: "user",
    maj: "false",
  }