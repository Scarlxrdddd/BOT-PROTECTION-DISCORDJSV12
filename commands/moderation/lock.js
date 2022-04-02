const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    await message.mentions.channels.forEach(async channel => {
                if (!message.channel.send(`<#${channel.id}> a été lock.`))
            await message.channel.send(`<#${channel.id}> a été lock.`)
            await channel.createOverwrite(message.guild.id, {
                VIEW_MESSAGES: false,
                SEND_MESSAGES: false
            })
            let logchannel3 = db.fetch(`logchannel3_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient de lock le channel <#${channel.id}>`)
    .setColor("#198fc4")
    client.channels.cache.get(logchannel3).send(embed)
    }
);}

    exports.help = {
        name: "lock",
        aliases: [""],
        description: "",
        usage: `lock`,
        type: "moderation",
        maj: "false",
    }
    
