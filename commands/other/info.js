const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

exports.run = async (client, message, args) => {

        // Provide a menu with a channel, an author ID to let control the menu, and an array of menu pages.
        let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'main',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    title: 'Informations',
                    description: 'Bot codé par L\'#1412',
                    thumbnail: '▶ pour aller à la page suivante.',
                    color: '#0348'
                    
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏹': 'delete',
                    '▶': 'extra'
                }
            },
            {
                name: 'extra',
                content: new MessageEmbed({
                    title: 'Comment report un bug ?',
                    description: 'Vous n\'avez qu\'à rejoindre notre serveur : https://discord.gg/jh6A3Q4kw4 et aller dans le channel #reportbug. '
                }),
                reactions: {
                    '◀': 'first'
                }
            }
            // The last parameter is the number of milliseconds you want the menu to collect reactions for each page before it stops to save resources
            // The timer is reset when a user interacts with the menu.
            // This is optional, and defaults to 180000 (3 minutes).
        ], 300000)
        // Run Menu.start() when you're ready to send the menu in chat.
        // Once sent, the menu will automatically handle everything else.
        helpMenu.start()
    }

    exports.help = {
        name : "info",
        aliases: [""],
        description : "Affiche le lien d'invitation du bot.",
        usage : `info`,
        type : "other",
        maj: "false"
    }