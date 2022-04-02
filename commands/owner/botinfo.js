const { MessageEmbed } = require('discord.js')
const os = require('os')
exports.run = (client, message, args) => {
    if (message.author.id !== "YOURID") return;

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Statistiques')
            .setColor('#f3f3f3')
            .addFields(
                {
                    name: '🌐 Serveurs',
                    value: `Je suis sur ${client.guilds.cache.size} serveurs.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Je gère ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Membres',
                    value: `Je surveille ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres.`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
            
            )
            .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())


         message.channel.send(embed)
    }

exports.help = {
    name: "botinfo",
    aliases: ["bi"],
    description: "",
    usage: `botinfo`,
    type: "owner",
    maj: "false",
  }