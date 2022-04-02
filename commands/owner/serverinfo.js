const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    if (message.author.id !== message.guild.ownerID)return message.channel.send("Cette commande ne peut être utilisé que par l'owner du serveur.");

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`Informations du serveur ${message.guild.name}`)
            .addFields(
                {
                    name: "Owner: ",
                    value: `${message.guild.owner.user}`,
                    inline: true
                },
                {
                    name: "Membres: ",
                    value: `Il y a ${message.guild.memberCount} membres sur le serveur!`,
                    inline: true
                },
                {
                    name: "Membres en Ligne: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} membres en ligne!`,
                    inline: true
                },
                {
                    name: "Total Bots: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Date de création: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Compteur de Rôles: ",
                    value: `Il y a ${message.guild.roles.cache.size} roles dans le serveur!`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Vérifié: `,
                    value: message.guild.verified ? 'Le serveur est vérifié!' : `Le serveur n'est pas vérifié!`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Il y a ${message.guild.premiumSubscriptionCount} Boosters!` : `Il n'y a pas de boosters!`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Il y a ${message.guild.emojis.cache.size} emojis!` : 'Il n\'y a pas d\'emojis sur le serveur!' ,
                    inline: true
                }
                
            )
            .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())

         message.channel.send(embed)
    }

exports.help = {
    name: "serverinfo",
    aliases: ["si"],
    description: "",
    usage: `serverinfo`,
    type: "owner",
    maj: "false",
  }