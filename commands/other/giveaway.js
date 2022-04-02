const { giveawaysManager } = require("discord-giveaways")
const ms = require('ms');
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')



    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(':x: Vous n\'avez pas mentionné un channel valide!');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Vous devez spécifier une duration valide!');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Vous devez spécifier un nombre de gagnant valide!');
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(':x: Vous devez spécifier un lot!');
    }

    
    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: client.config.hostedBy ? message.author : null,
        messages: {
            giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
            giveawayEnded: "**GIVEAWAY ENDED** 🎉🎉",
            timeRemaining: "Temps restant: **{duration}**!",
            inviteToParticipate: "Réagissez avec " + client.config.giveawayEmoji + " pour participer!",
            winMessage: "Félicitations, {winners}! Vous avez gagné **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Giveaway annulé, personne n'a gagné.",
            hostedBy: "Hosté par: {user}",
            winners: "Gagnant(s)",
            endedAt: "Fin dans",
            units: {
                seconds: "secondes",    
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                pluralS: false
            }
        }
        
    });
};
  exports.help = {
    name : "giveaway",
    aliases: [""],
    description : "Permet de créer un giveaway",
    usage : `giveaway`,
    type : "other",
    maj: "false"
}