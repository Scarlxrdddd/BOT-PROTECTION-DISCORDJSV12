const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

    const id = args[0]
    try {
        message.guild.members.unban(id)
    } catch (error) {
        message.channel.send("Aucune personne trouvée avec cette id.")
    }













}
exports.help = {
    name: "unban1",
    aliases: [""],
    description: "",
    usage: `unban1 <userid>`,
    type: "moderation",
    maj: "false",
}