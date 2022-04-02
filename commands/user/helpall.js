const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

module.exports.run = async (client, message, args) => {

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    
    let helpMenu = new Menu(message.channel, message.author.id, [    
        {
            name: 'main',
            
            content: new MessageEmbed({
                title: 'Help・Membres :',
                description: '',
                fields: [
                    {
                      name: "``help``",
                      value: "permet d'afficher toutes les commandes."
                    },
                    {
                        name: "``pic``",
                        value: "permet d'afficher son avatar ou l'avatar des gens."
                    },
                    {
                        name: "``ping``",
                        value: "permet de savoir le ping du bot et l'api Discord."
                    },
                    {
                        name: "``userinfo``",
                        value: "permet d'afficher des informations sur les utilisateurs."
                    },
                    {
                        name: "``invite``",
                        value: "permet d'avoir le lien d'invitation pour inviter le bot."
                    },
                    {
                        name: "``info``",
                        value: "permet d'avoir plus d'informations."
                    }
                  ],
                thumbnails: '▶ pour aller à la page suivante.',
                color: '#0348'
                
            }),
            // A set of reactions with destination names attached.
            // Note there's also special destination names (read below)
            reactions: {
                '⏹': 'delete',
                '◀': 'helpLog',
                '▶': 'helpfun'
            }
        },
        {
            name: 'helpfun',
            content: new MessageEmbed({
                title: 'Help・Funs :',
                description: '',
                fields: [
                {
                    name: "``rps``",
                    value: "permet de jouer à pierre papier ciseaux."
                },
                {
                    name: "``meme``",
                    value: "permet de faire apparaitre des memes faire au préalable : ``setmemechannel``"
                },
                {
                    name: "``rps``",
                    value: "permet de jouer à pierre papier ciseaux."
                },
                {
                    name: "``8ball``",
                    value: "permet de jouer à 8ball."
                },
                {
                    name: "``kiss``",
                    value: "permet de kiss."
                },
                {
                    name: "``hug``",
                    value: "permet de hug."
                },
                {
                    name: "``slap``",
                    value: "permet de slap."
                },
                {
                    name: "``baka``",
                    value: "permet de baka."
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'main',
                '▶': 'helpnsfw'
            }
        },
        {
            name: 'helpnsfw',
            content: new MessageEmbed({
                title: 'Help・Nsfw :',
                description: '',
                fields: [
                {
                    name: "``pussy``",
                    value: "permet d'afficher une image de pussy."
                },
                {
                    name: "``boobs``",
                    value: "permet d'afficher une image de boobs."
                },
                {
                    name: "``anal``",
                    value: "permet d'afficher une image de anal."
                },
                {
                    name: "``blowjob``",
                    value: "permet d'afficher une image blowjob."
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpfun',
                '▶': 'helpmodération'
            }
        },
        {
            name: 'helpmodération',
            content: new MessageEmbed({
                title: 'Help・Modérations :',
                description: '',
                fields: [
                {
                    name: "``addrole``",
                    value: "permet d'addrole à un utilisateur."
                },
                {
                    name: "``delrole``",
                    value: "permet de delrole un utilisateur."
                },
                {
                    name: "``ban``",
                    value: "permet de ban un utilisateur."
                },
                {
                    name: "``unban``",
                    value: "permet d'unban un utilisateur."
                },
                {
                    name: "``clear``",
                    value: "permet de clear les messages."
                },
                {
                    name: "``lock``",
                    value: "permet de lock un channel."
                },
                {
                    name: "``unlock``",
                    value: "permet d'unlock un channel."
                },
                {
                    name: "``mute``",
                    value: "permet de mute un utilisateur."
                },
                {
                    name: "``unmute``",
                    value: "permet d'unmute un utilisateur."
                },
                {
                    name: "``tempmute``",
                    value: "permet de tempsmute un utilisateur."
                },
                {
                    name: "``snipe``",
                    value: "permet de récupérer un message supprimé."
                },
                {
                    name: "``kick``",
                    value: "permet de kick un utilisateur."
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpnsfw',
                '▶': 'helpProtections'
            }
        },
        {
            name: 'helpProtections',
            content: new MessageEmbed({
                title: 'Help・Protection :',
                description: '',
                fields: [
                {
                    name: "``antispam``",
                    value: "permet ON/OFF l'antispam. ``/antispam on/off``"
                },
                {
                    name: "``antirole``",
                    value: "permet ON/OFF l'antirole. ``/antirole on/off``"
                },
                {
                    name: "``antilinks``",
                    value: "permet ON/OFF l'antilinks. ``/antilinks on/off``"
                },
                {
                    name: "``antibot``",
                    value: "permet ON/OFF l'antibot. ``/antibot on/off``"
                },
                {
                    name: "``antiwebhook``",
                    value: "permet ON/OFF l'antibot. ``/antiwebhook on/off``"
                },
                {
                    name: "``antichannel``",
                    value: "permet ON/OFF l'antichannel. ``/antichannel on/off``"
                },
                {
                    name: "``whitelist``",
                    value: "permet d'ajouter quelqu'un à la whitelist"
                },
                {
                    name: "``unwhitelist``",
                    value: "permet de retirer quelqu'un de la whitelist"
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpmodération',
                '▶': 'helpAdmin'
            }
        },
        {
            name: 'helpAdmin',
            content: new MessageEmbed({
                title: 'Help・Admins :',
                description: '',
                fields: [
                {
                    name: "``botinfo``",
                    value: "permet d'avoir accès au stats du bot."
                },
                {
                    name: "``nickname``",
                    value: "permet de renommer les utilisateurs."
                },
                {
                    name: "``say``",
                    value: "permet de parler avec le bot."
                },
                {
                    name: "``serverinfo``",
                    value: "permet d'avoir accès au stats du serveur."
                },
                {
                    name: "``rolelist``",
                    value: "permet d'avoir accès à tous les rôles du serveur."
                },
                {
                    name: "``nuke``",
                    value: "permet de nuke des channels."
                },
                {
                    name: "``serverstats``",
                    value: "permet d'activer ON/OFF des stats en channel vocal. ``/serverstats on/off``"
                },
                {
                    name: "``derank``",
                    value: "permet de derank une personne. ``/derank @user``"
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpProtections',
                '▶': 'helpOwner'
            }
        },
        {
            name: 'helpOwner',
            content: new MessageEmbed({
                title: 'Help・Owner :',
                description: '',
                fields: [
                {
                    name: "``serverlist``",
                    value: "permet d'avoir accès au liste des serveurs ayant le bot."
                },
                {
                    name: "``setbotstatut``",
                    value: "permet de changer le statut du bot."
                },
                {
                    name: "``setstream``",
                    value: "permet de changer le stream du bot."
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpAdmin',
                '▶': 'helpChannels'
            }
        },
        {
            name: 'helpChannels',
            content: new MessageEmbed({
                title: 'Help・Channels :',
                description: '',
                fields: [
                {
                    name: "``setwelcomechannel``",
                    value: "permet de set le welcomechannel. ``/setwelcomechannel <#channel>``"
                },
                {
                    name: "``setbyechannel``",
                    value: "permet de set le byechannel. ``/setbyechannel <#channel>``"
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpOwner',
                '▶': 'helpGiveaway'
            }
        },
        {
            name: 'helpGiveaway',
            content: new MessageEmbed({
                title: 'Help・Giveaways :',
                description: '',
                fields: [
                {
                    name: "``giveaway``",
                    value: "permet de créer un giveaway. ``/giveaway <#channel> <time> <nombre de winner> <cadeau>``"
                },
                {
                    name: "``reroll``",
                    value: "permet de reroll un giveaway. ``/reroll <IDduMessageGiveaway>``"
                },
                {
                    name: "``end``",
                    value: "permet de end un giveaway. ``/end <IDduMessageGiveaway>``"
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpChannels',
                '▶': 'helpLog'
            }
        },
        {
            name: 'helpLog',
            content: new MessageEmbed({
                title: 'Help・Logs :',
                description: '',
                fields: [
                {
                    name: "``setlogserver``",
                    value: "permet de setlogserver. ``/setlogserver <#channel>``"
                },
                {
                    name: "``setlogcmd``",
                    value: "permet de setlogcmd. ``/setlogcmd <#channel>``"
                },
                {
                    name: "``setlogmod``",
                    value: "permet de setlogmod. ``/setlogmod <#channel>``"
                },
                {
                    name: "``setlogaction``",
                    value: "permet de setlogaction. ``/setlogaction <#channel>``"
                },
                {
                    name: "``setlogvoice``",
                    value: "permet de setlogvoice. ``/setlogvoice <#channel>``"
                },
                ],
                color: '#0348'
            }),
            reactions: {
                '◀': 'helpGiveaway',
                '▶': 'main'
            }
        }
    ], 300000)
    helpMenu.start()
}



exports.help = {
    name: "helpall",
    aliases: ["hall"],
    description: "",
    usage: `helpall`,
    type: "user",
    maj: "false",
  }